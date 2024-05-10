import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '~/shared/config/env';

export async function POST(
  request: NextRequest,
  { params }: { params: { tag: string } },
) {
  const tag = params.tag;
  const token = request.nextUrl.searchParams.get('token');

  if (token !== env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: tag });
}

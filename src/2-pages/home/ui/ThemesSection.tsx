'use client';

import { categories } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';
import { SectionHeadings } from '~/shared/ui/SectionHeader';

export function ThemesSection() {
  // TODO Fix types
  const headings = categories.get('themes')?.headings as SectionHeadings;

  return <Section headings={headings}></Section>;
}

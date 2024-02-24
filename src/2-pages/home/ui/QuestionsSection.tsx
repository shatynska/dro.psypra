import Link from 'next/link';

import { useGetQuestionsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function QuestionsSection() {
  const { headings, items } = useGetQuestionsControllerExecuteSuspense();

  const breaks = new Set([0, 2, 5, 7]);

  return (
    <Section id="questions" headings={headings} height="fixed">
      <ul className="flex w-full flex-col justify-center gap-x-24 whitespace-nowrap pl-12 sm:pl-16 lg:flex-row lg:flex-wrap lg:items-center lg:gap-y-4 lg:pl-0 lg:text-xl lg:font-bold [&>div]:h-0 [&>div]:basis-full [&_li]:pb-2">
        {items.map((question, index) => (
          <>
            <li key={index}>
              <Link href={question.href}>{question.title}</Link>
            </li>
            {breaks.has(index) && <div />}
          </>
        ))}
      </ul>
    </Section>
  );
}

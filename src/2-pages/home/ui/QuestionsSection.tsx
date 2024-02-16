import Link from 'next/link';

import { questionItems, questionsHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function QuestionsSection() {
  const breaks = new Set([1, 4, 6]);

  return (
    <Section height="fixed" headings={questionsHeadings}>
      <ul className="flex w-full flex-col justify-center gap-x-24 whitespace-nowrap pl-12 sm:pl-16 lg:flex-row lg:flex-wrap lg:items-center lg:gap-y-4 lg:pl-0 lg:text-xl lg:font-bold [&>div]:h-0 [&>div]:basis-full [&_li]:pb-2">
        {questionItems.map((question, index) => (
          <>
            <li key={question.href}>
              <Link href={question.href}>{question.title}</Link>
            </li>
            {breaks.has(index) && <div />}
          </>
        ))}
      </ul>
    </Section>
  );
}

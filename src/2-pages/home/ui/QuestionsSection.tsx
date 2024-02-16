import { questionsHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function QuestionsSection() {
  return (
    <Section
      variant={'light'}
      headings={questionsHeadings}
      className="[&>div]:items-center"
    >
      <ul className="flex w-full flex-col flex-wrap justify-center gap-x-24 whitespace-nowrap pl-12 sm:pl-16 lg:flex-row lg:items-center lg:gap-y-4 lg:pl-0 lg:text-xl lg:font-bold [&>div]:h-0 [&>div]:basis-full [&_li]:pb-2">
        <li>Хто є хто?</li>
        <li>До кого звернутися?</li>
        <div />
        <li>З ким працюють?</li>
        <li>З чим звертатися?</li>
        <li>Як довго триватиме?</li>
        <div />
        <li>Які методи роботи?</li>
        <li>Скільки коштує?</li>
        <div />
        <li>Де проводиться?</li>
        <li>Коли приймають?</li>
        <li>Як зв&apos;язатися?</li>
      </ul>
    </Section>
  );
}

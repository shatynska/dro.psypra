import { Section } from '~/shared/ui/Section';

export function QuestionsSection() {
  const headings = {
    main: 'Критерії пошуку',
    small: 'Багато питань?',
    big: 'Інформація',
  };

  return (
    <Section variant={'light'} headings={headings}>
      <ul className="grid max-w-192 place-items-center gap-x-12 gap-y-3 whitespace-nowrap text-base font-bold text-primary md:grid-cols-6 md:gap-y-12 md:text-xl">
        <li className="md:col-span-2 md:col-start-1">Хто є хто?</li>
        <li className="md:col-span-2 md:col-start-3">До кого звернутися?</li>
        <li className="md:col-span-2 md:col-start-5">З ким працюють?</li>
        <li className="md:col-span-2 md:col-start-2">З чим звертатися?</li>
        <li className="md:col-span-2 md:col-start-4">Як довго триватиме?</li>
        <li className="md:col-span-2 md:col-start-1">Які методи роботи?</li>
        <li className="md:col-span-2 md:col-start-3">Скільки коштує?</li>
        <li className="md:col-span-2 md:col-start-5">Де проводиться?</li>
        <li className="md:col-span-2 md:col-start-2">Коли приймають?</li>
        <li className="md:col-span-2 md:col-start-4">Як зв&apos;язатися?</li>
      </ul>
    </Section>
  );
}

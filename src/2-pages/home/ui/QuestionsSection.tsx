import { Section } from '~/shared/ui/Section';

export function QuestionsSection() {
  const headings = {
    main: 'Критерії пошуку',
    small: 'Багато питань?',
    big: 'Інформація',
  };

  return (
    <Section variant={'light'} headings={headings}>
      <ul className="grid place-items-center gap-x-16 gap-y-4 text-lg font-bold text-primary lg:grid-cols-6 lg:gap-y-12 lg:text-2xl">
        <li className="lg:col-span-2 lg:col-start-1">Хто є хто?</li>
        <li className="lg:col-span-2 lg:col-start-3">До кого звернутися?</li>
        <li className="lg:col-span-2 lg:col-start-5">З ким працюють?</li>
        <li className="lg:col-span-2 lg:col-start-2">З чим звертатися?</li>
        <li className="lg:col-span-2 lg:col-start-4">Як довго триватиме?</li>
        <li className="lg:col-span-2 lg:col-start-1">Які методи роботи?</li>
        <li className="lg:col-span-2 lg:col-start-3">Скільки коштує?</li>
        <li className="lg:col-span-2 lg:col-start-5">Де проводиться?</li>
        <li className="lg:col-span-2 lg:col-start-2">Коли приймають?</li>
        <li className="lg:col-span-2 lg:col-start-4">Як зв&apos;язатися?</li>
      </ul>
    </Section>
  );
}

import { cn } from '~/shared/lib';
import { Section } from '~/shared/ui/Section';

type Props = {
  className?: string;
};

export function QuestionsSection(props: Props) {
  const { className } = props;

  const headings = {
    main: 'Критерії пошуку',
    small: 'Багато питань?',
    big: 'Інформація',
  };

  return (
    <Section
      variant={'light'}
      className={cn('', className)}
      headings={headings}
    >
      <div className="flex flex-col items-center gap-4 font-bold text-primary *:flex *:w-full *:flex-col *:gap-4 lg:gap-16 *:lg:flex-row lg:*:gap-8 [&>ul]:text-lg lg:[&>ul]:text-3xl">
        <ul className="justify-around">
          <li>Хто є хто?</li>
          <li>До кого звернутися?</li>
          <li>З ким працюють?</li>
        </ul>
        <ul className="justify-around lg:justify-between">
          <li>З чим звертатися?</li>
          <li>Як довго?</li>
          <li>Які методи роботи?</li>
        </ul>
        <ul className="justify-around">
          <li>Скільки коштує?</li>
          <li>Де зустрітися?</li>
          <li>Коли зустріч?</li>
        </ul>
      </div>
    </Section>
  );
}

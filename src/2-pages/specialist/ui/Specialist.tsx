import { specialists, type Specialist } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function Specialist({ alias }: Props) {
  // TODO Fix types
  const { name, specialties } = specialists.get(alias) as Specialist;

  return (
    <div>
      <Section
        headings={{ primary: name, secondary: specialties.join(', ') }}
      ></Section>
    </div>
  );
}

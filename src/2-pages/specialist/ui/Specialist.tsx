import { useGetSpecialistControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function Specialist({ alias }: Props) {
  const { headings } = useGetSpecialistControllerExecuteSuspense(alias);

  return (
    <div>
      <Section headings={headings}></Section>
    </div>
  );
}

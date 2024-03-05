import { useGetSpecialistApproachControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistApproachSection({ alias }: Props) {
  const { headings } = useGetSpecialistApproachControllerExecuteSuspense({
    alias,
  });
  return <Section headings={headings}></Section>;
}

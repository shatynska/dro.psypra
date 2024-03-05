import { useGetSpecialistExperienceControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistExperienceSection({ alias }: Props) {
  const { headings } = useGetSpecialistExperienceControllerExecuteSuspense({
    alias,
  });
  return <Section headings={headings}></Section>;
}

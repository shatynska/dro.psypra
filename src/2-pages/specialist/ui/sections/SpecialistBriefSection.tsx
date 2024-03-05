import { useGetSpecialistBriefControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistBriefSection({ alias }: Props) {
  const { headings } = useGetSpecialistBriefControllerExecuteSuspense({
    alias,
  });

  return <Section headings={headings} background="dark"></Section>;
}

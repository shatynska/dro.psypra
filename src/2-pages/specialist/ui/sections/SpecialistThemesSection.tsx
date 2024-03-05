import { useGetSpecialistThemesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistThemesSection({ alias }: Props) {
  const { headings } = useGetSpecialistThemesControllerExecuteSuspense({
    alias,
  });

  return <Section headings={headings} background="dark"></Section>;
}

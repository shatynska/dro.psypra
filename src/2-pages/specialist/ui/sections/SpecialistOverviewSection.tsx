import { useGetSpecialistOverviewControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistOverviewSection({ alias }: Props) {
  const { headings, parentLink } =
    useGetSpecialistOverviewControllerExecuteSuspense({
      alias,
    });

  return (
    <Section headings={headings} parentLink={parentLink} type="main"></Section>
  );
}

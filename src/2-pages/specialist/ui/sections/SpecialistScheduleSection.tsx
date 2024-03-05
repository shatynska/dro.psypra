import { useGetSpecialistScheduleControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistScheduleSection({ alias }: Props) {
  const { headings } = useGetSpecialistScheduleControllerExecuteSuspense({
    alias,
  });
  return <Section headings={headings} background="dark"></Section>;
}

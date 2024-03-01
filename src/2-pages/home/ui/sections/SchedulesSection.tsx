import { useGetSchedulesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function SchedulesSection() {
  const { headings, items } = useGetSchedulesControllerExecuteSuspense();

  return (
    <Section id="schedules" headings={headings} background="dark"></Section>
  );
}

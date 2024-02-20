import { useGetApproachesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function ApproachesSection() {
  const { headings, href, items } = useGetApproachesControllerExecuteSuspense();

  return <Section headings={headings} href={href}></Section>;
}

import { useGetTermsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function TermsSection() {
  const { headings, href, items } = useGetTermsControllerExecuteSuspense();

  return <Section headings={headings} href={href} background="dark"></Section>;
}

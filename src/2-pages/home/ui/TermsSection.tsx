import { useGetTermsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function TermsSection() {
  const { headings, href, items } = useGetTermsControllerExecuteSuspense();

  return <Section variant="dark" headings={headings} href={href}></Section>;
}

import { useGetFormsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function FormsSection() {
  const { headings, href, items } = useGetFormsControllerExecuteSuspense();

  return <Section variant="dark" headings={headings} href={href}></Section>;
}

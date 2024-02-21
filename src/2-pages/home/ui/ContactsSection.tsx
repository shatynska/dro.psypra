import { useGetContactsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function ContactsSection() {
  const { headings, items } = useGetContactsControllerExecuteSuspense();

  return <Section id="contacts" headings={headings}></Section>;
}

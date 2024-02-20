import { useGetThemesControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function ThemesSection() {
  const { headings, href, items } = useGetThemesControllerExecuteSuspense();

  return <Section headings={headings} href={href}></Section>;
}

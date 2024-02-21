import { useGetLocationsControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

export function LocationsSection() {
  const { headings, href, items } = useGetLocationsControllerExecuteSuspense();

  return <Section id="locations" headings={headings}></Section>;
}

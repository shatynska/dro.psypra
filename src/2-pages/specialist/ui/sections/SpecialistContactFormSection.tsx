import { useGetSpecialistContactFormControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistContactFormSection({ alias }: Props) {
  const { headings } = useGetSpecialistContactFormControllerExecuteSuspense({
    alias,
  });
  return <Section headings={headings}></Section>;
}

import { useGetSpecialistPersonalityControllerExecuteSuspense } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export function SpecialistPersonalitySection({ alias }: Props) {
  const { headings } = useGetSpecialistPersonalityControllerExecuteSuspense({
    alias,
  });
  return <Section headings={headings}></Section>;
}

import { Specialist } from '~/pages/specialist';

type Props = {
  params: {
    specialist: string;
  };
};

export default function SpecialistsPage({ params }: Props) {
  return <Specialist alias={params.specialist} />;
}

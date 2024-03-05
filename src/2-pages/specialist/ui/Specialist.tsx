import { SectionGroup } from '~/shared/ui/Section';

import { Posts } from '~/widgets/posts';

import {
  SpecialistApproachSection,
  SpecialistBriefSection,
  SpecialistContactFormSection,
  SpecialistExperienceSection,
  SpecialistOverviewSection,
  SpecialistPersonalitySection,
  SpecialistScheduleSection,
  SpecialistThemesSection,
} from './sections';

export type SpecialistProps = {
  alias: string;
};

export function Specialist({ alias }: SpecialistProps) {
  return (
    <>
      <div>
        <SpecialistOverviewSection alias={alias} />
      </div>
      <SectionGroup>
        <SpecialistBriefSection alias={alias} />
        <SpecialistExperienceSection alias={alias} />
      </SectionGroup>
      <SectionGroup>
        <SpecialistThemesSection alias={alias} />
        <SpecialistApproachSection alias={alias} />
      </SectionGroup>
      <SectionGroup>
        <SpecialistScheduleSection alias={alias} />
        <SpecialistPersonalitySection alias={alias} />
      </SectionGroup>
      <SectionGroup>
        <Posts specialist={alias} />
        <SpecialistContactFormSection alias={alias} />
      </SectionGroup>
    </>
  );
}

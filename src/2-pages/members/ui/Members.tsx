import { memberItems, membersHeadings } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';

export function Members() {
  return (
    <div>
      <Section variant={'light'} headings={membersHeadings}>
        <div>
          {memberItems.map((member) => (
            <div key={member.name} className="pb-8">
              <h3 className="pb-2 text-lg font-bold lg:text-xl">
                {member.name}
              </h3>
              <p>{member.specialties}</p>
              <p>Стаж: {member.years}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

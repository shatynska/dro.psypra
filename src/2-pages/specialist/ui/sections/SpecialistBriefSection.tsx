import { apiClient } from '~/shared/api';
import { Section } from '~/shared/ui/Section';

type Props = {
  alias: string;
};

export async function SpecialistBriefSection({ alias }: Props) {
  const { data, error } = await apiClient.GET(
    '/api/pages/specialists/{specialist}/brief',
    {
      params: {
        path: { specialist: alias },
      },
    },
  );

  if (error) return;

  const { header, content } = data;

  return (
    <Section headings={header.headings} background="dark">
      <div className="flex h-full w-full max-w-224 flex-col justify-between md:h-[22rem] md:flex-wrap md:items-center md:gap-y-8 md:self-center">
        {content.dimensions.map((dimension) => (
          <div
            key={dimension.title}
            className="line-clamp-2 md:line-clamp-none md:w-72 md:text-center md:first:mt-12 md:last:mb-12"
          >
            <h3 className="inline text-base after:content-[':_'] md:block md:text-lg md:after:content-none">
              {dimension.title}
            </h3>
            <span className="opacity-90">{dimension.items.join(', ')}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

'use client';

import { categories } from '~/shared/api/mock';
import { Section } from '~/shared/ui/Section';
import { SectionHeadings } from '~/shared/ui/SectionHeader';

export function FormsSection() {
  // TODO Fix types
  const headings = categories.get('forms')?.headings as SectionHeadings;

  return <Section variant="dark" headings={headings}></Section>;
}

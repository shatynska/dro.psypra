import { Headings, ParentLink } from '.';

export type Post = {
  id: string;
  specialist: string;
  dimensions: string[];
  headings: Headings;
  content: string;
};

export type PostWithParentLink = Post & {
  parentLink: ParentLink;
};

export function useGetPostControllerExecuteSuspense(id: string) {}

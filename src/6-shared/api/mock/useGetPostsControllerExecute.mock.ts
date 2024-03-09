type Props = {
  dimension?: string;
  dimensionItem?: string;
  specialist?: string;
};

export function useGetPostsControllerExecuteSuspense({
  dimension,
  dimensionItem,
  specialist,
}: Props) {
  return {
    headings: {
      primary: 'Публікації',
      secondary: 'Детальніше',
    },
    items: [],
  };
}

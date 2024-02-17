import { cn } from '../lib';

type Props = React.HTMLAttributes<HTMLElement>;

export function Article({ className, children, ...props }: Props) {
  return (
    <article
      className={cn(
        'mb-8 max-w-192 pl-6 lg:pl-12 [&_h2]:py-4 [&_h2]:pl-8 [&_h2]:text-2xl [&_h2]:font-bold lg:[&_h2]:pl-12 [&_h3]:py-2 [&_h3]:text-lg [&_h3]:font-bold [&_p]:mb-4',
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}

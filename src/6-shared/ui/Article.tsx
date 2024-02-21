import { cn } from '../lib';

type Props = React.HTMLAttributes<HTMLElement>;

export function Article({ title, className, children, ...props }: Props) {
  return (
    <article
      className={cn(
        'mb-8 max-w-192 pl-6 lg:pl-12 [&_h3]:py-2 [&_h3]:text-lg [&_h3]:font-bold [&_p]:mb-4',
        className,
      )}
      {...props}
    >
      <h2 className="py-4 pl-8 text-2xl font-bold lg:pl-12">{title}</h2>
      {children}
    </article>
  );
}

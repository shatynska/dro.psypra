import { cn } from '../../lib';

type Props = React.HTMLAttributes<HTMLDivElement>;

export function SectionGroup({ className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        'bg-gradient-to-b from-blue-gradient-dark to-blue-gradient-light bg-[length:100%_34rem] md:bg-[url("/images/blue-fon.svg")] md:bg-[length:auto]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

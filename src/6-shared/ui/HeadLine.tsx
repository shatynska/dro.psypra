type Props = React.HTMLAttributes<HTMLParagraphElement>;

export function HeadLine({ className, ...props }: Props) {
  return (
    <p className={className} {...props}>
      професійна{'\u00A0'}допомога в{'\u00A0'}сфері психічного{'\u00A0'}здоров
      {'\u02BC'}я
    </p>
  );
}

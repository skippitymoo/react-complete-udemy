interface LinkProps {
  /**
   * Link contents
   */
  text: string;
  /**
   * Href
   */
  href?: string;
  /**
   * Target (default to _self)
   */
  target?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Link = ({ text, href = '#', target = '_self', ...props }: LinkProps) => {
  return (
    <a href={href} target={target} {...props}>
      {text}
    </a>
  );
};
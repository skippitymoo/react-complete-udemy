import { FC } from 'react';

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

export const Link: FC<LinkProps> = ({ text, href = '#', target = '_self', ...props }) => {
  return (
    <a href={href} target={target} {...props}>
      {text}
    </a>
  );
};

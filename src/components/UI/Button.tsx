interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
}

export const Button = ({ label, primary = false }: ButtonProps) => {
  const additionalClasses = primary ? 'btn--primary' : 'btn--secondary';

  return <button className={`btn ${additionalClasses}`}>{label}</button>;
};

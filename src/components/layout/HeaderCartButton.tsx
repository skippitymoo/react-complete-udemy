import { JSX } from 'react';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import sprite from '../../img/sprite.svg';

type HeaderCartButtonProps = {
  /**
   * Text to display
   */
  text: string;
  /**
   * Number of items in the cart
   */
  itemCount: number;
};

export const HeaderCartButton = ({ text, itemCount }: HeaderCartButtonProps): JSX.Element => {
  return (
    <Button variant='dark'>
      <Icon href={`${sprite}#icon-cart`} className='header-cart-button__icon' decorative={true} />
      {text}&nbsp;&nbsp;
      <Button.Notification text={String(itemCount)} />
    </Button>
  );
};

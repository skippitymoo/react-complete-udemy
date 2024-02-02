import React, { FC, useState } from 'react';
import { formatCurrency } from '../../utils/utilities';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Meal } from '../../shared/types/menu.types';

const DEFAULT_ADD_TO_BASKET_AMOUNT = 1;

export type AddToBasket = {
  /**
   * Receives the number of items added by the user
   */
  onAddToBasket: (numberOfItems: number) => void;
};

/**
 * A compound component representing a MealItem.
 */
interface MealItemComponent extends FC<React.ComponentPropsWithoutRef<'div'>> {
  Details: FC<Omit<Meal, 'id'>>;
  AddToBasket: FC<AddToBasket>;
}

const MealItemRoot: MealItemComponent = ({ children }) => {
  return <div className='meal-item'>{children}</div>;
};

const MealItemDetails: FC<Omit<Meal, 'id'>> = ({ name, description, price }) => {
  return (
    <div className='meal-item__details'>
      <h3 className='meal-item__title'>{name}</h3>
      <div className='meal-item__description'>{description}</div>
      <div className='meal-item__price'>{formatCurrency(price)}</div>
    </div>
  );
};

const MealItemAddToBasket: FC<AddToBasket> = ({ onAddToBasket }: AddToBasket) => {
  const [enteredAmount, setEnteredAmount] = useState(DEFAULT_ADD_TO_BASKET_AMOUNT);

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    onAddToBasket(enteredAmount);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): undefined => {
    setEnteredAmount(+event.target.value);
  };

  return (
    <form name='Add meal item' className='meal-item__add' onSubmit={submitHandler}>
      <Input label='Amount' value={enteredAmount} type='number' onChange={changeHandler} />
      <Button size='long'>+ Add</Button>
    </form>
  );
};

MealItemRoot.Details = MealItemDetails;
MealItemRoot.AddToBasket = MealItemAddToBasket;

export const MealItem = MealItemRoot;

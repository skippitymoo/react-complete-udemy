import React, { JSX, useState } from 'react';
import { formatCurrency } from '../../utils/utilities';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Meal } from './meal.types';

const DEFAULT_ADD_TO_BASKET_AMOUNT = 1;

export type AddToBasket = {
  /**
   * Receives the number of items added by the user
   */
  onAddToBasket: (numberOfItems: number) => void;
};

const MealItemComponent = ({ children }: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return <div className='meal-item'>{children}</div>;
};

const MealItemDetails = ({ name, description, price }: Omit<Meal, 'id'>): JSX.Element => {
  return (
    <div className='meal-item__details'>
      <h3 className='meal-item__title'>{name}</h3>
      <div className='meal-item__description'>{description}</div>
      <div className='meal-item__price'>{formatCurrency(price)}</div>
    </div>
  );
};

const MealItemAddToBasket = ({ onAddToBasket }: AddToBasket): JSX.Element => {
  const [enteredAmount, setEnteredAmount] = useState(DEFAULT_ADD_TO_BASKET_AMOUNT);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
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

MealItemComponent.Details = MealItemDetails;
MealItemComponent.AddToBasket = MealItemAddToBasket;

export const MealItem = MealItemComponent;

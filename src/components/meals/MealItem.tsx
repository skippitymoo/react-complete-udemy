import React, { JSX } from 'react';
import { formatCurrency } from '../../utils/utilities';

export type MealDetails = {
  /**
   * Title of the meal item
   */
  title: string;
  /**
   * Description for the meal item
   */
  description: string;
  /**
   * Price of the meal item
   */
  price: number;
};

const MealItemComponent = ({ children }: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return <div className='meal-item'>{children}</div>;
};

const mealItemDetails = ({ title, description, price }: MealDetails): JSX.Element => {
  return (
    <div className='meal-item__details'>
      <h3 className='meal-item__title'>{title}</h3>
      <div className='meal-item__description'>{description}</div>
      <div className='meal-item__price'>{formatCurrency(price)}</div>
    </div>
  );
};

MealItemComponent.Details = mealItemDetails;

export const MealItem = MealItemComponent;

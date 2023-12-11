export type Meal = {
  /**
   * Unique identifier for the meal item
   */
  id: string;
  /**
   * Name of the meal item
   */
  name: string;
  /**
   * Description for the meal item
   */
  description: string;
  /**
   * Price of the meal item
   */
  price: number;
};

export type CartItem = {
  /**
   * Number of items of this meal
   */
  amount: number;
  /**
   * The meal for this cart item
   */
  meal: Meal;
};

export type CartItemChange = {
  /**
   * Modify the item amount
   */
  onAmountChange: (changeBy: number) => void;
};

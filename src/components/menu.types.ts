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

export type MealsAvailable = {
  /**
   * List of meals available
   */
  availableMeals: Meal[];
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

export type CartItemActions = {
  /**
   * Modify the amount for the cart item
   */
  onAmountChange: (mealId: string, changeBy: number) => void;
};

export type Cart = {
  /**
   * Cart items currently in the cart
   */
  initialCartItems: CartItem[];
};

export type CartActions = {
  /**
   * The new total number of items in the cart
   */
  onCartChange: (totalCartItems: number) => void;
  /**
   * Order is placed
   */
  onOrder: () => void;
};

export type CartProps = Cart & CartActions;

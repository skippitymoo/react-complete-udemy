import axios from 'axios';
import { Meal } from '../types/menu.types';

const axiosClient = axios.create({
  baseURL: 'https://sec12exercise.foodorderapp.com',
});

export const fetchMeals = async (): Promise<Meal[]> => {
  let meals: Meal[] = [];

  const response = await axiosClient.get<Meal[]>('/meals');
  meals = response?.data;

  return meals;
};

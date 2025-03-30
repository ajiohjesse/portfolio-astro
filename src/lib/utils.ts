import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.floor(Math.random() * (max - min)) + min);

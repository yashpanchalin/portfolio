import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const validateString = (value :unknown): value is string => {
  if (!value || typeof value!=="string") {
      return false
  }
  return true
};

export const getErrorMessage = (error:unknown)=>{
  let message:string;
  if (error instanceof Error) {    
      message = error.message;
  }else if (error && typeof error === 'object' && 'message' in error){
      message = String(error.message);
  }else if (typeof error === 'string') {
      message = error;
  }else{
      message = "Somethings went wrong";
  }

  return message;
};
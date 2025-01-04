import { clsx, type ClassValue } from "clsx"
import { serverHooks } from "next/dist/server/app-render/entry-base"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formateDate(date:string){

  return new Date(date).toLocaleDateString('en-IN',{
    month:'long',
    day:'numeric',
    year:'numeric'
  })
}

export function parseServerActionResponse<T>(response:T){
  return JSON.parse(JSON.stringify(response));
}
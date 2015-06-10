declare module 'example' {
  export interface Person {
    getFullName():string;
  }

  export function get(): Person[];
}

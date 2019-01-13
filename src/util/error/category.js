//@flow
type CategoryType = {[category: string]: number};

const Category: CategoryType = {
  /** Errors from the network stack. */
  NETWORK: 1,
  SERVICE: 2,
  PROVIDER: 3
};

export {Category};
export type {CategoryType};

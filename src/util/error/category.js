//@flow
type CategoryType = {[category: string]: number};

const Category: CategoryType = {
  /** Errors from the network stack. */
  NETWORK: 1
};

export {Category};
export type {CategoryType};

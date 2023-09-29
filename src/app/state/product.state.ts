export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}
export interface AppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}
export enum ActionType {
  GET_ALL_PRODUCT,
  GET_SELECTED_PRODUCT,
  GET_AVAILABLE_PRODUCT,
  GET_NEW_PRODUCT,
  GET_SEARCH_PRODUCT,
  SELECT_PRODUIT,
  DELETE_PRODUIT,
  UPDATE_PRODUIT,
  PRODUCT_ADDED,
  PRODUCT_UPDATED
}
export interface ActionEventNavbar {
  type: ActionType,
  //car c est pas oblige de l'integrer a chaque fois
  payload?: any
}

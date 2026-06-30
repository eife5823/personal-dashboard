export enum Menu {
  OVERVIEW = 'Overview',
  PROFILE = 'Profile',
  WEATHER = 'Weather',
  STOCK = 'Stock',
  PLANER = 'Planer'
}
export enum ModalType {
  Login = 'Login'
}
export interface MenuItem {
  name: Menu
  icon: string
}

export type InputType = 'search' | 'login'
export interface ModalProps {
  [key: string]: any
}

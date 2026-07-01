export enum Menu {
  OVERVIEW = 'Overview',
  PROFILE = 'Profile',
  WEATHER = 'Weather',
  STOCK = 'Stock',
  PLANER = 'Planer'
}
export interface MenuItem {
  name: Menu
  icon: string
}
export enum ModalType {
  Login = 'Login'
}
export interface ModalProps {
  [key: string]: any
}

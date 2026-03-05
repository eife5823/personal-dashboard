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

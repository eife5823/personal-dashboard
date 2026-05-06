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
import type { Component } from 'vue'

export type ModalType = Component | null
export type InputType = 'search' | 'login' | 'disabled'
export interface ModalProps {
  [key: string]: any
}
export interface LoginOrSignupProps {
  userName: string
  password: string
  email?: string
}
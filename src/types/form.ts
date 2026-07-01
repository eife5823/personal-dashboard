export type InputType = 'search' | 'login'

export enum InputRules {
    REQUIRED = 'required:trim',
    LENGTH = 'length',
    ALPHANUMERIC = 'alphanumeric',
    EMAIL = 'email',
}


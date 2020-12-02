export const Modifiers = {
  primary: 'primary',
  secondary: 'secondary',
  twitter: 'twitter'
} as const
export type Modifiers = typeof Modifiers[keyof typeof Modifiers]

export type Props = {
  text: string
  modifiers: Modifiers[]
}

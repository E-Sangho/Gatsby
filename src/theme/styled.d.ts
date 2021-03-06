import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // primaryColor is Blue
    primaryColor: string

    // secondaryColor is Orange
    secondaryColor: string
    // grayColors are differ only opacity

    opacity__100: string
    opacity__75: string
    opacity__50: string
    opacity__25: string
    opacity__10: string
    opacity__5: string

    // fontSize

    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
    p: string
  }
}

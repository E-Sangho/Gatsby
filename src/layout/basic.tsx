import styled from 'styled-components'
import GlobalStyle from 'components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/themes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface IBasicLayout {
  children: React.ReactNode
}

function BasicLayout({ children }: IBasicLayout) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default BasicLayout

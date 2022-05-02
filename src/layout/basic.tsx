import styled from 'styled-components'
import GlobalStyle from 'components/GlobalStyle'
import Header from 'components/Header'
import Footer from 'components/Footer'

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
    <Container>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default BasicLayout

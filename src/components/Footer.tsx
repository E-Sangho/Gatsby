import styled from 'styled-components'
import GithubIcon from '../assets/github.svg'

const FooterFrame = styled.div`
  width: 100%;
  height: 64px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterContents = styled.div`
  color: white;
`
const FooterIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 16px;
  fill: white;
`
function Footer() {
  return (
    <FooterFrame>
      <FooterContents>&copy; {new Date().getFullYear()}</FooterContents>
      <FooterIcon>
        <GithubIcon />
      </FooterIcon>
    </FooterFrame>
  )
}

export default Footer

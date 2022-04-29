import styled from 'styled-components'
import { Link } from 'gatsby'
import GithubIcon from '../assets/github.svg'
import GlassIcon from '../assets/magnifying-glass.svg'
import { useState } from 'react'

const HeaderFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: red;
`

const HeaderStart = styled.div`
  width: 33%;
  height: 100%;
  padding-left: 40px;
  display: flex;
  align-items: center;
`

const HeaderLogo = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: white;
`
const HeaderMiddle = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderNavigation = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  aligh-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: white;
  a {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
  }
`

const HeaderEnd = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 40px;
`

const HeaderIcon = styled.div`
  width: 32px;
  height: 32px;
  fill: white;
  margin: 0 8px;
`

const HeaderSearchButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header() {
  const [searchClick, setSearchClick] = useState(false)
  const searchHandler = () => {
    setSearchClick(prev => !prev)
  }
  return (
    <HeaderFrame>
      <HeaderStart>
        <HeaderLogo>
          <Link to="/">ESangho</Link>
        </HeaderLogo>
      </HeaderStart>
      <HeaderMiddle>
        <HeaderNavigation>
          <Link to="/">Home</Link>
          <Link to="posts">Posts</Link>
          <Link to="portfolio">Portfolio</Link>
        </HeaderNavigation>
      </HeaderMiddle>
      <HeaderEnd>
        <HeaderSearchButton onClick={searchHandler}>
          <HeaderIcon>
            <GlassIcon />
          </HeaderIcon>
        </HeaderSearchButton>
        <a href="https://github.com/E-Sangho">
          <HeaderIcon>
            <GithubIcon />
          </HeaderIcon>
        </a>
      </HeaderEnd>
    </HeaderFrame>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import GlobalStyle from 'components/GlobalStyle'
import CategoryList from 'components/CategoryList'
import GridPostList from 'components/PostList'

const Container = styled.div``

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <GridPostList />
      <Footer />
    </Container>
  )
}

export default IndexPage

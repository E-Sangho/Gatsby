import React, { useMemo } from 'react'
import styled from 'styled-components'
import CategoryList from 'components/CategoryList'
import GridPostList from 'components/PostList'
import { graphql, Link } from 'gatsby'
import { IPostListItem } from 'types/PostItem.interface'
import queryString, { ParsedQuery } from 'query-string'
import { ICategoryList } from 'components/CategoryList'
import BasicLayout from '../layout/basic'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface IGetPostList {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: IPostListItem[]
    }
  }
}

function IndexPage({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}: IGetPostList) {
  const parsed = queryString.parse(search)
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category
  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: ICategoryList['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: IPostListItem,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1
            else list[category]++
          })

          list['All']++

          return list
        },
        { All: 0 },
      ),
    [],
  )
  return (
    <BasicLayout>
      <CategoryList
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <GridPostList selectedCategory={selectedCategory} posts={edges} />
    </BasicLayout>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY-MM-DD HH::mm:ss")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`

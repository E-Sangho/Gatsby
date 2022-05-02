import { graphql } from 'gatsby'
import BasicLayout from '../layout/basic'
import PostHeader from 'components/PostHeader'
import { IPostFrontmatter } from '../types/PostItem.interface'
import PostContent from 'components/PostContent'

interface IPostPageItem {
  node: {
    html: string
    frontmatter: IPostFrontmatter
  }
}

interface IPostTemplate {
  data: {
    allMarkdownRemark: {
      edges: IPostPageItem[]
    }
  }
}

function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: IPostTemplate) {
  const {
    node: {
      html,
      frontmatter: { title, date, categories },
    },
  } = edges[0]
  return (
    <BasicLayout>
      <PostHeader title={title} date={date} categories={categories} />
      <PostContent html={html} />
    </BasicLayout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

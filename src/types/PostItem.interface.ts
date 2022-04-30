import { IGatsbyImageData } from 'gatsby-plugin-image'
export interface IPostFrontmatter {
  title: string
  summary: string
  date: string
  categories: string[]
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export interface IPostListItem {
  node: {
    id: string
    frontmatter: IPostFrontmatter
  }
}

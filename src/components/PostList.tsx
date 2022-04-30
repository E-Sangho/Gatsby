import { useMemo } from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'
import { IPostListItem } from 'types/PostItem.interface'

const GridPostFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 400px));
  gap: 20px;
  background-color: yellow;
`

interface IPostList {
  selectedCategory: string
  posts: IPostListItem[]
}

function GridPostList({ selectedCategory, posts }: IPostList) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: IPostListItem) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <GridPostFrame>
      {postListData.map(({ node: { id, frontmatter } }: IPostListItem) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </GridPostFrame>
  )
}

export default GridPostList

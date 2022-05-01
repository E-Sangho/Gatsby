import styled from 'styled-components'
import PostItem from './PostItem'
import { IPostListItem } from 'types/PostItem.interface'
import useInfiniteScroll, { IuseInfiniteScroll } from 'hooks/useInfiniteScroll'
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
  const { containerRef, postList }: IuseInfiniteScroll = useInfiniteScroll(
    selectedCategory,
    posts,
  )
  return (
    <GridPostFrame ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: IPostListItem) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </GridPostFrame>
  )
}

export default GridPostList

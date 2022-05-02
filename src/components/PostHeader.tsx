import styled from 'styled-components'
import PostHeaderBack from './PostHeaderBack'
interface IPostHeader {
  title: string
  date: string
  categories: string[]
}

const PostHeaderFrame = styled.div``

const PostHeaderTitle = styled.div``

const PostHeaderDate = styled.div``

const PostHeaderCategories = styled.div``

function PostHeader({ title, date, categories }: IPostHeader) {
  return (
    <PostHeaderFrame>
      <PostHeaderBack />
      <PostHeaderTitle>{title}</PostHeaderTitle>
      <PostHeaderDate>{date}</PostHeaderDate>
      <PostHeaderCategories>{categories.join(' / ')}</PostHeaderCategories>
    </PostHeaderFrame>
  )
}

export default PostHeader

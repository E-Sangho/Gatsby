import styled from 'styled-components'
import { Link } from 'gatsby'

const PostItemFrame = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: orange;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transition 0.3s box-shadow;
  padding: 4px 10px;
  &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: contain;
`

const PostItemContent = styled.div`
  width: 100%;
  background-color: green;
`

const PostTitle = styled.div`
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 700;
  color: white;
  font-size: 18px;
  text-overflow: ellipsis;
  text-align: center;
`

const PostDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  color: white;
`

const PostCaregoriesFrame = styled.div`
  display: flex;
  justify-content: end;
`

const PostCategory = styled.div`
  margin: 2px 5px;
  padding: 3px 5px;
  color: white;
  background-color: black;
  border-radius: 3px;
  font-size: 14px;
`

const PostSummary = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  color: white;
  background-color: blue;
`

interface IPostItem {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

function PostItem({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}: IPostItem) {
  return (
    <PostItemFrame to={link}>
      <ThumbnailImage src={thumbnail} alt="PostItem Image" />
      <PostItemContent>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
        <PostCaregoriesFrame>
          {categories.map(category => (
            <PostCategory key={category}>{category}</PostCategory>
          ))}
        </PostCaregoriesFrame>
        <PostSummary>{summary}</PostSummary>
      </PostItemContent>
    </PostItemFrame>
  )
}

export default PostItem

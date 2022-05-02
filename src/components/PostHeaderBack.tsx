import styled from 'styled-components'
import Arrowleft from '../assets/arrowleft.svg'

const PostHeaderBackFrame = styled.div``
const PostHeaderBackIcon = styled.div`
  width: 32px;
  height: 32px;
`

function PostHeaderBack() {
  const prevPage = () => window.history.back()
  return (
    <PostHeaderBackFrame>
      <PostHeaderBackIcon onClick={prevPage}>
        <Arrowleft />
      </PostHeaderBackIcon>
    </PostHeaderBackFrame>
  )
}

export default PostHeaderBack

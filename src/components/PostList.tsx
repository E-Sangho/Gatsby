import styled from 'styled-components'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://archives.bulbagarden.net/media/upload/thumb/3/36/132Ditto.png/250px-132Ditto.png',
  link: '<https://www.google.co.kr/>',
}

const GridPostFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 400px));
  gap: 20px;
  background-color: yellow;
`

function GridPostList() {
  return (
    <GridPostFrame>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </GridPostFrame>
  )
}

export default GridPostList

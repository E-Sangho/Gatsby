import styled from 'styled-components'
import { Link } from 'gatsby'

interface ICategoryList {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

interface ICategoryLink {
  $active: boolean
}

const CategoryListFrame = styled.div``

const CategoryLink = styled(Link)<ICategoryLink>`
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};
  background-color: black;
  color: white;
  margin: 0 4px;
  padding: 2px 2px;
  box-sizing: border-box;
  border-radius: 5px;
`

function CategoryList({ selectedCategory, categoryList }: ICategoryList) {
  return (
    <CategoryListFrame>
      {selectedCategory}
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryLink
          $active={name === selectedCategory}
          to={`/?category=${name}`}
          key={name}
        >
          #{name}({count})
        </CategoryLink>
      ))}
    </CategoryListFrame>
  )
}

export default CategoryList

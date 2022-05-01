import { useRef, useState, useMemo, useEffect } from 'react'
import { IPostListItem } from '../types/PostItem.interface'

const NUMBER_OF_ITEMS_PER_PAGE = 10

export interface IuseInfiniteScroll {
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  postList: IPostListItem[]
}

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: IPostListItem[],
) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [count, setCount] = useState(1)
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
  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return
    setCount(prev => prev + 1)
    observer.disconnect()
  })

  useEffect(() => {
    setCount(1)
  }, [selectedCategory])
  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListData.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListData.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll

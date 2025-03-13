import { FC, ReactNode } from 'react'
import { ListGroup } from './ListGroup'
import { useLocationSearch } from '@/hooks/useLocationSearch'

type ListProps = {
  children: ReactNode
  title: string
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetching: boolean
}

type SubComponent = {
  Group: typeof ListGroup
  Item: typeof ListGroup.Item
}

export const List: FC<ListProps> & SubComponent = ({
  children,
  title,
  fetchNextPage = () => {},
  hasNextPage = false,
  isFetching = false,
}) => {
  const { search } = useLocationSearch()

  return (
    <div className='container flex flex-col gap-4'>
      {!search && <h3 className='text-display-xs md:text-display-md mt-4 font-bold'>{title}</h3>}
      {children}
      {hasNextPage && (
        <div className='flex justify-center'>
          <button
            className='text-base-sm md:text-base-md h-11 w-fit min-w-[180px] rounded-full border border-neutral-300 py-2 font-medium text-neutral-900 backdrop-blur-2xl transition-all duration-200 ease-in-out active:scale-95 disabled:opacity-50'
            onClick={fetchNextPage}
            disabled={!hasNextPage || isFetching}
          >
            {isFetching ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  )
}

List.Group = ListGroup
List.Item = ListGroup.Item

import { FC } from 'react'

type LabelProps = {
  item: string
}

export const Label: FC<LabelProps> = ({ item }) => {
  return (
    <div className='flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-2 py-[2px]'>
      <p className='text-base-sm font-medium text-neutral-900'>{item}</p>
    </div>
  )
}

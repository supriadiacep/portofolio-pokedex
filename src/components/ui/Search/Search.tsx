import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router'

type SearchProps = {
  placeholder?: string
}

export const Search: FC<SearchProps> = ({ placeholder = 'Search Pokemon' }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const searching = () => {
    if (inputRef.current) {
      const value = inputRef.current.value
      navigate(`/?search=${value}`)
    }
  }

  const handleFormSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searching()
  }

  const handleClearSearch = () => {
    setSearch('')
    navigate('/', { state: { search: '' } })
  }

  useEffect(() => {
    if (window.location.href.includes('search')) {
      setSearch(window.location.search.split('=')[1])
    }
  }, [])

  return (
    <div className='relative w-full md:max-w-[518px]'>
      <form
        className='group z-50 flex h-14 w-full cursor-text items-center justify-center gap-4 rounded-full bg-neutral-100 px-4 md:max-w-[518px]'
        onClick={() => inputRef.current?.focus()}
        onSubmit={handleFormSearch}
      >
        <input
          type='text'
          ref={inputRef}
          placeholder={placeholder}
          className='text-base-md w-full group-hover:cursor-text focus:cursor-default focus:ring-0 focus:outline-0'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <motion.button
            type='button'
            className='absolute right-[60px] z-20 flex size-5 cursor-pointer items-center justify-center rounded-full bg-neutral-400 p-1 md:right-20'
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={handleClearSearch}
          >
            <span className='material-icons !text-[12px] text-white'>close</span>
          </motion.button>
        )}
      </form>
      <motion.button
        className='bg-secondary-300 absolute top-2.5 right-4 z-20 flex cursor-pointer items-center justify-center rounded-full p-2 md:right-6'
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={searching}
      >
        <MagnifyingGlassIcon className='h-5 w-5 text-white' />
      </motion.button>
    </div>
  )
}

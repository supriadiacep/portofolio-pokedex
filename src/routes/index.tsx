import { Routes, Route, Navigate } from 'react-router'
import { FC } from 'react'
import { Home } from '@/views/Home'
import { Pokemon } from '@/views/Pokemon'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='pokemon/:id' element={<Pokemon />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes

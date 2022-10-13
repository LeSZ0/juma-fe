import React from 'react'

function Header({ title, category }: any) {
  return (
    <div className='mb-10'>
      {category && <p className='text-gray-400'>{ category }</p>}
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
        { title }
      </p>
    </div>
  )
}

export default Header
import React from 'react'
import { sweetProducts } from '../../../assets/data/data'

export const SweetProducts = () => {
  return (
    <section className='sweet-products my-28 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
      {
        sweetProducts.map((product) => (
          <div key={product.caption} className='sweet-product h-60 relative overflow-hidden'>
              <img src={product.image} alt={product.caption} className='w-full h-full object-cover transition-all ease-in-out hover:-rotate-12 scale-125' />
          </div>
        ))
      }
    </section>
  )
}

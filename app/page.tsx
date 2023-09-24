/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center content-center items-center bg-cream">
      <div className='flex h-[28rem] w-[37rem] rounded-lg'>
        <img className='w-1/2' src='/images/image-product-desktop.jpg' alt='bottle of Gabrielle Essence Eau De Parfum perfume' />
        <section className='flex flex-col justify-between w-1/2 p-8 text-sm bg-white'>
          <div className='text-dark-grayish-blue'>
            P E R F U M E
          </div>
          <div className='text-very-dark-blue text-2xl font-montserrat font-bold'>
            Gabrielle Essence Eau De Parfum
          </div>
          <div className='text-dark-grayish-blue text-md'>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </div>
          <div className='flex font-montserrat'>
            <div className='text-dark-cyan text-xl'>
              $149.99
            </div>
            <div className='flex text-dark-grayish-blue line-through text-sm'>
              $169.99
            </div>
          </div>
          <button className='text-white bg-dark-cyan rounded-md'>
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  )
}

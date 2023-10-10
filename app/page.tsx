/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { Montserrat, Fraunces } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500', '700'],
  subsets: ['latin'] ,
  variable: '--font-montserrat',
})
const fraunces = Fraunces({ 
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export default function Home() {
  return (
    <main className={`${fraunces.variable} font-fraunces flex flex-col min-h-screen justify-center content-center items-center bg-cream`}>
      <div className='flex flex-col h-full md:flex-wrap m-4 rounded-lg overflow-hidden md:h-[28rem] md:w-[37rem]'>
        <div className='flex relative object-cover w-full h-96 md:w-1/2 md:h-full'>
          <img src={'images/image-product-desktop.jpg'}
            alt='bottle of Gabrielle Essence Eau De Parfum perfume'
            width={600}
            height={900}
          />
        </div>
        <section className='flex flex-col justify-between space-y-4 md:space-y-2 md:w-1/2 md:h-full p-8 text-sm bg-white'>
          <div className={`${montserrat.variable} font-montserrat text-dark-grayish-blue`}>
            P E R F U M E
          </div>
          <div className={`text-very-dark-blue text-4xl font-extrabold`}>
            Gabrielle Essence Eau De Parfum
          </div>
          <div className={`${montserrat.variable} font-montserrat text-dark-grayish-blue text-md`}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </div>
          <div className='flex'>
            <div className={`text-dark-cyan text-3xl mr-8 font-semibold`}>
              $149.99
            </div>
            <div className={`${montserrat.variable} font-montserrat flex flex-col justify-center text-dark-grayish-blue line-through text-sm`}>
              $169.99
            </div>
          </div>
          <button className={`${montserrat.variable} flex items-center font-montserrat h-11 justify-center text-white bg-dark-cyan rounded-lg hover:bg-very-dark-emerald`}>
            <div className='h-4 w-4 relative mr-2'>
              <img 
                src={'images/icon-cart.svg'}
                alt='shopping cart'
              />
            </div>
            <div>Add to Cart</div>
          </button>
        </section>
      </div>
    </main>
  )
}

/* eslint-disable @next/next/no-img-element */
import { Montserrat, Fraunces } from 'next/font/google'
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

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
      <div className='flex flex-wrap h-full w-full p-4 md:h-[28rem] md:w-[37rem]'>
        <div className='relative md:w-1/2 md:h-full'>
          <Image
            src={'/images/image-product-desktop.jpg'}
            alt='bottle of Gabrielle Essence Eau De Parfum perfume'
            fill
          />
        </div>
        {/* <img className='rounded-t-lg h-auto max-w-full md:w-1/2 md:rounded-l-lg' src='./images/image-product-desktop.jpg' alt='bottle of Gabrielle Essence Eau De Parfum perfume' /> */}
        <section className='flex flex-col justify-between space-y-2 md:w-1/2 p-8 text-sm bg-white md:rounded-r-lg'>
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
          <div className='flex justify-around'>
            <div className={`text-dark-cyan text-4xl`}>
              $149.99
            </div>
            <div className={`${montserrat.variable} font-montserrat flex flex-col justify-center text-dark-grayish-blue line-through text-sm`}>
              $169.99
            </div>
          </div>
          <button className={`${montserrat.variable} font-montserrat flex h-11 justify-center text-white bg-dark-cyan rounded-lg hover:bg-very-dark-emerald`}>
            <ShoppingCartIcon className='flex h-5 w-5 mt-3 mr-3'/>
            <div className='flex mt-3'>Add to Cart</div>
          </button>
        </section>
      </div>
    </main>
  )
}

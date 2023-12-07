import { Inter } from 'next/font/google'
import { CardList } from '@/components/CardComponent/CardList'
// import CardModal from './cardModal'
import Example from '@/components/CardComponent/CardModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-300'>
      {/* <Example></Example> */}
      <CardList></CardList>
    </main>
  )
}

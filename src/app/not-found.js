import { Button } from '@heroui/react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
 
export default function NotFound() {
  return (
    <div className='h-screen  flex justify-center items-center'>
 
 <div className='text-center space-y-5'>
<h2 className='font-extrabold text-8xl bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] text-transparent bg-clip-text'>404</h2>
<h4 className='text-(--on-surface) text-4xl font-semibold'>
  Oops! It looks like you've taken a <span className='text-(--primaryViolet)'>wrong turn.</span>
</h4>
<p className='text-lg text-[#494454] max-w-xl mx-auto'>Don't worry, even the best learners get lost sometimes. Let's get you
back on track and continue your journey toward mastery.</p>
<div>

  <Link href={'/'}><Button className='bg-linear-[90deg,#6B38D4_0%,#BA0035_100%]'><FaHome/> Back to Home </Button></Link>
</div>
 </div>

    </div>
  )
}
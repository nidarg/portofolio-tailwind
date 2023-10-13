import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-slate-700 py-24'>
      <div className='align-element grid sm:grid-cols-2 gap-x-16 items-center justify-items-between'>
        <article className='text-emerald-500'>
          <h1 className='text-5xl font-bold tracking-wider '>
            I&lsquo;m Gradin
          </h1>
          <p className='mt-4 text-3xl capitalize tracking-wide'>
            Full-Stack Developer
          </p>
          <p className='mt-2 text-lg capitalize tracking-wide'>
            Bring your ideas to digital life
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-slate-100 hover:text-emerald-500' />
            </a>
            <a href='#'>
              <FaLinkedin className='h-8 w-8 text-slate-100 hover:text-emerald-500' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-100 hover:text-emerald-500' />
            </a>
          </div>
        </article>
        <article className='hidden sm:block'>
          <img src={heroImg} alt='image' />
        </article>
      </div>
    </div>
  )
}

export default Hero

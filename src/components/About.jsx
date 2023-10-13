import about from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='py-20' id='about'>
      <div className='align-element grid sm:grid-cols-2 items-center gap-16'>
        <img src={about} alt='about-image' className='w-full h-64' />
        <article>
          <SectionTitle text='some words about me...' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I work as a site administrator at the Technical University of
            Cluj-Napoca, I followed a postgraduate course in applied informatics
            and programming, more than a bunch of courses on Udemy, and
            countless hours of trials, frustrations and satisfactions in
            creating all kinds of web applications
          </p>
        </article>
      </div>
    </section>
  )
}

export default About

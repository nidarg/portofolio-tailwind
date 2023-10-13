import { links } from '../data'

const Navbar = () => {
  return (
    <div className='bg-slate-700'>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center justify-between sm:py-8 text-slate-100'>
        <h2 className='text-3xl font-bold'>
          Web<span className='text-emerald-500'>Dev</span>
        </h2>
        <div className='flex gap-x-3 flex-col sm:flex-row'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-emerald-500 '
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar

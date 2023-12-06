import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectsCard = ({ url, image, github, title, text }) => {
  return (
    <article className='bg-white p-4 rounded-lg shadow-md block hover:shadow-xl duration-300'>
      <img
        src={image}
        alt={title}
        className='w-full object-cover  h-48 border-b shadow-xl '
      />
      <div className='p-4'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url} target='_blank'>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300' />
          </a>
          <a href={github} target='_blank'>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-emerald-500 duration-300' />
          </a>
        </div>
      </div>
    </article>
  )
}
export default ProjectsCard

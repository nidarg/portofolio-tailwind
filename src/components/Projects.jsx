import ProjectCard from './ProjectCard'
// import { projects } from '../data'
import SectionTitle from './SectionTitle'
import { useFetchItems } from '../fetchItems'

const Projects = () => {
  const {loading, projects} = useFetchItems()
  // console.log(projects);
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web projects' />
      <div className='py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects

import { skills } from '../data'
// import { useFetchItems } from '../fetchItems'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'


const Skills = () => {
  // const {skills} = useFetchItems()
  // console.log('skills', skills);
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle text='Tech Stack' />
      <div className='py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.title} {...skill} />
        })}
      </div>
    </section>
  )
}
export default Skills

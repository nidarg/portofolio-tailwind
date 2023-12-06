
import {useState, useEffect} from 'react'
import {createClient} from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const client = createClient({
    space:`${import.meta.env.VITE_SPACE_ID}`,
    environment:'master',
    accessToken:`${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`
})

export const useFetchItems = ()=>{
    const [loading, setLoading] = useState(true)
    const [projects,setProjects] = useState([])
    const [skills,setSkills] = useState([])
    
    

    const getData = async()=>{
        try {
            const response1 = await client.getEntries({content_type:'projects'})
            const projectsItems = response1.items.map((item)=>{
                const {title,text,github,url,img} = item.fields
                const id = item.sys.title
                const image = img?.fields?.file?.url
                // console.log(img);
            return{id,title,text,github,url,image}
       
            })

            // const response2 = await client.getEntries({content_type:'skills'})
            // const skillsItems = response2.items.map((item)=>{
            //     const {title,icon,text} = item.fields
            //     const id = item.sys.title
            //     // const iconHtml = documentToHtmlString(icon)
            // return{id,title,icon,text}
       
            // })

            
            
            setProjects(projectsItems)
            // setSkills(skillsItems)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return {loading, projects,skills}
}
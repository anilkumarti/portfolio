import React from 'react'
import styles from './ProjectStyle.module.css'

import alphaStore from '../../assets/alpha-store.jpg'
import homzy from '../../assets/homzy.jpg'
import taskBuddy from '../../assets/task-buddy.webp'
import chatapp from '../../assets/chatapp.png'
import ProjectCard from '../../Common/ProjectCard'
const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
   <div className={styles.projectsContainer}> 
    <ProjectCard src={taskBuddy} link={'https://task-management-ecru-three.vercel.app/'} h3={"Task Buddy"} p="Manage your tasks."/> 
   <ProjectCard src={chatapp} link={'https://chatter-box-eight.vercel.app/'} h3="DeskChat" p="Desktop messaging chat app." />

        <ProjectCard src={homzy} link={'https://reale-state-nine.vercel.app/'} h3="Homzy" p="Real Estate website" />

        <ProjectCard src={alphaStore} link={'https://ecommerce-site-shop.vercel.app/'} h3="Alpha-store" p="E-commerce website" />
         
        </div> </section>
  )
}

export default Projects

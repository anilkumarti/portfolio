import React from 'react'
import styles from './ProjectStyle.module.css'
import viber from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import alphaStore from '../../assets/alpha-store.jpg'
import homzy from '../../assets/homzy.jpg'
import ProjectCard from '../../Common/ProjectCard'
const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
   <div className={styles.projectsContainer}> 
        <ProjectCard src={homzy} link={'https://reale-state-nine.vercel.app/'} h3="Homzy" p="Real Estate website" />

        <ProjectCard src={alphaStore} link={'https://ecommerce-site-shop.vercel.app/'} h3="Alpha-store" p="E-commerce website" />
        {/* <ProjectCard src={freshBurger} link={'https://ecommerce-site-shop.vercel.app/'} h3="Alpha-store" p="E-commerce website" />
        <ProjectCard src={freshBurger} link={'https://ecommerce-site-shop.vercel.app/'} h3="Alpha-store" p="E-commerce website" /> */}
        </div> </section>
  )
}

export default Projects

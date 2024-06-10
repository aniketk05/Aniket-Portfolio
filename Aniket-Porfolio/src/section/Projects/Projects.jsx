import React from 'react'
import styles from '../Projects/ProjectStyles.module.css'
import ProjectsCard from '../../comman/ProjectsCard'
import viberr from '../../assets/viberr.png'
import freshburgur from '../../assets/fresh-burger.png'
import hipper from '../../assets/hipsster.png'
import liftfit from '../../assets/fitlift.png'


export default function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectsCard 
          src={viberr }
          link='github.com'
          h3='Viberr'
          p='Lorem, ipsum.'
          />
          <ProjectsCard 
          src={freshburgur}
          link='github.com'
          h3='Fresh Burger'
          p='Hamburger Resturant'
          />
            <ProjectsCard 
          src={hipper }
          link='github.com'
          h3='Hipsster'
          p='Glasses Shop'
          />
           <ProjectsCard 
          src={liftfit }
          link='github.com'
          h3='FitLift'
          p='Fitness App'
          />
          
        </div>
      
    </section>
  )
}

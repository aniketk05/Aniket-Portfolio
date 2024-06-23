import React from 'react'
import styles from '../Projects/ProjectStyles.module.css'
import ProjectsCard from '../../comman/ProjectsCard'
import viberr from '../../assets/Tic-Tac-Toe.png'
import freshburgur from '../../assets/Physiotherapy.png'
import hipper from '../../assets/Dice.png'
import liftfit from '../../assets/E-Commerce.png'


export default function Projects() {
  return (
    <section id="projects" className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectsCard 
          src={viberr }
          link='https://github.com/aniketk05/Tic-Tac-Toe_Games'
          h3='Tic-Tac-Toe'
          p='Tic-Tac-Toe Game'
          />
          <ProjectsCard 
          src={freshburgur}
          link='github.com'
          h3='Physiotherapy'
          p='Physiotherapy Clinic'
          />
            <ProjectsCard 
          src={hipper }
          link='https://github.com/aniketk05/Roll-Dice-Game'
          h3='Roll-Dice'
          p='Roll The Dice Game'
          />
           <ProjectsCard 
          src={liftfit }
          link='https://github.com/aniketk05/Amazon-clone-project'
          h3='E-Commerce'
          p='Shopping Website'
          />
          
        </div>
      
    </section>
  )
}

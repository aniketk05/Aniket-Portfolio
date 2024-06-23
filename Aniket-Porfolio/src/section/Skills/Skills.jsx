import React from 'react'
import styles from '../Skills/SkillStyle.module.css'
import SkillList from '../../comman/SkillList'
import CheckMarkIcon from '../../assets/checkmark-dark.svg'

export default function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
       <SkillList src={CheckMarkIcon}  skill='HTML'/>
       <SkillList src={CheckMarkIcon}  skill='CSS'/>
       <SkillList src={CheckMarkIcon}  skill='JS'/>
       <SkillList src={CheckMarkIcon}  skill='TypeScript'/>
       <SkillList src={CheckMarkIcon}  skill='Bootstrap'/>
      </div>
      <hr />
      <div className={styles.skillList}>
       <SkillList src={CheckMarkIcon}  skill='JAVA'/>
       <SkillList src={CheckMarkIcon}  skill='J2EE'/>
       <SkillList src={CheckMarkIcon}  skill='Spring'/>
       <SkillList src={CheckMarkIcon}  skill='React'/>
       <SkillList src={CheckMarkIcon}  skill='Node js'/>
      </div>
      <hr />
      <div className={styles.skillList}>
       <SkillList src={CheckMarkIcon}  skill='SQL'/>
       <SkillList src={CheckMarkIcon}  skill='MySql'/>
       <SkillList src={CheckMarkIcon}  skill='Firebase'/>
      </div>
    </section>
  )
}

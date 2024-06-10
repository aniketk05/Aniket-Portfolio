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
       <SkillList src={CheckMarkIcon}  skill='JavaScript'/>
       <SkillList src={CheckMarkIcon}  skill='TypeScript'/>
       <SkillList src={CheckMarkIcon}  skill='Node'/>
      </div>
      <hr />
      <div className={styles.skillList}>
       <SkillList src={CheckMarkIcon}  skill='HTML'/>
       <SkillList src={CheckMarkIcon}  skill='CSS'/>
       <SkillList src={CheckMarkIcon}  skill='JavaScript'/>
       <SkillList src={CheckMarkIcon}  skill='TypeScript'/>
       <SkillList src={CheckMarkIcon}  skill='Node'/>
      </div>
      <hr />
      <div className={styles.skillList}>
       <SkillList src={CheckMarkIcon}  skill='HTML'/>
       <SkillList src={CheckMarkIcon}  skill='CSS'/>
       <SkillList src={CheckMarkIcon}  skill='JavaScript'/>
       <SkillList src={CheckMarkIcon}  skill='TypeScript'/>
       <SkillList src={CheckMarkIcon}  skill='Node'/>
      </div>
    </section>
  )
}

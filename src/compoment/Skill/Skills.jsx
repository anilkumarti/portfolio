import React from "react";
import styles from "./SkillStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../Common/SkillList";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
      <SkillList skill="JavaScript" src={checkMarkIcon} />
        <SkillList skill="React.js" src={checkMarkIcon} />
        <SkillList skill="HTML5" src={checkMarkIcon} />
        <SkillList skill="CSS3" src={checkMarkIcon} />
        <SkillList skill="TypeScript" src={checkMarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList skill="Tailwind CSS" src={checkMarkIcon} />
  <SkillList skill="Responsive Design" src={checkMarkIcon} />
  <SkillList skill="Sass/SCSS" src={checkMarkIcon} />
  <SkillList skill="Bootstrap" src={checkMarkIcon} />
        
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList skill="Redux" src={checkMarkIcon} />
        <SkillList skill="RESTful APIs" src={checkMarkIcon} />
        <SkillList skill="Git" src={checkMarkIcon} />
        <SkillList skill="Chrome DevTools" src={checkMarkIcon} />
      </div>
      <hr />
    </section>
  );
};

export default Skills;

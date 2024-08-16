import React from "react";
import styles from "./SkillStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../Common/SkillList";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="React js" src={checkMarkIcon} />
        <SkillList skill="HTML" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="React js" src={checkMarkIcon} />
        <SkillList skill="HTML" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="React js" src={checkMarkIcon} />
        <SkillList skill="HTML" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
        <SkillList skill="Javascript" src={checkMarkIcon} />
      </div>
      <hr />
    </section>
  );
};

export default Skills;

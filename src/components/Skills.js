import { useState } from 'react';
import { constSkills } from '../data/skills.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import '../styles/skills.css';


const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

const Skills = () => {
    const [skills] = useState(constSkills)
    // const H = "FaDocker"

    return ( 
        <div className="skill-card-grid">
            {skills.map((skill) => (
                <div className="skill-card" key={skill.id}>
                    <div className="skill-card-title">
                        <h1><FontAwesomeIcon icon={ skill.icon } /> { skill.title }</h1>
                    </div>

                    {/* <br/> */}
                    <div className="skill-card-description">{ skill.description }</div>
                    <div className="skill-card-title-separator"></div>
                    <br/>
                    <div className="skill-card-children">
                        {skill.children.map((skillChildren) => (
                            <div className="skill-card-children-text" key={skillChildren.id}>
                                <b>- {skillChildren.title}</b>
                                {/* <p>{skillChildren.description}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Skills;
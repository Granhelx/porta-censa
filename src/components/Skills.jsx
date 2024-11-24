import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiIllustrator,
  DiPhotoshop,
  
  
} from 'react-icons/di'
import { RiTailwindCssFill } from "react-icons/ri";
import Reveal from './Reveal'


const skills = [
  {
    category: 'Experto',
    technologies: [
      {name: 'Illustrator', icon: <DiIllustrator className='text-yellow-700 mx-2'/>},
      {name: 'Photoshop', icon: <DiPhotoshop className='text-blue-600 mx-2'/>},
    ]
  },
  {
    category: 'Aprendiendo',
    technologies: [
      {name: 'Python', icon:<DiPython className='text-yellow-400 mx-2'/>},
      {name: 'Html', icon: <DiHtml5 className='text-orange-600 mx-2'/>},
      {name: 'Css', icon: <DiCss3 className='text-blue-500 mx-2'/>},
      {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-400 mx-2'/>},
    ]
  }
]


const Skills = () => {
  return (
    <div className='max-w-[650px] mx-auto flex felx-col justify-center px-4 text-gray-200 pb-8 md:py-12' id="skills">
      <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Habilidades</h2>
        <p className='text-center mb-8'>
          Manejo de herramientas de diseño y programacion 
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-green-500 p-6 rounded-lg bg-purple-900/20 shadow-lg
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </Reveal>

    </div>
  )
}

export default Skills

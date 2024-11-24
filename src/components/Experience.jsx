import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
  {
    company: 'Binco store',
    period: '2020 - 2021',
    description: 'Encargado de todas los artes graficos de la marca',
  },
  {
    company: 'azucar y chocolate',
    period: '2018 - Presente',
    description: 'Encargado de todas los artes graficos de la marca',
  },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
      <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencias</h1>
      <motion.div
      className='space-y-8'
      initial="hidden"
      animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal>
            <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className='border border-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
            >
              <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
              <p className='text-gray-300'>{experience.period}</p>
              <p className='text-gray-400 my-4'>{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>

    </div>
  )
}

export default Experience
import React from 'react'
import {AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"


const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
      <Reveal>
      <div className='grid md:grid-cols-2 place-items-center'>
        <div>
          <div className='text-green-500 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>Acerca de mi</h3>
            <p className='text-gray-200 font-bold text-center'>
            Soy una persona apasionada por el diseño gráfico, con experiencia en diversos 
            programas como Adobe Photoshop, Illustrator y otros herramientas clave en la industria. 
            Actualmente, estoy ampliando mis habilidades al aprender programación, con el objetivo de 
            combinar la creatividad del diseño con la funcionalidad de la tecnología. Me motiva seguir 
            creciendo profesionalmente y explorar nuevas formas de innovar en proyectos visuales y digitales.
            </p>
          </div>
       
        </div>

        <form
          action="https://getform.io/f/ayvvqkkb"
          method='POST'
          className='max-w-6xl p-5 md:p-12'
          id='form'
        >
          <p className='text-black-100 font-bold text-xl mb-2'>
          
          </p>
          <input
            type="text"
            id="name"
            placeholder='NOMBRE'
            name='name'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <input
            type="email"
            id="email"
            placeholder='CORREO ELECTRONICO'
            name='email'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="MENSAJE"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <button
              type="submit"
              className="w-full py-3 rounded-md text-green-500 font-semibold text-xl bg-primary-color"
          >ENVIAR
          </button>
        </form>
      </div>
      </Reveal>

    </div>
  )
}

export default Contact

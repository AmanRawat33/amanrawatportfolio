import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta' >
        <p className='cta-text' >Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
        </p>
        <NavLink to="/contact" className="btn" >Contact me</NavLink>
    </section>
  )
}

export default CTA
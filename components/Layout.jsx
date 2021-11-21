import React from 'react'
import { Header } from '.'
import Particles from "react-tsparticles";
import tsParticlesConfig from '../data/tsParticles.json'

const Layout = ( {children} ) => {
    return (
        <>
            <Particles
            //   container={ref}
              className="particles-canvas"
              options={tsParticlesConfig}
            />
            <Header />  
            {children}
        </>
    )
}

export default Layout

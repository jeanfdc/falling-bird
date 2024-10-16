import React from 'react'
import { motion } from 'framer-motion'

interface LogoProps{
  model: number;
  className?: string;
}

export default function Logo({model, className}: LogoProps){
  return(
    <motion.div
    initial={{opacity: 0, scale: 0.9}}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 0.5}}
    >
      {model == 1 && 
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/Logo%20Model%201.png?alt=media&token=688bace7-414a-482a-8a95-6eed8023e744" 
          alt=""
          className={className}
        />
      }

      {model == 2 && 
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/Logo%20Model%202.png?alt=media&token=d022d3e5-6514-47db-8da1-4072d0a76c19" 
          alt=""
          className={className}
        />
      }

      {model == 3 && 
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/falling-bird-41c23.appspot.com/o/Logo%20Model%203.png?alt=media&token=d022d3e5-6514-47db-8da1-4072d0a76c19" 
          alt=""
          className={className}
        />
      }
    </motion.div>
  )
}
import React from 'react';
import {easeInOut, motion} from 'framer-motion'

       class Video extends React.Component {
       render(){
          return(
             <div className="myVideo w-screen h-screen object-fill flex flex-col items-center justify-center">
                 <video width={1920} height={1080*0.9} muted={true} className='object-fill z-[-1] absolute' controls={false} loop="true" autostart="true" autoPlay="true" src={require('../assets/indore.mp4')} />
                  <motion.div  className='w-[20vw] h-[50vh] bg-black opacity-65 text-white gap-3 flex flex-col  overflow-hidden ml-[70vw] rounded-lg'>
                    <motion.div animate={{y:[200,-1000]}} transition={{repeat:Infinity,duration:70,repeatType:"reverse"}}>
                      <div>1.Indore to host its first International Food Festival from August 10.</div>
                      <div>2.New smart traffic management system launched in Indore.</div>
                      <div>3.Indore University establishes a research center for sustainable agriculture.</div>
                      <div>4.Heavy monsoon rains cause flooding in multiple areas of Indore.</div>
                      <div>5.Indore announces the development of three new parks.</div>
                      <div>6.Local Indore startup wins National Innovation Award for renewable energy tech.</div>
                      <div>7.Indore Literature Festival scheduled for September 5-7.</div>
                      <div>8.New healthcare initiative launched for Indore’s senior citizens.</div>
                      <div>9.Indore’s public transport system set for a major upgrade.</div>
                      <div>10.Indore ranks high in national clean city rankings once again.</div>
                    </motion.div>
                    
                  </motion.div>
            </div>
             )
           }
         }

         export default Video;
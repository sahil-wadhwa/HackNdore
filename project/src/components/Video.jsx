import React from 'react';

       class Video extends React.Component {
       render(){
          return(
             <div className="myVideo w-screen h-screen object-fill flex ">
                 <video width={1920} height={1080} muted={true} className='object-fill z-[-1] absolute' controls={false} loop="true" autostart="true" autoPlay="true" src={require('../assets/indore.mp4')} />
                  <div className='w-[20vw] h-[50vh] bg-black opacity-85 text-white self-center justify-self-end ml-[70vw] rounded-lg'>HI </div>
            </div>
             )
           }
         }

         export default Video;
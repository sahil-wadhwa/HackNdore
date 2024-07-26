import React from 'react';

       class Video extends React.Component {
       render(){
          return(
             <div className="myVideo w-screen h-screen object-fill ">
                 <video width={1920} height={1080} muted={true} className='object-fill z-[-1]' controls={false} loop="true" autostart="true" autoPlay="true" src={require('../assets/indore.mp4')} />
            </div>
             )
           }
         }

         export default Video;
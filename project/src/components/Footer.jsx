import Triangle from "./Triangle";
import {easeIn, motion, transform} from 'framer-motion';

function Footer(){
    return (
        <div className="w-screen h-[5vh] bg-white flex flex-row self-end">
            <div className="bg-orange-600 w-[7vw] h-full items-center justify-center text-[2vh] text-white">
                What's New
            </div>
            <motion.div animate={{x:[0,2000]}} transition={{repeat:Infinity,duration:25}} className="overflow-hidden mt-[1vh]"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, culpa magnam. Eligendi perferendis, asperiores iste aliquam et omnis ipsam soluta qui molestiae deleniti illum iusto fuga, tempora odio explicabo. Voluptatem?</motion.div>

        </div>
    )
}
export default Footer;
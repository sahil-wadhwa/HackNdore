import Triangle from "./Triangle";
import {easeIn, motion, transform} from 'framer-motion';

function Footer(){
    return (
        <div className="w-screen h-[5vh] bg-gray-600 flex flex-row self-end text-white">
            <div className="bg-orange-600 w-[7vw] h-full items-center justify-center text-[2vh] text-white">
                What's New
            </div>
            <motion.div animate={{x:[0,2000]}} transition={{repeat:Infinity,duration:25}} className="overflow-hidden mt-[1vh] flex flex-row gap-5"><div>आशा के साथ “स्वच्छ वायु, स्वच्छ इंदौर” का संकल्प पूरा होने का विश्वास|</div>        <div>मुख्यमंत्री लाडली बहना योजना हेतु समग्र ई केवायसी शिविर आज से|</div>      <div> The newly developed website is under beta testing.</div><div>स्वच्छ सर्वेक्षण-2023 में पूरे देश में फिर से स्वच्छता में नंबर - 1 आकर इंदौर ने छूआ स्‍वच्‍छता का सातवां आसमान |</div></motion.div>

        </div>
    )
}
export default Footer;
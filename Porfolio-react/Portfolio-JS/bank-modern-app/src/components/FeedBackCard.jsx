import { quotes } from "../assets";
import { motion } from "framer-motion";

const FeedBackCard = ({ content, name, title, img }) => (
  <motion.div
    whileHover={{
      scale: 1.2,
      transition: { duration: 0.3 },
      rotation: 180,
    }}
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <img
      src={quotes}
      alt="double-qoutes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 ">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
          {name}
        </h1>
        <h2 className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
          {title}
        </h2>
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;

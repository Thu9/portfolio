import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "../../components/Input";
import "../../slide.css";

export default function Main() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <div>
        <motion.div
          className="w-[200px] h-[200px] border-[3px] border-dotted rounded-[20px] border-[#eb5050]"
          animate={{ x, y, rotate }}
          transition={{ type: "tween" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </div>
  );
}

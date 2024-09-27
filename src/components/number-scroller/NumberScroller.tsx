import { useEffect, useRef, useState } from "react";

export default function NumberScroller({
  num,
  fontSize,
}: {
  num: number;
  fontSize: number;
}) {
  const [digits, setDigits] = useState<string[]>([]);
  const prevDigitsRef = useRef<string[]>([]);

  useEffect(() => {
    const valueStr = num.toString().padStart(3, "0").split("");

    if (prevDigitsRef.current.length === 0) {
      prevDigitsRef.current = valueStr;
    }
    setDigits(valueStr);
  }, [num]);

  return (
    <div className="flex text-[144px] font-semibold">
      {digits.map((digit, index) => {
        return (
          <div
            key={index}
            className="relative w-[80px] h-[144px] text-white overflow-hidden"
          >
            <div
              className="absolute w-[100%] flex flex-col"
              style={{
                transform: `translateY(${-parseInt(digit) * fontSize}px)`,
                transition: `transform ${
                  parseInt(digit) > 0 ? 0.2 : 0.05
                }s ease`,
                height: `${fontSize * 10}px`,
              }}
            >
              {[...Array(10).keys()].map((num) => (
                <div
                  key={num}
                  className="flex justify-center items-center w-[100%]"
                  style={{ height: `${fontSize}px` }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

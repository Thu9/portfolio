import { ReactNode, useEffect, useRef } from 'react';

export default function TextAnimation({ children }: { children: ReactNode }) {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const content = String(children);

  useEffect(() => {
    const displayLetters = (letters: (HTMLSpanElement | null)[]) => {
      for (let i = 0; i < letters.length; i++) {
        addClassName(letters, i);
      }
    };

    const addClassName = (letters: (HTMLSpanElement | null)[], i: number) => {
      setTimeout(
        () => {
          if (letters[i]) {
            letters[i]!.classList.add('on');
          }
        },
        50 + i * 80,
      );
    };

    displayLetters(lettersRef.current);
  }, [content]);

  return (
    <div>
      {content.split('').map((char, index) => (
        <span
          key={index}
          className="letter"
          ref={(el) => {
            lettersRef.current[index] = el;
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

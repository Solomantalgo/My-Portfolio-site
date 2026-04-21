import { useState, useEffect } from 'react';

export const useTyping = (strings, typeSpeed = 100, backSpeed = 50, delay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === strings.length) return;

    if (subIndex === strings[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(strings[index].substring(0, subIndex));
    }, reverse ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, strings, typeSpeed, backSpeed, delay]);

  return text;
};

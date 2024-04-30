import { Fragment, useState } from "react";
import './task2.css';

export const CensoredText = ({ badWords, children }) => {
  const textArray = children.split(' ');
  const initialContent = textArray.map(c => {
    const pattern = /[.,!?]/g;
    const w = c.replace(pattern, '');
    const isBadWord = badWords.map(b => b.toLowerCase()).includes(w.toLowerCase());

    if (isBadWord) {
      let word = '';

      for (let i = 0; i < c.length; i++) {
        if (c[i].toLowerCase() === c[i].toUpperCase()) {
          word += c[i];
        } else {
          word += '*';
        }
      }

      return word;
    }

    return c;
  })
  const [content, setContent] = useState(initialContent);

  const showOriginalWord = (index) => {
    const newContent = [...content];
    newContent[index] = textArray[index];
    setContent(() => newContent);
  }

  return (
    <div>
      {content.map((word, index) => (
        <Fragment key={index}>
          <span className="word" onClick={() => showOriginalWord(index)}>
            {word}
          </span>
          {' '}
        </Fragment>
      ))}
    </div>
  );
}

"use client";
import { useState, useEffect, FC } from "react";

interface TextEffectProps {
  title: string;
  className?: string;
  id: string;
}

// 文字エフェクト用
const TextEffect: FC<TextEffectProps> = ({ title, className, id }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [titleText, setTitleText] = useState<string>(title);

  useEffect(() => {
    const h1 = document.querySelector(`#${id}`);
    let interval: NodeJS.Timeout | null = null;

    function onMouseOver(event: MouseEvent) {
      let iteration = 0;
      clearInterval(interval as NodeJS.Timeout);

      const datasetValue = (event.target as HTMLElement).dataset.value;
      if (datasetValue) {
        const dataValueLength = datasetValue.length;

        interval = setInterval(() => {
          (event.target as HTMLElement).innerText = (
            event.target as HTMLElement
          ).innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return datasetValue[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= dataValueLength) {
            clearInterval(interval as NodeJS.Timeout);
          }

          iteration += 1 / 3;
          // 時間指定
        }, 15);
      }
    }

    if (h1) {
      h1.addEventListener("mouseover", onMouseOver as any);

      return () => {
        h1.removeEventListener("mouseover", onMouseOver as any);
      };
    }
  }, [id]);

  return (
    <h1 id={id} className={className} data-value={titleText}>
      {title}
    </h1>
  );
};

export default TextEffect;

import { useEffect, useRef, useState } from "react";
import { useGetRect } from "./hooks/use-getRect";
import { useKeyPress } from "./hooks/use-keyPressed";

type ContentsType = {
  id: string;
  heading: string;
}[];

export const Carousels = () => {
  const ref = useRef(null);
  const { getElementRect } = useGetRect(ref);
  const keyPressed = useKeyPress("up");
  const bottomRect = ref.current?.getBoundingClientRect().bottom;

  console.log(keyPressed);

  useEffect(() => {
    console.log(getElementRect("bottom"));
  }, [bottomRect]);

  const contents: ContentsType = [
    {
      id: "1",
      heading: "content A"
    },
    {
      id: "2",
      heading: "content B"
    },
    {
      id: "3",
      heading: "content C"
    },
    {
      id: "4",
      heading: "content D"
    }
  ];

  const sortOrder = (arr: ContentsType) => {
    const tempA = arr.slice(1, arr.length); //1番目以外の要素を切り出す
    const tempB = [...tempA, arr[0]]; //1番目の要素を最後に

    return tempB;
  };

  return (
    <>
      <div className="carouselArea">
        <ul>
          {contents.map((content, idx) => (
            <li key={idx} ref={ref}>
              {content.heading}
            </li>
          ))}
        </ul>
      </div>
      <button />
    </>
  );
};

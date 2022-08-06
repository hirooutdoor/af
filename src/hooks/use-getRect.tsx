import { RefObject, useCallback } from "react";

// 引数のtargetProperty をDOMRectのもつPropertyに限定する
type DOMRectProperty = keyof Omit<DOMRect, "toJSON">;

// RefObjectの型は div, span, p, input などのさまざまなHTML要素に対応できるようにextendsで制限をかけつつ抽象化
export const useGetRect = <T extends HTMLElement>(rectRef: RefObject<T>) => {
  const getElementRect = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const rect = rectRef.current?.getBoundingClientRect();
      if (rect) {
        return rect[targetProperty];
      }
      // rect が undefined のときはデフォルトで0を返すようにする
      return 0;
    },
    [rectRef]
  );

  return {
    getElementRect
  };
};

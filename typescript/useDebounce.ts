// Javascript version
// import { useEffect, useRef } from "react";

// export const useDebounce = (callback, delay) => {
//   const timeoutIdRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       if (timeoutIdRef.current) {
//         clearTimeout(timeoutIdRef.current);
//       }
//     };
//   }, []);

//   const debouncedCallback = (...args) => {
//     if (timeoutIdRef.current) {
//       clearTimeout(timeoutIdRef.current);
//     }

//     timeoutIdRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
//   return debouncedCallback;
// };

import { useCallback, useEffect, useRef } from "react";

export const useDebounce = <Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay: number,
) => {
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Args) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay],
  );
};

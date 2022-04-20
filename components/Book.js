import { useRef, useState, useCallback, useEffect } from "react";
import { Tooltip } from "@mantine/core";

import HTMLFlipBook from "react-pageflip";

import useSound from "use-sound";

import { animated } from "react-spring";

const Book = () => {
  const book = useRef(null);
  const container = useRef(null);

  const [soundOn, setSoundOn] = useState(true);
  const [play] = useSound("/sfx/page-flip-sfx.mp3");

  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(6);
  // const totalPageDive = Math.ceil(totalPage / 5);

  const onFlipSound = useCallback(
    (e) => {
      soundOn && play();
    },
    [play, soundOn]
  );

  const toggleSound = () => {
    setSoundOn(!soundOn);
    
  };

  const flipBack = useCallback(() => {
    const pageFlipObj = book.current.pageFlip();

    if (pageFlipObj?.getCurrentPageIndex() === 0) {
      // pageFlipObj.flip(pageFlipObj?.getPageCount() - 1);
      return;
    } else {
      pageFlipObj.flipPrev();
    }
  }, [book]);

  const flipForward = useCallback(() => {
    const pageFlipObj = book.current.pageFlip();

    if (
      pageFlipObj?.getCurrentPageIndex() + 2 ===
      pageFlipObj?.getPageCount()
    ) {
      // pageFlipObj.flip(0);
      return;
    } else {
      pageFlipObj.flipNext();
    }
  }, [book]);

  const FlipButton = ({ onClick, classNames, name }) => {
    return (
      <Tooltip label={name} position="top" withArrow arrowSize={3}>
        <button
          onClick={onClick}
          className={`fill-slate-700 rounded-full border border-slate-200 bg-slate-100 p-1.5 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2 ${classNames}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13,16 L13,22 L22,13 L13,4 L13,10 L8.728,10 C6.341,10 4.052,9.052 2.364,7.364 L2,7 C2,11.971 6.029,16 11,16 L13,16 Z"
            />
          </svg>
        </button>
      </Tooltip>
    );
  };

  const SoundButton = () => {
    return (
      <Tooltip
        label={soundOn ? "Turn off sound" : "I want sound"}
        position="top"
        withArrow
        arrowSize={3}
      >
        <button
          onClick={toggleSound}
          className="fill-slate-700 rounded-full border border-slate-200 bg-slate-100 p-1.5 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
        >
          {soundOn ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
            >
              <defs>
                <clipPath id="A">
                  <path d="M0 0h64v64H0z" />
                </clipPath>
              </defs>
              <g clipPath="url(#A)">
                <path d="M6.667 44.207h9.767a3.39 3.39 0 0 1 2.084.863l11.197 11.198c1.43 1.429 2.59.948 2.59-1.073V8.801c0-2.021-1.16-2.502-2.59-1.072L18.518 18.926c-.476.477-1.41.863-2.084.863H6.667c-2.022 0-3.663 1.642-3.663 3.663v17.092c0 2.022 1.641 3.663 3.663 3.663z" />
                <path
                  fillRule="evenodd"
                  d="M56.112 32h0 0c0-5.518-1.746-10.902-4.993-15.371a26.91 26.91 0 0 0-12.758-9.547l-1.157-.41a1.22 1.22 0 0 1-.742-1.558l.818-2.302a1.22 1.22 0 0 1 1.559-.741l1.146.408c6.055 2.149 11.317 6.08 15.09 11.281A31.06 31.06 0 0 1 60.996 32c0 6.544-2.076 12.929-5.921 18.228-3.773 5.201-9.035 9.144-15.09 11.293l-1.146.408a1.22 1.22 0 0 1-1.559-.741l-.818-2.302a1.22 1.22 0 0 1 .742-1.558l1.157-.41a26.91 26.91 0 0 0 12.758-9.547c3.247-4.469 4.993-9.853 4.993-15.371zm4.884 0h0zm0 0"
                />
                <path d="M38.08 19.486l-1.095-.55a1.22 1.22 0 0 1-.542-1.64l1.101-2.189a1.22 1.22 0 0 1 1.638-.54l1.083.548a20.87 20.87 0 0 1 7.899 6.923c1.978 2.942 3.053 6.409 3.065 9.962-.012 3.553-1.087 7.008-3.065 9.95-2.002 2.942-4.712 5.323-7.899 6.923l-1.083.547a1.22 1.22 0 0 1-1.639-.539l-1.099-2.178a1.22 1.22 0 0 1 .541-1.639l1.095-.55c2.43-1.221 4.505-3.052 6.043-5.299 1.429-2.136 2.21-4.639 2.222-7.215-.012-2.576-.793-5.091-2.222-7.215a15.99 15.99 0 0 0-6.043-5.299z" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 74 64"
            >
              <path d="M4.884 49.735h13.023a4.52 4.52 0 0 1 2.779 1.151l14.929 14.931c1.907 1.905 3.453 1.264 3.453-1.431V2.527c0-2.695-1.547-3.336-3.453-1.429L20.685 16.027c-.635.636-1.88 1.151-2.779 1.151H4.884A4.89 4.89 0 0 0 0 22.061v22.789c0 2.696 2.188 4.884 4.884 4.884h0z" />
            </svg>
          )}
        </button>
      </Tooltip>
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between w-full mt-4 mb-6 max-w-[1080px]">
        <span className="max-w-md mx-auto md:ml-0 px-1.5 py-1.5 bg-slate-100 rounded-lg border border-slate-200">
          <p className="text-indigo-600 font-medium text-sm text-center">
            <em>
              <strong>Swipe the book&nbsp;</strong>
            </em>
            or use these control to view the pages
          </p>
        </span>
        <div className="flex items-center gap-6">
          <FlipButton
            onClick={flipBack}
            classNames="rotate-180"
            name="Previous page"
          />
          <FlipButton
            onClick={flipForward}
            classNames="scale-y-[-1]"
            name="Next page"
          />
          <SoundButton />
        </div>
      </div>

      <HTMLFlipBook
        width={480}
        height={680}
        size="stretch"
        minWidth={240}
        maxWidth={540}
        minHeight={380}
        maxHeight={900}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        ref={book}
        onFlip={onFlipSound}
        flippingTime={500}
      >
        <div>
          <img
            src="/svg/1.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/2.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/3.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/4.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/5.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/5.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
        <div>
          <img
            src="/svg/6.svg"
            className="w-full h-full border-2 border-slate-200 rounded-lg"
          />
        </div>
      </HTMLFlipBook>
    </>
  );
};

export default Book;

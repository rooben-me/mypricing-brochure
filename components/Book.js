import React from "react";

import HTMLFlipBook from "react-pageflip";

const Book = () => {
  return (
    <HTMLFlipBook showCover={true} width={400} height={800}>
      <div>
        <img
          src="/img/1.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/img/2.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/img/3.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/img/4.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/img/5.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
      <div>
        <img
          src="/img/6.png"
          className="w-full h-full border-2 border-slate-200 rounded-lg"
        />
      </div>
    </HTMLFlipBook>
  );
};

export default Book;

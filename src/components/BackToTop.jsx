import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop, showScroll]);

  return (
    <button
      className={`fixed bg-amber-500 bottom-10 right-10 z-50 rounded-full bg-secondary p-3 cursor-pointer text-white shadow-lg ${
        showScroll ? "block" : "hidden"
      }`}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;

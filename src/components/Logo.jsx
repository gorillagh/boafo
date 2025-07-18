import React from "react";

export default function Logo() {
  return (
    <div className="mb-5 flex justify-center items-center gap-3">
      <img src="/logo-green.png" className="h-8 w-8" alt="" />
      <p className="font-montserrat font-bold text-xl text-textColor-light dark:text-textColor-dark flex items-center justify-center">
        Boafo
      </p>
    </div>
  );
}

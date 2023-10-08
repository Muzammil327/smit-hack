'use client'
import React from "react";

type Button = {
  title: string | any;
  class?: string;
};

interface Iprops {
  data: Button;
  onClick?: () => void;
}

export default function Button({ data, onClick }: Iprops) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={`${data.class} button`}
      aria-label={data.title}
      onClick={handleClick}
    >
      {data.title}
    </button>
  );
}

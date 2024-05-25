"use client";
import React from "react";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <div className=" inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};

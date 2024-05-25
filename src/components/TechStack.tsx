"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  icon: string;
}

const TechStack: React.FC<{ techStack: TechItem[] }> = ({ techStack }) => {
  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerRow = window.innerWidth < 768 ? 2 : 4;
      setItemsPerRow(newItemsPerRow);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1 className="text-4xl sm:text-4xl font-title font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center py-10">
        Tech Stack
      </h1>
      <div className=" flex flex-wrap justify-center gap-6 px-9">
        {techStack.map((item: TechItem, index: number) => (
          <div key={index} className={`w-1/4 md:w-1/${itemsPerRow}`}>
            {" "}
            {/* Adjust width based on itemsPerRow */}
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="mx-auto"
            />
            <p className=" text-white text-center text-sm font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;

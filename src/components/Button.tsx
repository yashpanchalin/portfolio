"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import Link from "next/link";

export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <div className=" pb-40 px-4 w-full">
      <div className=" top-10 flex justify-center">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Gradient",
    description: "Simple Gradient button with rounded corners",
    component: (
      <Link href="/contact">
        <button
          style={{ position: "static" }}
          className="px-8 py-2 rounded-full bg-gradient-to-b from-gray-300 to-gray-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 items-center justify-center"
        >
          Contact
        </button>
      </Link>
    ),
  },
];

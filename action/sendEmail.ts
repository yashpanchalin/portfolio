"use server";
import React from "react";
import { error } from "console";
import { Resend } from "resend";
import { string } from "zod";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "../email/contactFormEmail";
import { send } from "process";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail)) {
    return {
      error: "Invalid Sender E-mail",
    };
  }
  if (!validateString(message)) {
    return {
      error: "Invalid Message",
    };
  }
  let data;

  try {
    await resend.emails.send({
      from: `${senderName}<onboarding@resend.dev>`,
      to: "randomyashh@gmail.com",
      subject: "Message from Portfolio Site",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail,{
        message : message,
        senderEmail: senderEmail,
      })
    });
    return { success: true };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return{
    data,
  }
};

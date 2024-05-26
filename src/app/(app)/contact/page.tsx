"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendEmail } from "../../../../action/sendEmail";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "Say Hello!",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Form {...form}>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email Sent Successfully!");
          }}
          className="p-8 flex flex-col gap-4 rounded-lg"
        >
          <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-4">
            Contact
          </h1>
          <p className=" w-full text-xl w-8/12 sm:text-base text-xs font-title font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-loose">
            Hit me up directly at{" "}
            <a
              href="mailto:yashpanchal@duck.com"
              className=" underline z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-500"
            >
              yashpanchal@duck.com
            </a>{" "}
            or through this form !!
          </p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                      field.onChange(e); // Ensure the form state is updated
                    }}
                    value={name}
                    className="w-full bg-white rounded p-2"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                      field.onChange(e); // Ensure the form state is updated
                    }}
                    value={email}
                    className="w-full bg-white rounded p-2"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Write your message here..."
                    {...field}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      setMessage(e.target.value);
                      field.onChange(e); // Ensure the form state is updated
                    }}
                    value={message}
                    className="w-full h-32 bg-white rounded p-2"
                    required
                    maxLength={500}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isFormSubmitting}
            className=" bg-gradient-to-b from-neutral-200 to-neutral-500 rounded py-2"
          >
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default ContactForm;

import React from "react";
import {
  Html,
  Button,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Body,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProp = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProp) {
  return (
    <>
      <Html>
        <Head />
        <Preview>New Message From your Protfolio Site</Preview>
        <Tailwind>
          <Body>
            <Container>
              <Section>
                <Heading>
                  You&apos;ve recieved the following message from your site
                  contact form !{" "}
                </Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>The Sender&apos;s email is: {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
}

"use client";

import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface VercelInviteUserEmailProps {
    commentFromUser: string;
    username: string;
    userLanguage: string;
    comment: string;
    taskId: string;
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  
  export const NewTaskCommentEmail = ({
    commentFromUser,
    username,
    userLanguage,
    comment,
    taskId,
  }: VercelInviteUserEmailProps) => {
    const previewText =
      userLanguage === "en"
        ? `New task comment from ${process.env.NEXT_PUBLIC_APP_NAME} app`
        : `Neuer Kommentar zur Aufgabe aus der App  ${process.env.NEXT_PUBLIC_APP_NAME}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                {userLanguage === "en"
                  ? "There is a new comment on a task you are watching"
                  : "Es gibt einen neuen Kommentar zu der Aufgabe, der Sie folgen"}
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                {userLanguage === "en"
                  ? `Hello ${username},`
                  : `Guten Tag ${username},`}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>{commentFromUser}</strong>
                {userLanguage === "en"
                  ? ` has left a comment in Project - (Board) you are watching. `
                  : ` hat einen Kommentar im Projekt hinterlassen - (Boardu), dem du folgst. `}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                {userLanguage === "en" ? `Comment: ` : `Kommentar: `}
                <strong>{comment}</strong>
              </Text>              
              <Text className="text-black text-[14px] leading-[24px]">
                {userLanguage === "en"
                  ? `
                Details you can find here: `
                  : `
                Details finden Sie hier: `}
  
                <strong>{`${process.env.NEXT_PUBLIC_APP_URL}/projects/tasks/viewtask/${taskId}`}</strong>
              </Text>
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-black text-[#ffffff] rounded text-[12px] font-semibold no-underline text-center"
                  href={`${process.env.NEXT_PUBLIC_APP_URL}/projects/tasks/viewtask/${taskId}`}
                >
                  {userLanguage === "en" ? "View task detail" : "Aufgabe ansehen"}
                </Button>
              </Section>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                {userLanguage === "en"
                  ? `This message was intended for - `
                  : `Diese Nachricht war für gedacht - `}
                <span className="text-black">{username}</span>.
                <span className="text-black"></span>.
                {userLanguage === "en"
                  ? "If you were not expecting this message, you can ignore this email. If you are concerned about your account&apos;s safety, please reply to this email to get in touch with us."
                  : "Wenn Sie diese Nachricht nicht erwartet haben, können Sie diese E-Mail ignorieren. Wenn Sie Bedenken hinsichtlich der Sicherheit Ihres Kontos haben, antworten Sie bitte auf diese E-Mail, um mit uns in Kontakt zu treten."}
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default NewTaskCommentEmail;
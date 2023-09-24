import React from "react";
import styled from "styled-components";
import MailIconSVG from "../images/svg/mail-icon.inline.svg";
import GitHubIconSVG from "../images/svg/github-icon.inline.svg";
import TelegramIconSVG from "../images/svg/telegram-icon.inline.svg";
import { IconLink } from "./Link";

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    margin-right: 1em;
  }
`;

function ContactIcons() {
  const author = {
    email: "mailto:bannem@caltech.edu",
  };

  const authorSocial = {
    github: "https://github.com/0xWOLAND",
    telegram: "OxWOLAND",
  };

  return (
    <ContactContainer>
      <IconLink href={author.email} rel="author">
        <MailIconSVG role="img" aria-label="Mail" />
      </IconLink>
      <IconLink
        href={authorSocial.github}
        rel="author noopener"
        target="_blank"
      >
        <GitHubIconSVG role="img" aria-label="GitHub" />
      </IconLink>
      <IconLink
        href={authorSocial.telegram}
        rel="author noopener"
        target="_blank"
      >
        <TelegramIconSVG role="img" aria-label="Telegram" />
      </IconLink>
    </ContactContainer>
  );
}

export default ContactIcons;

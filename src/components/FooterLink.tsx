import styled from "styled-components";
import { DOCS_LINK } from "../lib/links";

const StyledFooterLink = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  text-decoration: underline;
  cursor: pointer;

  font-size: 1.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterLink = () => {
  return (
    <StyledFooterLink href={DOCS_LINK} target="_blank">
      Join our Telegram →
    </StyledFooterLink>
  );
};

export default FooterLink;

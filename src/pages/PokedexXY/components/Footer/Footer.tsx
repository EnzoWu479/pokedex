import { BsLinkedin, BsGithub } from "react-icons/bs";
import {
  Footer,
  FooterHyperLink,
  FooterIcon,
  FooterLine,
  FooterLinksContainer,
} from "./_footer";

export default () => {
  return (
    <Footer>
      <FooterLine>
        Favicon: This file is licensed under the
        <FooterHyperLink
          href="https://en.wikipedia.org/wiki/en:Creative_Commons"
          target="_blank"
          rel="external noreferrer"
        >
          Creative Commons
        </FooterHyperLink>
        <FooterHyperLink
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
          target="_blank"
          rel="external noreferrer"
        >
          Attribution-Share Alike 4.0 International
        </FooterHyperLink>
        license.
      </FooterLine>
      <FooterLine>
        Projeto feito utilizando
        <FooterHyperLink
          href="https://pokeapi.co"
          target="_blank"
          rel="noreferrer"
        >
          PokeApi
        </FooterHyperLink>
      </FooterLine>
      <FooterLine>
        Projeto feito por
        <FooterHyperLink
          href="https://www.linkedin.com/in/enzo-wu-41b2ba22a/"
          target="_blank"
          rel="external noreferrer"
        >
          Enzo Wu
        </FooterHyperLink>
      </FooterLine>
      <FooterLinksContainer>
        <FooterIcon
          href="https://www.linkedin.com/in/enzo-wu-41b2ba22a/"
          target="_blank"
          rel="external noreferrer"
        >
          <BsLinkedin />
        </FooterIcon>

        <FooterIcon
          href="https://github.com/EnzoWu479"
          target="_blank"
          rel="external noreferrer"
        >
          <BsGithub />
        </FooterIcon>
      </FooterLinksContainer>
    </Footer>
  );
};

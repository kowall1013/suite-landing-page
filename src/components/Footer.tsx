import styled from "styled-components"
import SocialItem from "./SocialItem";
import { COLORS, QUERIES } from "../constant";

const FooterWrapper = styled.footer`
  display: grid;
  padding: 56px 0 80px 0;
  place-items: center;
  position: relative;
  background: ${COLORS.ash};
  margin: 0 -16px;

  &::before {
    --offset: 16px;
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: var(--offset);
    top: 0;
    left: 0;
    right: 0;
    background: ${COLORS.ash};
    transform: translateY(var(--offset));
    z-index: -99;
  }
`;

const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  p {
    font-size: 1.5rem;
    line-height: 32px;
    letter-spacing: 0.08px;
    color: ${COLORS.secendary};
  }
`;

const SocialListWrapper = styled.ul`
  display: flex;
  gap: 28px;

`;

const socialsList = [
  {
    id: 0,
    href: 'www.facebook.com',
    src: './assets/icon-facebook.svg',
    alt: 'facebook'
  },
  {
    id: 1,
    href: 'www.instagram.com',
    src: './assets/icon-instagram.svg',
    alt: 'instagram'
  },
  {
    id: 2,
    href: 'www.twitter.com',
    src: './assets/icon-twitter.svg',
    alt: 'twitter'
  }
];

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          <a href="www.google.com">
            <img src="./assets/logo.svg" alt="" />
          </a>
        </div>
        <p>Copyright - Suite</p>
        <SocialListWrapper>
          {socialsList.map(socialItem => (
            <SocialItem
              key={socialItem.id}
              href={socialItem.href}
              src={socialItem.src}
              alt={socialItem.alt}
            />
          ))}
        </SocialListWrapper>
      </ContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
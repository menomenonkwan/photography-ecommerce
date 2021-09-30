import styled from "styled-components";

export const StyledNav = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--black, black);
    z-index: 100;
    transform: translateX(100vw);
    opacity: 0;
    transition: all 0.2s ease;
    padding-top: 6rem;
    padding-left: 5rem;
    text-align: left;
  }

  .menu {
    cursor: pointer;
  }

  .open-nav {
    opacity: 1;
    transform: translateX(0);
  }

  .exit {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem;
  }

  .exit img {
    width: 8vw;
  }

  .link-with-icon a {
    display: flex;
    align-items: center;
  }

  .nav li {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    letter-spacing: 0.175em;
    transform: translateX(100vw);
    transition: all 0.4s ease;
  }

  .nav.open-nav li  {
    transform: translateX(0);
  }

  .nav li a {
    transition: color 0.3s ease;
  }

  .nav li a:hover {
    color: var(--pink);

  }

@media (min-width: 600px) {
  .menu,
  .exit {
    display: none;
  }

  .nav {
    position: unset;
    opacity: unset;
    transform: translateX(0);
    height: unset;
    background: unset;
    padding-top: 2rem;
    padding-left: unset;
  }

  .nav li {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    transform: translateX(0);
    transition: all .15s ease;
  }

  .nav li:hover {
    letter-spacing: .35em;
  }
}
`;

export const StyledHeader = styled.header`
  background: var(--black);
  color: var(--blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 1rem 0 1.5rem;

  .logo-text {
    color: var(--blue);
    position: relative;
    z-index: 1;
  }

  .logo {
    width: 8vh;
    position: absolute;
    z-index: 0;
    left: 0.25rem;
  }

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 30%;
    position: fixed;
    height: 100vh;
    padding: 1rem;
    text-align: left;

    .logo {
      width: 100px;
      top: 0.75rem;
      left: 0.5rem;
    }

    .logo-text {
      width: 160px;
      line-height: 1.35;
    }
  }

  @media (min-width: 900px) {
    padding: 1rem 1.5rem;
    width: 20%;
  }
`;

export const StyledFooter = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 1rem;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  
  @media (min-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 30%;
    z-index: 1;
  }

  @media (min-width: 900px) {
    width: 20%;
  }
`;
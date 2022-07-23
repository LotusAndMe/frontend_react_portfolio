/** @format */

import styled from "styled-components";

const FooterWrap = styled.div`
  .app__footer {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    .app__footer {
      flex-direction: column;
    }
  }
  .app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 2rem 2rem;
  }
  .app__footer-cards .app__footer-card {
    min-width: 290px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fef4f5;
    transition: all 0.3s ease-in-out;
  }
  .app__footer-cards .app__footer-card img {
    width: 40px;
    height: 40px;
    margin: 0 0.7rem;
  }
  .app__footer-cards .app__footer-card p {
    font-weight: 500;
  }
  .app__footer-cards .app__footer-card a {
    text-decoration: none;
    font-weight: 500;
  }
  .app__footer-cards .app__footer-card:hover {
    box-shadow: 0 0 25px #faaeb6;
  }
  @media screen and (max-width: 450px) {
    .app__footer-cards .app__footer-card {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .app__footer-cards {
      width: 100%;
    }
  }
  .app__footer-cards .app__footer-card:last-child {
    background-color: #f2f7fb;
  }
  .app__footer-cards .app__footer-card:last-child:hover {
    box-shadow: 0 0 25px #98d1ff;
  }
  .app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;
  }
  .app__footer-form div {
    width: 100%;
    margin: 0.75rem 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
  .app__footer-form div input,
  .app__footer-form div textarea {
    width: 100%;
    padding: 0.95rem;
    border: none;
    border-radius: 7px;
    background-color: var(--primary-color);
    font-family: var(--font-base);
    color: var(--secondary-color);
    outline: none;
  }
  .app__footer-form div textarea {
    height: 170px;
  }
  .app__footer-form div:hover {
    box-shadow: 0 0 20px var(--secondary-color);
  }
  .app__footer-form button {
    padding: 1rem 2rem;
    border-radius: 10px;
    border: none;
    background-color: var(--secondary-color);
    font-weight: 500;
    color: var(--white-color);
    outline: none;
    margin: 2rem 0 0 0;
    font-family: var(--font-base);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .app__footer-form button:hover {
    background-color: #2430af;
    box-shadow: 0 0 25px var(--secondary-color);
  }
  @media screen and (max-width: 768px) {
    .app__footer-form {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;

export default FooterWrap;

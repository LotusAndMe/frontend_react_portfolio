/** @format */

import styled from "styled-components";

const SkillsWrap = styled.div`
  .app__skills {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  .app__skills-container {
    width: 80%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 900px) {
    .app__skills-container {
      width: 100%;
      flex-direction: column;
    }
  }
  .app__skills-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5rem;
  }
  @media screen and (max-width: 900px) {
    .app__skills-list {
      margin-right: 0;
      justify-content: center;
      align-items: center;
    }
  }
  .app__skills-item {
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    transition: all 0.3s ease-in-out;
  }
  .app__skills-item div {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #fef4f5;
  }
  .app__skills-item div img {
    width: 50%;
    height: 50%;
  }
  .app__skills-item div:hover {
    box-shadow: 0 0 25px #fef4f5;
  }
  @media screen and (min-width: 2000px) {
    .app__skills-item div {
      width: 150px;
      height: 150px;
    }
  }
  @media screen and (max-width: 450px) {
    .app__skills-item div {
      width: 70px;
      height: 70px;
    }
  }
  .app__skills-item p {
    font-weight: 500;
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 2000px) {
    .app__skills-item {
      margin: 1rem 2rem;
    }
    .app__skills-item p {
      margin-top: 1rem;
    }
  }
  .app__skills-exp {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    .app__skills-exp {
      margin-top: 2rem;
    }
  }
  .app__skills-exp-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
  }
  .app__skills-exp-works {
    flex: 1;
  }
  .app__skills-exp-works .app__skills-exp-work {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .app__skills-exp-works .app__skills-exp-work h4 {
    font-weight: 500;
  }
  .app__skills-exp-works .app__skills-exp-work p {
    font-weight: 400;
    color: var(--gray-color);
    margin-top: 5px;
  }
  .app__skills-exp-year {
    margin-right: 3rem;
  }
  .app__skills-exp-year p {
    font-weight: 800;
    color: var(--secondary-color);
  }
  @media screen and (max-width: 450px) {
    .app__skills-exp-year {
      margin-right: 1rem;
    }
  }
  .skills-tooltip {
    max-width: 300px !important;
    background-color: var(--white-color) !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: var(--gray-color) !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;
  }
  @media screen and (min-width: 2000px) {
    .skills-tooltip {
      font-size: 1.75rem !important;
      max-width: 500px !important;
      line-height: 2 !important;
    }
  }
`;

export default SkillsWrap;

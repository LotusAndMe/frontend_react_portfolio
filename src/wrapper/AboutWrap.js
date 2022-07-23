/** @format */
import styled from "styled-components";

const AboutWrapper = styled.div`
  .app__about {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  .app__profiles {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  .app__profile-item {
    width: 190px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem;
  }
  .app__profile-item img {
    width: 100%;
    height: 170px;
    border-radius: 15px;
    object-fit: cover;
  }
  @media screen and (min-width: 2000px) {
    .app__profile-item {
      width: 370px;
      margin: 2rem 4rem;
    }
    .app__profile-item img {
      height: 320px;
    }
  }
`;

export default AboutWrapper;

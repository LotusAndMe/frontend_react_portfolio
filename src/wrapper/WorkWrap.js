/** @format */

import styled from "styled-components";

const WorkWrap = styled.div`
  .app__works {
    flex: 1;
    width: 100%;
    flex-direction: column;
  }
  .app__work-filter {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem;
  }
  .app__work-filter .app__work-filter-item {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0.5rem;
  }
  .app__work-filter .app__work-filter-item:hover {
    background-color: var(--secondary-color);
    color: #fff;
  }
  @media screen and (min-width: 2000px) {
    .app__work-filter .app__work-filter-item {
      padding: 1rem 2rem;
      border-radius: 0.85rem;
    }
  }
  .app__work-filter .item-active {
    background-color: var(--secondary-color);
    color: #fff;
  }
  .app__work-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .app__work-portfolio .app__work-item {
    width: 270px;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .app__work-portfolio .app__work-item:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 2000px) {
    .app__work-portfolio .app__work-item {
      width: 470px;
      padding: 1.25rem;
      border-radius: 0.75rem;
    }
  }
  @media screen and (max-width: 300px) {
    .app__work-portfolio .app__work-item {
      width: 100%;
      margin: 1rem;
    }
  }
  .app__work-img {
    width: 100%;
    height: 230px;
    position: relative;
  }
  .app__work-img img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
  @media screen and (min-width: 2000px) {
    .app__work-img {
      height: 350px;
    }
  }
  .app__work-hover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
  }
  .app__work-hover div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    margin: 1rem;
    font-family: var(--font-base);
    font-weight: 800;
    cursor: pointer;
    transform: all 0.3s ease;
  }
  .app__work-hover div svg {
    width: 50%;
    height: 50%;
    color: var(--white-color);
  }
  .app__work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;
  }
  .app__work-content h4 {
    margin-top: 1rem;
    line-height: 1.5;
  }
  .app__work-content .app__work-tag {
    position: absolute;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: #fff;
    top: -25px;
  }
`;

export default WorkWrap;

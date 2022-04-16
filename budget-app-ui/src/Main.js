import { React } from "react";
import styled from "styled-components";
import { ReactComponent as Chevron } from "./assets/icons/chevron.svg";
import Card from "./Card.js";

const MainPage = styled.div`
  font-family: canada-type-gibson, proxima-nova, sans-serif;
  flex-grow: 2;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 2rem;
    color: #495257;
  }

  .year {
    font-weight: 300;
    padding: 0 0.5rem;
    color: #69757a;
  }

  .headers {
    display: flex;
    color: #69757a;
  }

  .month {
    background-color: transparent;
  }

  .income {
    width: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
    padding: 2rem;
    margin: 2rem;
    border-radius: 0.5rem;
  }

  .paychecks {
    display: flex;
    padding: 1rem 0;
    transition: ease-in-out 0.2s;

    &:focus-within {
      box-shadow: 0 0.25rem 1rem 0 rgb(31 36 38 / 16%);
      transform: scale(1.1);
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    display: block;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 300;
    color: #0091d9;
  }

  input {
    margin-right: -0.3125rem;
    margin-left: -0.3125rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    padding: 0.25rem;
    font-size: 1em;
    font-weight: 300;
    font-family: inherit;
    text-align: center;
  }

  .chevron {
    width: 1rem;
    height: 1rem;
    fill: #0091d9;
    display: inline-block;
  }
`;

function Main() {
  return (
    <MainPage>
      <h1 className="month">
        March
        <span className="year">2022</span>
        <Chevron className="chevron" />
      </h1>
      <Card name="Income" button="Add Income" label="Received" />
      <Card name="Housing" button="Add Item" label="Remaining" />
      <Card name="Savings" button="Add Item" label="Remaining" />
      <Card name="" button="Add Item" label="Remaining" />
      <button>+ ADD GROUP</button>
    </MainPage>
  );
}

export default Main;

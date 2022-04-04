import { React, useState } from "react";
import styled from "styled-components";
import { ReactComponent as TrashIcon } from "./assets/icons/trash.svg";

const CardDiv = styled.div`
  font-family: canada-type-gibson, proxima-nova, sans-serif;

  .headers {
    display: flex;
    color: #69757a;
  }

  .month {
    background-color: transparent;
  }

  span {
    font-weight: 600;
    font-size: 1.125rem;
    color: #69757a;
  }

  .planned,
  .received {
    font-weight: 300;
    color: #69757a;
    font-size: 1rem;
  }

  .section {
    width: 40%;
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

  title:focus {
    color: #0091d9;
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

  .trash {
    height: 16px;
    width: 16px;
    color: #0091d9;
    padding: 10px 25px;
  }
`;

function Card(props) {
  const [counter, setCounter] = useState(1);

  const [fields, setFields] = useState([
    { id: 0, title: "Label", amount1: 0, amount2: 0 },
  ]);

  function handleChange(e, i) {
    const { name, value } = e.target;
    console.log("Name: ", name);
    const list = [...fields];
    list[i][name] = value;
    setFields(list);
  }

  function handleAdd() {
    setFields([
      ...fields,
      { id: counter, title: "Label", amount1: 0, amount2: 0 },
    ]);
    setCounter(counter + 1);
  }

  function handleRemove(index) {
    const list = [...fields];
    list.splice(index, 1);
    setFields(list);
  }

  return (
    <CardDiv>
      <div className="section">
        <div className="headers flex flex-row">
          <span className="section-header basis-1/3" img={props.img}>
            {props.name}
          </span>
          <div></div>
          <div className="planned basis-1/3">Planned</div>
          <div className="received basis-1/3">{props.label}</div>
        </div>

        {fields.map((field, i) => {
          return (
            <div className="paychecks" key={field.id}>
              <div className="trash">
                <TrashIcon onClick={(event) => handleRemove(i)} />
              </div>
              <input
                name="title"
                defaultValue={field.title}
                onChange={(e) => handleChange(e, i)}
                className="title bg-white hover:bg-slate-100"
              ></input>
              <input
                className="amount1"
                name="amount1"
                defaultValue={"$" + field.amount1}
                onChange={(e) => handleChange(e, i)}
                className="bg-white hover:bg-slate-100"
              ></input>
              <input
                name="amount2"
                defaultValue={"$" + field.amount2}
                onChange={(e) => handleChange(e, i)}
                className="bg-white hover:bg-slate-100"
              ></input>
            </div>
          );
        })}
        <button type="button" onClick={handleAdd}>
          {props.button}
        </button>
      </div>
    </CardDiv>
  );
}

export default Card;

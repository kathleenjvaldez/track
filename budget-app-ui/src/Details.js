import { React, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "./assets/icons/close.svg";

const DetailPanel = styled.div`
  font-family: canada-type-gibson, proxima-nova, sans-serif;
  height: 100%;
  color: #818181;
  margin: 200px 100px;

  .header {
    height: 100%;
    top: 50px;
    font-size: 1.1875rem;
    text-align: center;
  }

  .headers {
    display: flex;
    color: #69757a;
  }

  .planned,
  .spent,
  .remaining {
    font-weight: 300;
    color: #69757a;
    font-size: 0.875rem;
    padding: 10px;
  }

  .icon {
    top: -165px;
    left: 150px;
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzAgMzAiPjxzdHlsZT4uc3Qwe2ZpbGw6I2IzYjNiM30uc3Qxe2ZpbGw6I2Y1ODIyMH0uc3Qye3N0cm9rZTojYTdhOWFjfS5zdDIsLnN0Mywuc3Q0e2ZpbGw6bm9uZTtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Qze3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kfS5zdDR7c3Ryb2tlOiMyNjhlYWR9LnN0NXtmaWxsOiM4ZGMyNDF9LnN0Niwuc3Q3LC5zdDgsLnN0OXtmaWxsOiNmZmY7c3Ryb2tlOiM3OTgzODc7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0Nywuc3Q4LC5zdDl7ZmlsbDpub25lfS5zdDgsLnN0OXtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0OXtmaWxsOiNlYWVhZWF9LnN0MTB7ZmlsbDojMzI5Y2I0fS5zdDExLC5zdDEyLC5zdDEze2ZpbGw6bm9uZTtzdHJva2U6Izc5ODQ4ODtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3QxMiwuc3QxM3tzdHJva2U6I2IzYjNiM30uc3QxM3tzdHJva2U6IzI3OGRhZH0uc3QxNHtmaWxsOiMxYzljYjR9LnN0MTd7ZmlsbDojNzU3NTc2fS5zdDE4e2ZpbGw6I2ZmZjtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6LjU7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0MTl7ZmlsbDojYmJjMGMwfS5zdDIwe2ZpbGw6I2YwNDk0MH08L3N0eWxlPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE0LjgiIGlkPSJYTUxJRF8xMV8iIHN0eWxlPSJmaWxsOiNmNDgyMjAiLz48cGF0aCBkPSJNMjEuNSAxNGgtNS4yVjguOGMwLS42LS40LTEtMS0xcy0xIC40LTEgMVYxNEg5LjJjLS42IDAtMSAuNC0xIDFzLjQgMSAxIDFoNS4ydjUuMWMwIC42LjQgMSAxIDFzMS0uNCAxLTFWMTZoNS4yYy42IDAgMS0uNCAxLTFzLS42LTEtMS4xLTF6IiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+)
      no-repeat;
    content: "";
    display: inline-block;
    position: relative;
    height: 1.875rem;
    width: 1.875rem;
  }

  .transaction {
    top: -25px;
    left: -25px;
    position: absolute;
    color: #b6bec2;
    font-size: 0.875rem;
  }

  .modal {
    height: 500px;
    width: 300px;
    background-color: #fff;
    position: absolute;
    visibility: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
  }

  .modalHeader {
    padding: 20px 25px;
    display: inline-block;
  }

  .close {
    top: o;
    right: -15px;
    height: 35px;
    fill: #0091d9;
    padding: 10px 25px;
    display: inline;
    position: absolute;
  }
`;

function Details() {
  const [expanded, setExpanded] = useState({ visibility: "hidden" });

  function handleClick() {
    setExpanded({ visibility: "visible" });
  }

  function handleClose() {
    setExpanded({ visibility: "hidden" });
  }

  return (
    <DetailPanel>
      <button className="icon" onClick={handleClick}>
        <h1 className="transaction">Transactions</h1>
      </button>
      <div className="modal" style={expanded}>
        <h1 className="modalHeader">Transactions</h1>
        <button className="addNew">Add New</button>
        <CloseIcon className="close" onClick={handleClose} />
        <div className="spent basis-1/3">Tracked</div>
      </div>
      <div className="header">
        <h1>INCOME</h1>
        <div className="section">
          <div className="headers flex flex-row">
            <div className="planned basis-1/3">PLANNED</div>
            <div className="spent basis-1/3">SPENT</div>
            <div className="remaining basis-1/3">REMAINING</div>
          </div>
        </div>
      </div>
    </DetailPanel>
  );
}

export default Details;

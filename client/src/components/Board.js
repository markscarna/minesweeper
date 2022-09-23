import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1rem 1rem 1rem 1rem 1rem 1rem 1rem 1rem 1rem 1rem;
  grid-gap: 0.5rem;
  justify-content: center;
  padding-top: 20vh;
`;

const StyledCell = styled.div`
  border: 2px solid black;
  width: min-content;
`;

StyledCell.custom = { wasClicked: false, isBomb: false, adjacentBombCount: 0 };

const StyledCellBomb = styled.div`
  border: 2px solid black;
  width: min-content;
`;

StyledCellBomb.custom = {
  wasClicked: false,
  isBomb: true,
  adjacentBombCount: 0,
};

export function Grid({ size, bombs }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClickBomb = (index) => {
    const elem = document.getElementById(index);
    elem.style.opacity = "100";
    elem.style.color = "red";
    alert("BOOM! You Lose!");
  };
  const handleClick = (index) => {
    if (index < 89) {
      console.log(`i am sitting at index: ${index}`);
      if (cellArray[index + 1].type.custom.isBomb === true) {
        //   cellArray[index].props.children.props.children = 1;
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
        console.log("bomb ahead");
      } else if (cellArray[index + 9].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index + 10].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index + 11].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 1].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 9].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 10].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 11].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      }
    } else if (index === 89) {
      if (cellArray[index - 1].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 9].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 10].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      } else if (cellArray[index - 11].type.custom.isBomb === true) {
        console.log("bomb ahead");
        const elem = document.getElementById(index);
        elem.style.opacity = "100";
        elem.style.color = "green";
      }
    }
  };
  const cellArray = [];
  for (let x = 0; x < size; x++) {
    const cell = (
      <StyledCell>
        <button id={x} style={{ opacity: "0" }} onClick={() => handleClick(x)}>
          1
        </button>
      </StyledCell>
    );
    cellArray.push(cell);
  }
  //   console.log(cellArray[0].type.custom);

  for (let y = 0; y < bombs; y++) {
    const rand = getRandomInt(0, 100);
    cellArray[rand] = (
      <StyledCellBomb>
        <button
          id={y}
          style={{ opacity: "10" }}
          onClick={() => handleClickBomb(y)}
        >
          •
        </button>
      </StyledCellBomb>
    );
  }

  return (
    <StyledGridContainer className="container">
      {cellArray.map((cell) => cell)}
    </StyledGridContainer>
  );
}

import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(false);
  const [whoWon, setWhoWon] = useState("");

  const Counter = () => {
    setCount(count + 1);
  };

  const handleClick = e => {
    if (board[e.target.id] !== "") {
      return;
    }
    if (count % 2 === 0) {
      let newBoard = [...board];
      newBoard[e.target.id] = "X";
      setBoard(newBoard);
    } else {
      let newBoard = [...board];
      newBoard[e.target.id] = "O";
      setBoard(newBoard);
    }
    Counter();
  };

  const resetGame = () => {
    setCount(count === 0);
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(false);
  };

  useEffect(() => {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    let hasWinner = false;
    win.forEach(combo => {
      let checkCombo = combo.map(ind => {
        return board[ind];
      });
      if (checkCombo.join("") === "XXX" || checkCombo.join("") === "OOO") {
        setWinner(true);
        hasWinner = true;
        if (checkCombo.join("") === "XXX") {
          // alert("X wins");
          setWhoWon("X");
        } else if (checkCombo.join("") === "OOO") {
          // alert("O wins");
          setWhoWon("O");
        }
      }
    });
    if (count === 9 && hasWinner === false) {
      // alert("draw");
    }
  }, [board]);
  // console.log(whoWon);
  // console.log(winner);
  // console.log(count + " count");
  // console.log(board);
  return (
    <div
      style={{
        width: "54vw",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        margin: "auto",
        marginTop: "40px"
      }}
    >
      <div
        onClick={() => {
          resetGame();
        }}
        style={
          winner === true && whoWon === "X"
            ? {
                display: "block",
                width: "100%",
                height: "100%",
                fontSize: "15vw",
                color: "#545454",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "20vh"
              }
            : { display: "none" }
        }
      >
        X WINS <p style={{ fontSize: "20px" }}> click to restart</p>{" "}
        <p style={{ fontSize: "20px" }}> or scroll to see game </p>
      </div>
      <div
        onClick={() => {
          resetGame();
        }}
        style={
          winner === true && whoWon === "O"
            ? {
                display: "block",
                width: "100%",
                height: "100%",
                fontSize: "15vw",
                color: "#545454",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "20vh"
              }
            : { display: "none" }
        }
      >
        O WINS <p style={{ fontSize: "20px" }}> click to restart</p>{" "}
        <p style={{ fontSize: "20px" }}> or scroll to see game </p>
      </div>
      <div
        onClick={() => {
          resetGame();
        }}
        style={
          winner === false && count === 9
            ? {
                display: "block",
                width: "100%",
                height: "100%",
                fontSize: "15vw",
                color: "#545454",
                textAlign: "center",
                cursor: "pointer",
                marginBottom: "60vh",
                marginTop: "20vh"
              }
            : { display: "none" }
        }
      >
        DRAW <p style={{ fontSize: "20px" }}> click to restart</p>{" "}
        <p style={{ fontSize: "20px" }}> or scroll to see game </p>
      </div>
      {board.map((value, index) => {
        return (
          <div
            onClick={e => {
              handleClick(e);
            }}
            style={{
              width: "17vw",
              height: "24vh",
              fontSize: "100px",
              textAlign: "center",
              cursor: "pointer",
              pointerEvents: winner === false ? "auto" : "none",
              lineHeight: "24vh",
              margin: "5px",
              backgroundColor: "#3ca193",
              color: value === "X" ? "#545454" : "#f2ebd3",
              borderRadius: "8px"
            }}
            key={index}
            id={index}
          >
            {value}
          </div>
        );
      })}

      <div
        style={{
          marginLeft: "3vw",
          color: "#545454",
          marginTop: "40px",
          fontSize: "20px",
          fontWeight: "500",
          backgroundColor: "#3ca193",
          width: "160px",
          height: "40px",
          textAlign: "center",
          lineHeight: "40px",
          borderRadius: "4px",
          borderBottomColor: count % 2 === 0 ? "black" : "none",
          borderBottomWidth: count % 2 === 0 ? "2px" : "none",
          borderBottomStyle: count % 2 === 0 ? "solid" : "none"
        }}
      >
        X
      </div>
      <div
        style={{
          marginLeft: "6vw",
          color: "#f2ebd3",
          marginTop: "40px",
          fontSize: "20px",
          fontWeight: "500",
          backgroundColor: "#3ca193",
          width: "160px",
          height: "40px",
          textAlign: "center",
          lineHeight: "40px",
          borderRadius: "4px",
          borderBottomColor: count % 2 === 0 ? "none" : "black",
          borderBottomWidth: count % 2 === 0 ? "none" : "2px",
          borderBottomStyle: count % 2 === 0 ? "none" : "solid"
        }}
      >
        {" "}
        O
      </div>
      <button
        className="button"
        onClick={() => {
          resetGame();
        }}
        style={{
          width: "160px",
          height: "40px",
          marginLeft: "6vw",
          marginRight: "1px",
          marginTop: "38px",
          fontSize: "18px",
          borderColor: "#3ca193",
          borderwidth: "0px",
          backgroundColor: "#3ca193",
          color: count == 9 || winner === true ? "#545454" : "#f2ebd3",
          cursor: "pointer",
          borderRadius: "4px",
          fontWeight: "500",
          marginBottom: "6vh",
          textTransform: "uppercase",
          borderBottomColor: count == 9 || winner === true ? "black" : "none",
          borderBottomWidth: count == 9 || winner === true ? "2px" : "none",
          borderBottomStyle: count == 9 || winner === true ? "solid" : "none"
        }}
      >
        {winner === true || count === 9 ? "New Game" : "Reset Game"}
      </button>
    </div>
  );
}

export default App;

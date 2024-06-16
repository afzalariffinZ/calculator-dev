import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tulisan from './Tulisan'

function App() {

  const [display, setDisplay] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (number) => {
    setIsClicked(true);
    setDisplay(x => x + number);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  }

  const handleDelete = () => {
    setDisplay(x => x.slice(0, -1))
    console.log("SIGMA")
  }

  const handleAC = () => {
    setDisplay("");

  }

  const handleCalc = () => {
    const data = display;

    try {
      const calculation = eval(data);
      setDisplay(eval(data));
    } catch (err) {
      alert("Fucking retard");
    }


  }
  return (
    <>
      <div className="kotak">
        <Tulisan></Tulisan>
        <div className="kotakCalculator">
          <div className="display">
            {display}
          </div>
          <div className="advfunction">
            <div className="above" id="above1">
              <div className="numberBox delete" onClick={() => { handleDelete }}>
                frac
              </div>
              <div className="numberBox" onClick={handleAC}>
              √
              </div>
              <div className="numberBox" onClick={() => { handleClick("*") }}>
                x^2
              </div>
              <div className="numberBox" onClick={() => { handleClick("/") }}>
                x^y
              </div>
              <div className="numberBox" onClick={() => { handleClick("+") }}>
                log
              </div>
              <div className="numberBox" onClick={() => { handleClick("-") }}>
                ln
              </div>

            </div>
            <div className="above" id="above1">
              <div className="numberBox delete" onClick={() => { handleDelete }}>
                (-)
              </div>
              <div className="numberBox" onClick={handleAC}>
              °' "
              </div>
              <div className="numberBox" onClick={() => { handleClick("*") }}>
                x^-1
              </div>
              <div className="numberBox" onClick={() => { handleClick("/") }}>
                sin
              </div>
              <div className="numberBox" onClick={() => { handleClick("+") }}>
                cos
              </div>
              <div className="numberBox" onClick={() => { handleClick("-") }}>
                tan
              </div>

            </div>
            <div className="above" id="above1">
              <div className="numberBox delete" onClick={() => { handleDelete }}>
                <p id="big">STO</p>
              </div>
              <div className="numberBox" onClick={handleAC}>
              <p id="big">ENG</p>
              </div>
              <div className="numberBox" onClick={() => { handleClick("*") }}>
                (
              </div>
              <div className="numberBox" onClick={() => { handleClick("/") }}>
                )
              </div>
              <div className="numberBox" onClick={() => { handleClick("+") }}>
              <p id="big" className="nigerian">S ↔ D</p>
              </div>
              <div className="numberBox" onClick={() => { handleClick("-") }}>
                M+
              </div>

            </div>
          </div>

          <div className="item-inside">

            <div className="kotakReal">
              <div className={isClicked ? "numberBoxClicked" : "numberBox"} onClick={() => { handleClick("7") }}>
                7
              </div>
              <div className={isClicked ? "numberBoxClicked" : "numberBox"} onClick={() => { handleClick("8") }}>
                8
              </div>
              <div className="numberBox" onClick={() => { handleClick("9") }}>
                9
              </div>
              <div className="numberBox" onClick={() => { handleClick("4") }}>
                4
              </div>
              <div className="numberBox" onClick={() => { handleClick("5") }}>
                5
              </div>
              <div className="numberBox" onClick={() => { handleClick("6") }}>
                6
              </div>
              <div className="numberBox" onClick={() => { handleClick("1") }}>
                1
              </div>
              <div className="numberBox" onClick={() => { handleClick("2") }}>
                2
              </div>
              <div className="numberBox" onClick={() => { handleClick("3") }}>
                3
              </div>
              <div className="numberBox" onClick={() => { handleClick("0") }}>
                0
              </div>
              <div className="numberBox" onClick={() => { handleClick("2") }}>
                .
              </div>
              <div className="numberBox" onClick={() => { handleClick("3") }}>
                10^
              </div>
            </div>
            <div className="function">
              <div className="numberBox delete" onClick={() => { handleDelete }}>
                Del
              </div>
              <div className="numberBox" onClick={handleAC}>
                AC
              </div>
              <div className="numberBox" onClick={() => { handleClick("*") }}>
                *
              </div>
              <div className="numberBox" onClick={() => { handleClick("/") }}>
                /
              </div>
              <div className="numberBox" onClick={() => { handleClick("+") }}>
                +
              </div>
              <div className="numberBox" onClick={() => { handleClick("-") }}>
                -
              </div>
              <div className="numberBox" onClick={() => { handleClick("Ans") }}>
                Ans
              </div>
              <div className="numberBox" onClick={handleCalc}>
                =
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App

import React, { useState, useEffect } from "react";

function Heart(props) {
  const [show, setShow] = useState(false);
  const [increasePer, setIncreasePer] = useState(0);

  useEffect(() => {
    if (props.percentaje == 0){
      setIncreasePer(0);
      setShow(false);
    }
  }, [props.percentaje])
  

  async function increase() {
    await props.setDone(false);
    await setIncreasePer(0);
    let random = Math.floor(Math.random() * 100) + 1;
    let wait = 40;
    for (var x = 0; x <= random; x++) {
      await new Promise((resolve) => {
        setTimeout(async () => {
          await setIncreasePer(x);
          if (x >= random * 0.7) {
            wait = 0;
          } else if (x >= random * 0.5) {
            wait = 20;
          }
          resolve(true);
        }, 60 - wait);
      });
    }
    props.setPercentaje(random);
    await props.setDone(true);
  }

  return (
    <div className="heart">
      <div
        className="container"
        onClick={(e) => {
          if (props.enable === false || props.enable2 === false) return;
          setShow(!show);
          if (show === false) {
            increase();
          } else {
            props.setDone(false);
          }
        }}
      >
        <div className="heartImage">
          <img
            src={
              props.enable === true && props.enable2 === true
                ? "./public/heart.svg"
                : "./public/heartWhite.svg"
            }
            alt=""
          />
        </div>
        <h2 style={{ display: show == true && (props.enable === true && props.enable2 === true) ? "block" : "none" }}>
          {increasePer + "%"}
        </h2>
      </div>
    </div>
  );
}

export default Heart;

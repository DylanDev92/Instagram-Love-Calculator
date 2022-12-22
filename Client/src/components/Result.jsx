import React, { useState, useEffect } from "react";

function Result(props) {
  const [text, setText] = useState("");
  const minus5 = "You may have a successful relationship, but you both need to work on it. Do not relax and assume that everything will be OK; it might not be turning out the way you had hoped. Spend as much time as you can together. Again, the likelihood that this relationship would succeed is quite low, so even if you put a lot of effort into it, it might not.";
  const minus25 = "A relationship is very much possible if the two of you really want it and are willing to make some sacrifices for it, although the chance of it happening is not very high. It will require a lot of quality time spent together. No matter how much time you spend to it, this relationship might not end up being anything at all.";
  const minus50 = "A relationship has a decent chance of success, but on the other hand, it might not. Both happy and sad times could happen in your relationship. Don't be afraid to discuss any issues with the person. Spend time with one another and communicate.";
  const minus75 = "There is a very good chance that a relationship will succeed, but that doesn't mean you shouldn't improve things on it. Keep in mind that every relationship requires communication, time spent together, and other such things.";
  const minus95 = "The chances that this relationship will succeed is extremely high because the two of you were meant to be together. A healthy relationship needs clear communication, so keep that in mind. And continue spending time together!";
  const more95 = "I won't believe in love anymore if this relationship doesn't work. You two are the ideal couple, life intended you to be together!";

  useEffect(() => {
    if (props.done === true){
      if (props.percentaje > 95){
        setText(more95);
      }
      if (props.percentaje < 95){
        setText(minus95);
      }
      if (props.percentaje < 75){
        setText(minus75);
      }
      if (props.percentaje <= 50){
        setText(minus50);
      }
      if (props.percentaje < 25){
        setText(minus25);
      }
      if (props.percentaje < 5){
        setText(minus5);
      }
    }
  }, [props.done])
  
  return (
    <div
      className="result"
      style={{ opacity: props.done === true && (props.enable === true && props.enable2 === true) && props.percentaje != 0 ? "100" : "0" }}
    >
      <h3>{props.percentaje + "%"}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Result;

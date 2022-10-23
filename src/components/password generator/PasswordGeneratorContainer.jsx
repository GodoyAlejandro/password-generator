import React, { useEffect, useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

const PasswordGeneratorContainer = () => {
  const [passwordLength, setPasswordLength] = useState("");
  const [randomWords, setRandomWords] = useState([]);
  

  useEffect(() => {
    fetch("http://palabras-aleatorias-public-api.herokuapp.com/multiple-random")
      .then((response) => response.json())
      .then((data) => {
        setRandomWords(data.body.map((e)=>{return e.Word}))
        // data.body.map((e)=>{return(
        //   setRandomWords(e)
        // )})
      })
  }, []);
  return (
    <>
      <PasswordGenerator
        setPasswordLength={setPasswordLength}
        passwordLength={passwordLength}
        randomWords={randomWords}
      />
    </>
  );
};

export default PasswordGeneratorContainer;

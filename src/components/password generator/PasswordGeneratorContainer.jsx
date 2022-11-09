import React, { useEffect, useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

const options = {
  header: {
    "content-type": "aplication/json",
  },
};
const PasswordGeneratorContainer = () => {
  const [passwordLength, setPasswordLength] = useState();
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    fetch(
      "https://clientes.api.greenborn.com.ar/public-random-word?c=99",
      options
    )
      .then((res) => res.json())
      .then((data) => setRandomWords(data));
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

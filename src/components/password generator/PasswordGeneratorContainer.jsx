import React, { useEffect, useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

const options = {
  header: {
    "content-type": "aplication/json",
  },
};
const PasswordGeneratorContainer = () => {
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    fetch(
      "https://clientes.api.greenborn.com.ar/public-random-word?c=10",
      options
    )
      .then((res) => res.json())
      .then((data) => setRandomWords(data));
  }, []);
  return (
    <>
      <PasswordGenerator randomWords={randomWords} />
    </>
  );
};

export default PasswordGeneratorContainer;

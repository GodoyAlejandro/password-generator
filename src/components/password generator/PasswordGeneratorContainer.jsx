import React, { useEffect, useState } from "react";
import PasswordGenerator from "./PasswordGenerator";

const options = {
  header: {
    "content-type": "aplication/json",
  },
};
const PasswordGeneratorContainer = () => {
  const [randomWords, setRandomWords] = useState([]);
  const [config, setConfig] = useState({
    passwordLength: 8,
    numbers: true,
    letters: true,
    upperCaseLetters: true,
    simbols: true
  });
  
  const characters = {
    numbers: "0 1 2 3 4 5 6 7 8 9",
    letters: "a b c d e f g h i j k l m n ñ o p q r s t u v w y z",
    upperCaseLetters: "A B C D E F G H I J K L M N Ñ O P Q R S T U V W Y Z",
    simbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
  };
  const handleLength = (event, newLength) => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.passwordLength = newLength;
      return newConfig;
    });
  };
  const handleLetters = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.letters = !newConfig.letters;
      return newConfig;
    });
  };
  const handleUpperCaseLetters = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.upperCaseLetters = !newConfig.upperCaseLetters;
      return newConfig;
    });
  };
  const handleNumbers = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.numbers = !newConfig.numbers;
      return newConfig;
    });
  };

  const generatePassword = () => {
    let finalCharacters = "";
    let passwordGenerated = "";

    for (let properties in config) {
      if (config[properties] === true) {
        finalCharacters += characters[properties] + " ";
      }
    }

    finalCharacters += finalCharacters.simbols;
    finalCharacters = finalCharacters.trim();
    finalCharacters = finalCharacters.split(" ");
    finalCharacters = finalCharacters.concat(randomWords);

    for (let i = 0; i < config.passwordLength; i++) {
      passwordGenerated+= finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
    }
    return passwordGenerated
  };

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
      <PasswordGenerator
        randomWords={randomWords}
        config={config}
        handleLength={handleLength}
        handleLetters={handleLetters}
        handleUpperCaseLetters={handleUpperCaseLetters}
        handleNumbers={handleNumbers}
        generatePassword={generatePassword}
      />
    </>
  );
};

export default PasswordGeneratorContainer;

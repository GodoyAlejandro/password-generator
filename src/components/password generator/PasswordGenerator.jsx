import {
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Slider,
  Switch,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const PasswordGenerator = (props) => {
  const { randomWords, setRandomWords } = props;
  const [config, setConfig] = useState({
    passwordLength: 8,
    numbers: true,
    words: true,
    upperCaseWords: true,
  });
  const [password, setPassword] = useState();

  const handleLength = (event, newLength) => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.passwordLength = newLength;
      return newConfig;
    });
  };
  const handleWords = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.words = !newConfig.words;
      return newConfig;
    });
  };
  const handleUpperCaseWords = () => {
    setConfig((lastConfig) => {
      const newConfig = { ...lastConfig };
      newConfig.upperCaseWords = !newConfig.upperCaseWords;
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

  

  const submit = () => {
    // const caracteres = {
    //   numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    //   words: [
    //     "a",
    //     "b",
    //     "c",
    //     "d",
    //     "e",
    //     "f",
    //     "g",
    //     "h",
    //     "i",
    //     "j",
    //     "k",
    //     "l",
    //     "m",
    //     "n",
    //     "o",
    //     "p",
    //     "q",
    //     "r",
    //     "s",
    //     "u",
    //     "v",
    //     "w",
    //     "x",
    //     "y",
    //     "z",
    //   ],
    //   upperCaseWords: [
    //     "A",
    //     "B",
    //     "C",
    //     "D",
    //     "E",
    //     "F",
    //     "G",
    //     "H",
    //     "I",
    //     "J",
    //     "K",
    //     "L",
    //     "M",
    //     "N",
    //     "O",
    //     "P",
    //     "Q",
    //     "R",
    //     "S",
    //     "U",
    //     "V",
    //     "W",
    //     "X",
    //     "Y",
    //     "Z",
    //   ],
    // };

    const caracteres = {
      numbers: "0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9",
      words: "a b c d e f g h i j k l m n ñ o p q r s t u v w y z",
      upperCaseWords: "A B C D E F G H I J K L M N Ñ O P Q R S T U V W Y Z",
    };
    let caracteresFinales = "";
    let passWord = "";
    for (let prop in config) {
      if (config[prop] === true) {
        caracteresFinales += caracteres[prop] + " ";
      }
    }
    caracteresFinales = caracteresFinales.trim();
    caracteresFinales = caracteresFinales.split(" ");
    caracteresFinales = caracteresFinales.concat(randomWords);


    for (let i = 0; i < config.passwordLength; i++) {
      passWord +=
        caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }
    
    // passWord += randomWords[Math.floor(Math.random() * randomWords.length)];
    console.log(caracteresFinales);
    console.log(passWord);
  };

  return (
    <Container sx={{ width: "60rem", paddingTop: "1rem" }}>
      <Paper elevation={3}>
        <Card>
          <CardContent>
            <Typography
              variant="h1"
              sx={{ fontWeight: "450", fontSize: "3rem" }}
              gutterBottom
            >
              Welcome to your password generator
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardContent>
            <Typography variant="h4">Select de lenght of characters</Typography>
            <Slider
              marks
              value={config.passwordLength}
              min={8}
              max={15}
              valueLabelDisplay={"auto"}
              sx={{ width: "40rem" }}
              onChange={handleLength}
            />
          </CardContent>
          <Divider variant="middle" />
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <CardActions>
              <Switch checked={config.words} onChange={handleWords} />
              <Typography variant="h5">include words</Typography>
            </CardActions>
            <CardActions>
              <Switch
                checked={config.upperCaseWords}
                onChange={handleUpperCaseWords}
              />
              <Typography variant="h5">include upper case words</Typography>
            </CardActions>
            <CardActions>
              <Switch checked={config.numbers} onChange={handleNumbers} />
              <Typography variant="h5">include numbers</Typography>
            </CardActions>
          </CardContent>
          <CardContent>
            <CardActions>
              <Button onClick={submit}>generate password</Button>
              <Typography>{password}</Typography>
            </CardActions>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default PasswordGenerator;

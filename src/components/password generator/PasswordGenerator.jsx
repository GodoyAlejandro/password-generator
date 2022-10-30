import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PasswordGenerator = (props) => {
  const { passwordLength, setPasswordLength, randomWords } = props;
  const [password, setPassword] = useState("");

  const createRandom = () => {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  };

  const handleClick = () => {
    const aleatorio = createRandom() + createRandom();
    setPassword(aleatorio);
    console.log(aleatorio);
    console.log(passwordLength);
  };

  useEffect(() => {}, []);

  return (
    <Paper>
      <input
        type="number"
        name="password length"
        value={passwordLength}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
      />
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        submit
      </Button>
      <Typography variant="h1">{password}</Typography>
    </Paper>
  );
};

export default PasswordGenerator;

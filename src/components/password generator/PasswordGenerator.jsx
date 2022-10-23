import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PasswordGenerator = (props) => {
  const { passwordLength, setPasswordLength, randomWords } = props;
  const [password, setPassword] = useState('');

  const handleClick=()=>{
    // const aleatorio = randomWords[Math.floor(Math.random()* randomWords.length)]
    // setPassword(aleatorio)
    console.log(randomWords);
  }

  useEffect(()=>{
     console.log(randomWords);
  },[])

  return (
    <Paper>
      <input
        type="number"
        name="password length"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
      <Button onClick={()=>{handleClick()}} >submit</Button>
      <Typography variant='h1'>{password}</Typography>
    </Paper>
  );
};

export default PasswordGenerator;

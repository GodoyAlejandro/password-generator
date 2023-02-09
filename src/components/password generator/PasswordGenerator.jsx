import {
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
import React, { useState } from "react";

const PasswordGenerator = (props) => {
  const {
    config,
    handleLength,
    handleLetters,
    handleUpperCaseLetters,
    handleNumbers,
    generatePassword,
  } = props;

  const [password, setPassword] = useState();

  const submit = () => {
    setPassword(generatePassword);
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
              max={24}
              valueLabelDisplay={"auto"}
              sx={{ width: "40rem" }}
              onChange={handleLength}
            />
          </CardContent>
          <Divider variant="middle" />
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <CardActions>
              <Switch checked={config.letters} onChange={handleLetters} />
              <Typography variant="h5">include letters</Typography>
            </CardActions>
            <CardActions>
              <Switch
                checked={config.upperCaseLetters}
                onChange={handleUpperCaseLetters}
              />
              <Typography variant="h5">include upper case letters</Typography>
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

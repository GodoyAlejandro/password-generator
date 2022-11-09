import {
  Button,
  Divider,
  Paper,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const PasswordGenerator = (props) => {
  const { passwordLength, setPasswordLength, randomWords } = props;
  const [password, setPassword] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [uppercaseSwitch, setUppercaseSwitch] = useState(false);
  const [numbers, setNumbers] = useState(false);

  const handleUppercase = (event) => {
    setUppercaseSwitch(event.target.checked);
  };
  const handleNumbers = (event) => {
    setNumbers(event.target.checked);
  };

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const handleSubmit = () => {
    setPassword(getMultipleRandom(randomWords, 2).join(""));
    
  };

  useEffect(() => {}, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: "1rem" }}>
      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3">welcome to your password generator</Typography>
        <Divider />
        <Typography variant="h5">
          please select the length of the password
        </Typography>
        <Slider
          sx={{ maxWidth: "25rem", alignSelf: "center" }}
          value={sliderValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks
          min={0}
          max={15}
        />
        <Divider />
        <Typography variant="h5">
          do you want uppercase letters in your password?
        </Typography>
        <Switch checked={uppercaseSwitch} onChange={handleUppercase} />
        <Divider />
        <Typography variant="h5">
          do you want numbers in your password?
        </Typography>
        <Switch onChange={handleNumbers} />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          submit
        </Button>
        <Typography variant="body1">{password}</Typography>
      </Paper>
    </Container>
  );
};

export default PasswordGenerator;

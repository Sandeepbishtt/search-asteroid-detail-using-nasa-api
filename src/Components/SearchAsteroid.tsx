import React, { useState, ChangeEvent, useEffect } from "react";
import { Box, Input, Button } from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import { addData, showDetailReducer, fetchedData } from "../Redux/SliceReducer";
import { CircularProgress } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
const classes = {
  form: {
    marginLeft: "1.1rem",
    marginTop: "2rem",
  },
  Input: {
    width: "25rem",
    marginBottom: "1rem",
  },
  loading :{ marginLeft: "50%", marginTop: "15rem" },
  showButton :{ marginTop: "1rem", marginLeft: "5rem" },
  randomButton :{ marginTop: "-3.5rem", marginLeft: "15rem" },
};

export const InputForm: React.FC = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const data: any = useSelector(fetchedData);
  const [showSpinner, setShowSpinner] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=7P8Tdob4dz1NHYcEN1LXXNKCpKfN0x4kJozhcvFW`
      )
      .then((response) => {
        if (response.status === 200) {
          setShowSpinner(false);
          dispatch(addData(response.data));
          dispatch(showDetailReducer());
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    data.near_earth_objects.forEach((val: any, index: number) => {
      if (val.id === input) {
        history.push({
          pathname: "/AsteroidDetail",
          state: { val },
        });
      } else {
        setShowAlert(true);
      }
    });
    setInput("");
  };

useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }, [showAlert]);

  const randomIdHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const idArray = data.near_earth_objects;
    const id = idArray[Math.floor(Math.random() * idArray.length)].id;
    setInput(id);
    idArray.forEach((val: any, index: number) => {
      if (val.id === id) {
        history.push({
          pathname: "/AsteroidDetail",
          state: { val },
        });
      }
    })
  };

  return (
    <>
      {showAlert && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>Asteroid ID not found</strong>
        </Alert>
      )}
      <h1>Search Asteroid</h1>
      {showSpinner ? (
        <CircularProgress
          size={80}
          style={classes.loading}
        />
      ) : (
        <Box
          border={1}
          borderColor="grey.500"
          borderRadius={5}
          bgcolor="white.main"
          boxShadow={3}
          width={450}
          height={150}
          mx="auto"
          mt="2rem"
        >
          <form data-test='search-form' style={classes.form} onSubmit={submitHandler}>
            <Input
              style={classes.Input}
              type="text"
              required
              className="form-control"
              placeholder="Enter Asteroid ID"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInput(event.target.value)
              }
              value={input}
              name ='searchAsteroid'
            />
            <Button
              style={classes.showButton}
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<NoteAddIcon />}
              disabled={input === ""}
            >
              Submit
            </Button>
          </form>
          <Button
            style={classes.randomButton}
            type="submit"
            variant="contained"
            color="secondary"
            onClick={randomIdHandler}
          >
            Random Asteroid
          </Button>
        </Box>
      )}
    </>
  );
};

export default InputForm;

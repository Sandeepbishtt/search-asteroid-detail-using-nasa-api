import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { toShow } from "../Redux/SliceReducer";
import { useLocation } from "react-router";

  const AsteroidDetail: any = () => {
  const showDetail: boolean = useSelector(toShow);
  const location = useLocation();
  const data: any = location.state;
console.log(data)
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Asteroid Detail</h1>

        <Box
          border={1}
          borderColor="grey.500"
          borderRadius={5}
          bgcolor="white.main"
          boxShadow={3}
          width={500}
          height={350}
          mx="auto"
          mt="2rem"
        >
          <div style={{ margin: "2rem" }}>
            <h1 data-testid="location"> Name:{data.val.name} </h1>
            <h2>nasa_jpl_url :</h2> {data.val.nasa_jpl_url}
            <h2>data.is_potentially_hazardous_asteroid</h2>
            {data.val.is_potentially_hazardous_asteroid ? "True" : "False"}
          </div>
        </Box>

    </>
  );
};

export default AsteroidDetail;

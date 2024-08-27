import { Grid2 } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <div>
      <h1 className="text-center">Features</h1>

      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            border: "2px solid black",
          }}
        ></Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            border: "2px solid black",
          }}
        ></Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            border: "2px solid black",
          }}
        ></Grid2>
      </Grid2>
    </div>
  );
}

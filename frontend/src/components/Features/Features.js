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
        > Url summarizer 
        <br/>
        Tired of going through multiple webpages? Enter the urls here, summarize your text!
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            border: "2px solid black",
          }}
        > Forum discussions 
        <br/>
        Teamwork makes the dream work and plus no one likes to study alone,
        share your summaries and material with others, get feedback and get that
        perfect score.
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            border: "2px solid black",
          }}
        > Helper AI 
        <br/>
        No body likes to scroll endlessly, we built helperbot
        to help you navigate through the website easily.
         </Grid2>
      </Grid2>
    </div>
  );
}

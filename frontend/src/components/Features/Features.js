import { Grid2 } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <div id="features">
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
            boxShadow: "0px 2px 8px #5218fa",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Quick Scan & Summarize </h2>
          <br />
          <p>
          Instantly scan URLs to extract key information and get concise summaries. 
          Whether it's a lengthy article or a detailed report, Cogni simplifies content consumption 
          by providing you with the most important points at a glance.
          </p>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            boxShadow: "0 2px 8px #5218fa",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            margin: "30px 0px",
          }}
        >
          <h2>PDFs Simplified</h2>
          <br />
          <p>
          Upload your PDFs and let Cogni do the heavy lifting. 
          Our advanced summarization tool condenses lengthy documents into easily digestible summaries, 
          helping you save time and focus on what truly matters
          </p>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            boxShadow: "0 2px 8px #5218fa",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Engage & Exchange Ideas</h2>
          <br />
          <p>
          Join a vibrant community of learners and thinkers. Share insights, ask questions, 
          and participate in discussions that enrich your knowledge. The Cogni forum is your space 
          for meaningful conversations and collaborative learning.
          </p>
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            height: "350px",
            width: "350px",
            boxShadow: "0 2px 8px #5218fa",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Learn with Flashcards</h2>
          <br />
          <p>
          Enhance your learning with customized flashcards. Whether you're studying for an exam or mastering a new skill, 
          Cogni's flashcards are designed to reinforce your knowledge through active recall and spaced repetition.
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
}

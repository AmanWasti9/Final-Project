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
          <h2>URL Summarizer</h2>
          <br />

          <p>
            Struggling to manage multiple webpages? Our URL Summarizer tool is
            here to help! Simply input the URLs, and get a concise summary of
            the content. Whether you're doing research, gathering information,
            or just need quick insights, this feature saves you time and effort
            by providing you with the essential points from each page.
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
          <h2>Forum Discussions</h2>
          <br />

          <p>
            Collaboration enhances understanding! Our Forum Discussions feature
            allows you to share your summaries and study materials with peers.
            Engage in meaningful discussions, receive valuable feedback, and
            work together to achieve academic excellence. Join the conversation
            and benefit from collective insights to reach your goals more
            effectively.
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
          <h2>Helper AI</h2>
          <br />
          <p>
            Navigating through a website can sometimes be overwhelming. That's
            why we developed Helper AI, your personal guide to effortlessly
            explore our platform. Say goodbye to endless scrolling and confusing
            menus. Helper AI streamlines your experience by providing quick
            access to the features and information you need, ensuring a smooth
            and enjoyable journey.
          </p>
        </Grid2>
      </Grid2>
    </div>
  );
}

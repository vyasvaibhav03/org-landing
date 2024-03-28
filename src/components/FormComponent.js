import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
// import backgroundImage from './path_to_your_background_image.jpg'; // Import your background image file

const FormComponent = () => {
  // State variables to store form field values
  const [organization, setOrganization] = useState("");
  const [application, setApplication] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform any actions you want with the submitted data
    console.log("Organization:", organization);
    console.log("Application:", application);
    // Reset the form fields after submission if needed
    setOrganization("");
    setApplication("");
  };

  return (
    <Container maxWidth="sm">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <Typography
            variant="subtitle1"
            style={{ marginRight: "8px", marginTop: "10px" }}
          >
            Organization:
          </Typography>
          <TextField
            placeholder="Enter organization name"
            variant="outlined"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
        </div>
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <Typography
            variant="subtitle1"
            style={{ marginRight: "20px", marginTop: "10px" }}
          >
            Application:
          </Typography>
          <TextField
            placeholder="Enter application name"
            variant="outlined"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            required
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormComponent;

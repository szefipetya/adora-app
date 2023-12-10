/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      // Make a request to the backend server to initiate the Google OAuth2 flow
      const response = await axios.get('/auth/google');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Google login:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      // Make a request to the backend server to initiate the Facebook OAuth2 flow
      const response = await axios.get('/auth/facebook');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Facebook login:', error);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <div>
            <h1>Welcome to our Social Login App!</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
            <button onClick={handleFacebookLogin}>Login with Facebook</button>
          </div>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};

export default Login;
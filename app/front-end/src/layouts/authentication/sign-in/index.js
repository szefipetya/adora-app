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
import { NavLink, Navigate } from 'react-router-dom'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { useAuth } from '../context/AuthContext'
import { ArticleApi } from '../misc/ArticleApi'
import { handleLogError } from '../misc/Helpers'

const SignIn = () => {
  const Auth = useAuth()
  console.log(Auth)
  const isLoggedIn = Auth.userIsAuthenticated()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInputChange = (e) => {
    console.log(e)
     if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit")
    if (!(username && password)) {
      setIsError(true)
      return
    }

    try {
      const response = await ArticleApi.authenticate(username, password)
      const { id, name, role } = response.data
      const authdata = window.btoa(username + ':' + password)
      const authenticatedUser = { id, name, role, authdata }

      Auth.userLogin(authenticatedUser)

      setUsername('')
      setPassword('')
      setIsError(false)
    } catch (error) {
      handleLogError(error)
      setIsError(true)
    }
  }
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
     handleSubmit(e)
    }
  }
  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

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
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form"  onKeyDown={_handleKeyDown}>
            <MDBox mb={2}>
              <MDInput type="username" label="username" fullWidth 
                name='username'
               value={username}
               onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth
                name='password'
               value={password}
               onChange={handleInputChange}
              />
            </MDBox>
         
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
        <MDBox mt={-2} mb={2} textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="error"
                  fontWeight="medium"
                  textGradient
                >{isError && <Message negative>The username or password provided are incorrect!</Message>}
                </MDTypography>
              </MDTypography>
        </MDBox>
      </Card>
    </BasicLayout>
  );
};

export default SignIn
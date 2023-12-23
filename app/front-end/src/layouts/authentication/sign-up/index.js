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

// react-router-dom components
import { Link } from "react-router-dom";
import { NavLink, Navigate } from 'react-router-dom'
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import React from 'react';
import axios from 'axios';
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { useAuth } from '../context/AuthContext'
import { ArticleApi } from '../misc/ArticleApi'
import { handleLogError } from '../misc/Helpers'
import { useState } from "react";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {

  const Auth = useAuth()
  const isLoggedIn = Auth.userIsAuthenticated()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = ( e) => {
    let name=e.target.name;
    let value=e.target.value;

    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!(username && password && name && email)) {
      setIsError(true)
      setErrorMessage('Please, inform all fields!')
      return
    }

    const user = { username, password, name, email }

    try {
      const response = await ArticleApi.signup(user)
      const { id, name, role, tags } = response.data
      const authdata = window.btoa(username + ':' + password)
      const authenticatedUser = { id, name, role, tags, authdata }

      Auth.userLogin(authenticatedUser)

      setUsername('')
      setPassword('')
      setName('')
      setEmail('')
      setIsError(false)
      setErrorMessage('')
    } catch (error) {
      handleLogError(error)
      if (error.response && error.response.data) {
        const errorData = error.response.data
        let errorMessage = 'Invalid fields'
        if (errorData.status === 409) {
          errorMessage = errorData.message
        } else if (errorData.status === 400) {
          errorMessage = errorData.errors[0].defaultMessage
        }
        setIsError(true)
        setErrorMessage(errorMessage)
      }
    }
  }
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
     handleSubmit(e)
    }
  }
  if (isLoggedIn) {
    return <Navigate to='/' />
  }


  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={1}>
              <MDInput type="text" label="Full Name" variant="standard" fullWidth
              name='name'
              value={name}
              onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Username" variant="standard" fullWidth
              name='username'
              value={username}
              onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="email" label="Email" variant="standard" fullWidth
               name='email'
               value={email}
               onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" label="Password" variant="standard" fullWidth 
               name='password'
               value={password}
               onChange={handleInputChange}
              />
            </MDBox>
            <MDBox mb={1}>
            <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="error"
                textGradient
              >
                {errorMessage}
              </MDTypography>
              </MDBox>
            
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;

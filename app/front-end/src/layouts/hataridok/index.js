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
import MuiLink from "@mui/material/Link";
import Link from "@mui/material/Link";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { getDeadlines } from "services/featureservice";

function Hataridok() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const renderInfoSB = (
    <MDSnackbar
      icon="notifications"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );
  const [deadlines, setDeadlines] = useState(getDeadlines());
    
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card >
              <MDBox p={2}>
                <MDTypography variant="h5">Határidők</MDTypography>
              </MDBox>
              {deadlines.map((item, index) => {
              return <MDBox item key={index} pt={4} px={2}>
                <Card >
                  <MDBox position="relative" borderRadius="lg" mt={-1} mx={2}>
                    <MDBox
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    height="100%"
                    position="relative"
                    zIndex={1}>
                  <MDTypography pl={2} variant="h5" type="date">{ new Date(parseInt(item.date)).toDateString()}</MDTypography>
                   </MDBox>
                    <MDBox
                      borderRadius="lg"
                      shadow="md"
                      width="100%"
                      height="100%"
                      position="absolute"
                      left={0}
                      top="3%"
                      sx={{
                        
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                      }}
                    />
                  </MDBox>
                  <MDBox p={3}>
                    <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
                      {item.name}
                    </MDTypography>
                    <MDBox mt={2} mb={3}>
                      <MDTypography variant="body2" component="p" color="text">
                        {item.information}
                      </MDTypography>
                    </MDBox>
                   
                  </MDBox>
                </Card>
              </MDBox> 
            })}
              
            </Card>
          </Grid>

     
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Hataridok;

// Billing page components

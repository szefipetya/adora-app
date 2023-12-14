// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import { Link } from "react-router-dom";

function Info() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}></Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to="/new_business">
                    <DefaultInfoCard
                      icon="add_home_work"
                      title="Új vállalkozás indítása"
                      description="Útmutató kezdő vállalkozóknak egy új vállakozás indításáhol, lépésről lépésre"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <Link to="">
                    <DefaultInfoCard icon="account_balance" title="example" description="Example" />
                  </Link>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}></Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}></Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Info;

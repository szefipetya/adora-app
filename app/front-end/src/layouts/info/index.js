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
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to="/business_law">
                    <DefaultInfoCard icon="gavel" title="Egyéni vállakozásokat érintő szabályok" description="Útmutató az egyéni vállakozásokat érintő szabályok" />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to="/business_tax">
                    <DefaultInfoCard icon="monetization_on" title="Egyéni vállakozások adózása" description="Útmutató az egyes adónemekhez" />
                  </Link>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <Link to="/new_business">
                    <DefaultInfoCard
                      icon="add_home_work"
                      title="Új vállalkozás indítása"
                      description="Útmutató kezdő vállalkozóknak egy új vállakozás indításáhol, lépésről lépésre"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
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

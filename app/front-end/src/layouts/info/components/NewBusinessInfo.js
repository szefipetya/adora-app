import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import NewBusinessInfoSteps from "../data/new_business_steps";
import NewBusinessInfoFormFilling from "../data/new_business_form_filling";

function NewBusinessInfo() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography variant="h6" color="text">
                  Rendelkeznie kell&nbsp;
                  <b style={{ color: "rgb(52, 71, 103)" }}>Ügyfélkapuval</b>, mivel az egyéni
                  vállalkozás bejelentése kizárólag az elektronikus űrlap kitöltésével és az
                  ügyfélkapun történő továbbítással intézhető el.
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Lépések
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <NewBusinessInfoSteps></NewBusinessInfoSteps>
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Űrlap kitöltési tudnivalók
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <NewBusinessInfoFormFilling></NewBusinessInfoFormFilling>
                </MDTypography>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewBusinessInfo;

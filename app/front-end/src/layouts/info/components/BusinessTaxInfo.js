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
import TaxAtalanyado from "../data/tax_atalanyado";
import TaxKata from "../data/tax_kata";
import TaxVallJovedelem from "../data/tax_valljovedelemado";

import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

function BusinessTaxInfo() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  Kisadózó állalkozások tételes adója (KATA)
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <TaxKata></TaxKata>
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
                  Vállalkozói jövedelemadó
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <TaxVallJovedelem></TaxVallJovedelem>
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
                  Átalányadó
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <TaxAtalanyado></TaxAtalanyado>
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
                  Átalányadó
                </MDTypography>
              </MDBox>
              <MDBox pt={3} lineHeight={0} p={6}>
                <MDTypography fontWeight="regular">
                  <MDTypography variant="subtitle2" color="text" mb={2}>
                    Adózervezéshez próbálja ki a kalkulátorunkat:
                  </MDTypography>
                  <MDBox borderRadius="lg" p={2} style={{ textAlign: "center" }}>
                    <Link to="/kalkulator">
                      <MDButton variant="gradient" color="secondary">
                        Adó kalkulátor
                      </MDButton>
                    </Link>
                  </MDBox>
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

export default BusinessTaxInfo;

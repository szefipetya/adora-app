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
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import ArticleCard from "examples/Cards/BlogCards/ArticleCard";
import parse from 'html-react-parser'


import { Link } from "react-router-dom";
import MDButton from "components/MDButton";

var showdown = require('showdown');
var converter = new showdown.Converter();

// Data
const articles = [
  { 'title': 'TITLE', 'lead': 'LEAD', 'tags': ['TAG1', 'TAG2', 'TAG3'], 'url': '/somewhere', 'image': 'https://bit.ly/3Hlw1MQ', 'content': '##CONTENT  \ncontent' },
  { 'title': 'TITLE', 'lead': 'LEAD', 'tags': ['TAG1', 'TAG2', 'TAG3'], 'url': '/somewhere', 'image': 'https://bit.ly/3Hlw1MQ', 'content': '##CONTENT  \ncontent' },
  { 'title': 'TITLE', 'lead': 'LEAD', 'tags': ['TAG1', 'TAG2', 'TAG3'], 'url': '/somewhere', 'image': 'https://bit.ly/3Hlw1MQ', 'content': '##CONTENT  \ncontent' },
];


function Hirek() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      Hirek
      <Grid>
        <MDBox py={3}>
          <Grid container spacing={3}>
            <Grid item>
              <MDBox>
                <Grid item>
                  <Link to={"/hirek"}>
                    <MDButton color="primary">{"Vissza"}</MDButton>
                  </Link>
                </Grid>
                <Card>
                  <MDBox position="relative" borderRadius="lg" mt={3}>
                    <MDBox
                      component="img"
                      src='https://bit.ly/3Hlw1MQ'
                      alt='alt'
                      borderRadius="lg"
                      shadow="md"
                      width="50%"
                      height="50%"
                      position="relative"
                      mx={3}
                    />
                  </MDBox>
                  <MDBox py={3} mx={3}>
                    {parse(converter.makeHtml("## Alma  \n körte"))}
                  </MDBox>
                </Card>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Grid>
      <Grid>
        <MDBox py={3}>
          <Grid container spacing={3}>
            {articles.map((item, index) => {
              return <Grid item key={index} xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ArticleCard
                    image={item["image"]}
                    title={item["title"]}
                    description={item["lead"]}
                    badges={item["tags"]}
                    action={{
                      type: "internal",
                      route: item["url"],
                      label: "Cikk megnyitása"
                    }}
                  />
                </MDBox>
              </Grid>
            })}
          </Grid>
        </MDBox>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}
export default Hirek;
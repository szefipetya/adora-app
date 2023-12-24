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
import { config } from "../../Constants";



var showdown = require('showdown');
var converter = new showdown.Converter();

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

// Data
console.log(config)
console.log(process.env);

const articles = httpGet(config.url.API_BASE_URL + '/api/articles');
function Hirek() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <MDBox py={3}>
          <Grid container spacing={3}
            justifyContent="left"
            alignItems="stretch">
            {articles.map((item, index) => {
              return <Grid item key={index} xs={12} md={6} lg={4}>
                <MDBox mb={1.5}>
                  <ArticleCard
                    image={"/images/" + item["image"]}
                    title={item["title"]}
                    description={item["lead"]}
                    badges={item["tags"].map((item, index) => {
                      return item['caption'];
                    })}
                    action={{
                      type: "internal",
                      route: "/articles/" + item["id"],
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
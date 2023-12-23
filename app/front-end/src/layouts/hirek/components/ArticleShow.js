import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import parse from 'html-react-parser'

var showdown = require('showdown');
var converter = new showdown.Converter();

import axios from "axios"
import React from "react";

import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

function ArticleShow({ title, article_fp }) {

  let links = [article_fp];

  let [article, setArticle] = React.useState("article");
  React.useEffect(() => {
    async function main() {
      const files = await Promise.all(
        links.map((article_fp) => fetch(article_fp).then((res) => res.text()))
      );
      setArticle(files[0]);
    }
    main();
  }, [setArticle]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3} mb={3}
            direction="row"
            justifyContent="center"
            alignItems="stretch">
            <Grid item xs={12} md={6} lg={3}>
              <Card align="center">
                <Link to="/hirek">
                  <MDButton variant="text" color="secondary" to="/hirek">
                    Vissza
                  </MDButton>
                </Link>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Card>
                <MDBox pt={3} lineHeight={0} p={6}>
                  <MDTypography fontWeight="regular">
                    {parse(converter.makeHtml(article))}
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

ArticleShow.propTypes = {
  title: PropTypes.string.isRequired,
  article_fp: PropTypes.string.isRequired,
};

export default ArticleShow;
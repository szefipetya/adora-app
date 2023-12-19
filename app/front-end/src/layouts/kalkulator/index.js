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

import { useEffect, useState, useRef } from "react";

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

import PropTypes from "prop-types"
import { calculateAtalany, calculateVSZJA, calculateKATA } from "./components/calculator";
import MDInput from "components/MDInput";

const calculatorDivStyle = {
  width: "100%",
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const inputContainerDivStlye = {
  display: "flex",
  justifyContent: "center"
}

const inputDivStyle = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "2rem",
  marginRight: "2rem"
}

const calculateButtonStyle = {
  width: "fit-content",
  marginTop: "1rem",
  marginBottom: "2rem"
}

const resultSpanStyle = {
  textAlign: "center",
  width: "100%"
}
function VSZJA({visible}) {

  const resultDivStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr"
  }

  const incomeInput = useRef(null);
  const costsInput = useRef(null);
  const entreprenurialPayInput = useRef(null);
  
  const [entrepreneurialTax, setEntrepreneurialTax] = useState("");
  const [dividentTax, setDividentTax] = useState("");
  const [socialTax, setSocialTax] = useState("");
  const [totalTax, setTotalTax] = useState("");

  const calculate = () => {
    const result = calculateVSZJA(
      incomeInput.current.children[0].children[0].value, 
      costsInput.current.children[0].children[0].value, 
      entreprenurialPayInput.current.children[0].children[0].value);
    setEntrepreneurialTax(result.entrepreneurialTax + " Ft");
    setDividentTax(result.dividentTax + " Ft");
    setSocialTax(result.socialTax + " Ft");
    setTotalTax(result.totalTax + " Ft");
  }

  if(visible){
    return(
      <div style={calculatorDivStyle}>
        <div style={inputContainerDivStlye}>
          <div style={inputDivStyle}>
            <label>Bevétel</label>
            <MDInput ref={incomeInput}/>
          </div>
          <div style={inputDivStyle}>
            <label>Kiadások</label>
            <MDInput ref={costsInput}/>
          </div>
          <div style={inputDivStyle}>
            <label>Vállalkozói Kivét</label>
            <MDInput ref={entreprenurialPayInput}/>
          </div>
        </div>
        <MDButton style={calculateButtonStyle} onClick={calculate}>Kiszámol</MDButton>
        <div style={resultDivStyle} >
          <span style={resultSpanStyle} >Vállalkozói Jövedelemadó</span>
          <span style={resultSpanStyle} >Osztalékadó</span>
          <span style={resultSpanStyle} >SZOCHO. Adó</span>
          <span style={resultSpanStyle} >Teljes Fizetett Adóösszeg</span>
          <span style={resultSpanStyle} >{entrepreneurialTax}</span>
          <span style={resultSpanStyle} >{dividentTax}</span>
          <span style={resultSpanStyle} >{socialTax}</span>
          <span style={resultSpanStyle} >{totalTax}</span>
        </div>
      </div>
    );
  }
  return null;
}

VSZJA.propTypes = {
  visible: PropTypes.bool
}

function Atalany({visible}) {
  const inputRef = useRef(null);

  const calculate = () => {
    
  }

  if(visible){
    return(
      <div>
        
      </div>
    );
  }
  return null;
}

Atalany.propTypes = {
  visible: PropTypes.bool
}

function KATA({visible}) {

  const resultDivStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr"
  }

  const kataMonths = useRef(null);
  const pausedMonths = useRef(null);
  const higherPayOption = useRef(null);
  const partTime = useRef(null);

  const [totalTax, setTotalTax] = useState("");

  const calculate = () => {
    const result = calculateKATA(
      kataMonths.current.children[0].children[0].value, 
      pausedMonths.current.children[0].children[0].value,
      higherPayOption.current.children[0].children[0].checked,
      partTime.current.children[0].children[0].checked );
    
    setTotalTax(result + " Ft");
  }

  if(visible){
    return(
      <div style={calculatorDivStyle}>
        <div style={inputContainerDivStlye}>
          <div style={inputDivStyle}>
            <label>KATA Hónapok Száma</label>
            <MDInput ref={kataMonths}/>
          </div>
          <div style={inputDivStyle}>
            <label>Szüneteltetett Hónapok Száma</label>
            <MDInput ref={pausedMonths}/>
          </div>
          <div style={inputDivStyle}>
            <label>Magasabb KATA Fizetés</label>
            <MDInput type="checkbox" ref={higherPayOption}/>
          </div>
          <div style={inputDivStyle}>
            <label>Részmunkaidő</label>
            <MDInput type="checkbox" ref={partTime}/>
          </div>
        </div>
        <MDButton style={calculateButtonStyle} onClick={calculate}>Kiszámol</MDButton>
        <div style={resultDivStyle} >
          <span style={resultSpanStyle} >Fizetett Adó</span>
          <span style={resultSpanStyle} >{totalTax}</span>
        </div>
      </div>
    );
  }
  return null;
}

KATA.propTypes = {
  visible: PropTypes.bool
}

function Kalkulator() {
  const gridStlye = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  }

  const gridCardStyle = {
    margin: "auto"
  }

  const dashboardStyle = {
    height: "83vh"
  }

  const [showVSZJA, setShowVSZJA] = useState(false);
  const [showAtalany, setShowAtalany] = useState(false);
  const [showKATA, setShowKATA] = useState(false);

  const showCalculator = (calcName) => {
    if(calcName === "Vállalkozói Személyi Jövedelem Adó Kalkulátor"){
      setShowVSZJA(true);
      setShowAtalany(false);
      setShowKATA(false);
    } else if(calcName === "Átalány Adó Kalkulátor") {
      setShowVSZJA(false);
      setShowAtalany(true);
      setShowKATA(false);
    } else if(calcName === "KATA Kalkulátor"){
      setShowVSZJA(false);
      setShowAtalany(false);
      setShowKATA(true);
    }
  }

  return (
    <DashboardLayout >
      <DashboardNavbar />
      <div style={dashboardStyle}>
        <div style={gridStlye}>
          <MDButton style={gridCardStyle} onClick={e => showCalculator(e.target.innerText)}>
            <MDBox pt={3} lineHeight={0} p={6}>
              <MDTypography variant="h6" color="text">
                Vállalkozói Személyi Jövedelem Adó Kalkulátor
              </MDTypography>
            </MDBox>
          </MDButton>
          <MDButton style={gridCardStyle} onClick={e => showCalculator(e.target.innerText)}>
            <MDBox pt={3} lineHeight={0} p={6}>
              <MDTypography variant="h6" color="text">
                Átalány Adó Kalkulátor
              </MDTypography>
            </MDBox>
          </MDButton>
          <MDButton style={gridCardStyle} onClick={e => showCalculator(e.target.innerText)}>
            <MDBox pt={3} lineHeight={0} p={6}>
              <MDTypography variant="h6" color="text">
                KATA Kalkulátor
              </MDTypography>
            </MDBox>
          </MDButton>
        </div>
        <VSZJA visible={showVSZJA}/>
        <Atalany visible={showAtalany}/>
        <KATA visible={showKATA}/>
      </div>
      <Footer/>
    </DashboardLayout>
  );
}

export default Kalkulator;

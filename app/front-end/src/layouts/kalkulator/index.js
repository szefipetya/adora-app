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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import PropTypes from "prop-types"
import { calculateAtalany, calculateVSZJA, calculateKATA } from "./components/calculator";
import MDInput from "components/MDInput";


import "./calculator.css";

function VSZJA({visible}) {

  const incomeInput = useRef(null);
  const costsInput = useRef(null);
  const entreprenurialPayInput = useRef(null);

  const [entrepreneurialTax, setEntrepreneurialTax] = useState("");
  const [dividentTax, setDividentTax] = useState("");
  const [VSZJASocialContributionTax, setVSZJASocialContributionTax] = useState("");
  const [totalVSZJATax, setTotalVSZJATax] = useState("");

  const calculate = () => {
    const result = calculateVSZJA(
      incomeInput.current.children[0].children[0].value, 
      costsInput.current.children[0].children[0].value, 
      entreprenurialPayInput.current.children[0].children[0].value);
    setEntrepreneurialTax(result.entrepreneurialTax + " Ft");
    setDividentTax(result.dividentTax + " Ft");
    setVSZJASocialContributionTax(result.socialTax + " Ft");
    setTotalVSZJATax(result.totalTax + " Ft");
  }

  useEffect(() => {
    if(!visible){
      setEntrepreneurialTax("");
      setDividentTax("");
      setVSZJASocialContributionTax("");
      setTotalVSZJATax("");
    }
  });

  if(visible){
    return(
      <div className="calculator-div">
        <div  className="input-container-div">
          <div className="input-div">
            <label>Bevétel</label>
            <MDInput ref={incomeInput}/>
          </div>
          <div className="input-div">
            <label>Kiadások</label>
            <MDInput ref={costsInput}/>
          </div>
          <div className="input-div">
            <label>Vállalkozói Kivét</label>
            <MDInput ref={entreprenurialPayInput}/>
          </div>
        </div>
        <MDButton className="calculate-button" onClick={calculate}>Kiszámol</MDButton>
        <div className="VSZJA-result-div" >
          <span>Vállalkozói Jövedelemadó</span>
          <span>Osztalékadó</span>
          <span>SZOCHO. Adó</span>
          <span>Teljes Fizetett Adóösszeg</span>
          <span>{entrepreneurialTax}</span>
          <span>{dividentTax}</span>
          <span>{VSZJASocialContributionTax}</span>
          <span>{totalVSZJATax}</span>

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
  const workType = useRef(null);
  const hasQualification = useRef(null);
  const costRatio = useRef(null);
  const income = useRef(null);
  const below25TaxCut = useRef(null);
  const below30MotherTaxCut = useRef(null);
  const personalTaxCut = useRef(null);
  const firstMarriageTaxCut = useRef(null);
  const NETAK = useRef(null);

  const [socialSecurityTax, setSocialSecurityTax] = useState("");
  const [atalanySocialContributionTax, setAtalanySocialContributionTax] = useState("");
  const [personalIncomeTax, setPersonalIncomeTax] = useState("");
  const [localBusinessTax, setLocalBusinessTax] = useState("");
  const [totalAtalanyTax, setTotalAtalanyTax] = useState("");

  const calculate = () => {
    const result = calculateAtalany(
      workType.current.value,
      hasQualification.current.checked,
      costRatio.current.value,
      income.current.children[0].children[0].value,
      below25TaxCut.current.checked,
      below30MotherTaxCut.current.checked,
      personalTaxCut.current.checked,
      firstMarriageTaxCut.current.checked,
      NETAK.current.checked
    );

    setSocialSecurityTax(result.socialSecurityTax + " Ft");
    setAtalanySocialContributionTax(result.socialContributionTax + " Ft");
    setPersonalIncomeTax(result.personalIncomeTax + " Ft");
    setLocalBusinessTax(result.localBusinessTax + " Ft");
    setTotalAtalanyTax(result.totalTax + " Ft");
  }

  useEffect(() => {
    if(!visible){
      setSocialSecurityTax("");
      setAtalanySocialContributionTax("");
      setPersonalIncomeTax("");
      setLocalBusinessTax("");
      setTotalAtalanyTax("");
    }
  });

  if(visible){
    return(
      <div className="calculator-div">
        <div className="input-container-div">
          <div>
            <div className="input-div dropdown-div">
              <label>Munkavégzés Típusa</label>
              <select ref={workType}>
                <option value="fulltime">Teljes Munkaidő</option>
                <option value="parttime">Részmunkaidő</option>
                <option value="retired">Nyugdíjazott</option>
              </select>
            </div>
            <div className="input-div checkbox-div">
              <label>Igényel-e Szakképesítést a Végzett Munka</label>
              <input type="checkbox" ref={hasQualification}/>
            </div>
            <div className="input-div dropdown-div">
              <label>Költséghányad Levonásának Mérete</label>
              <select ref={costRatio}>
                <option value="0.4">40%</option>
                <option value="0.8">80%</option>
                <option value="0.9">90%</option>
              </select>
            </div>
            <div className="input-div">
              <label>Bevétel</label>
              <MDInput ref={income}/>
            </div>
          </div>
          <div>
            <div className="input-div checkbox-div">
              <label>25 Év Alattiak Kedvezménye</label>
              <input type="checkbox" ref={below25TaxCut}/>
            </div>
            <div className="input-div checkbox-div">
            <label>30 Év Alatti Anyák Kedvezménye</label>
              <input type="checkbox" ref={below30MotherTaxCut}/>
            </div>
            <div className="input-div checkbox-div">
              <label>Személyi Kedvezmény</label>
              <input type="checkbox" ref={personalTaxCut}/>
            </div>
            <div className="input-div checkbox-div">
              <label>Első Házasok Kedvezménye</label>
              <input type="checkbox" ref={firstMarriageTaxCut}/>
            </div>
            <div className="input-div checkbox-div">
              <label>NÉTAK</label>
              <input type="checkbox" ref={NETAK}/>
            </div>
          </div>
        </div>
        <MDButton className="calculate-button" onClick={calculate}>Kiszámol</MDButton>
        <div className="atalany-result-div" >
          <span>TB Adó</span>
          <span>SZOCHO. Adó</span>
          <span>Személyi Jövedelm Adó</span>
          <span>Helyi Iparűzési Adó</span>
          <span>Teljes Fizetett Adóösszeg</span>
          <span>{socialSecurityTax}</span>
          <span>{atalanySocialContributionTax}</span>
          <span>{personalIncomeTax}</span>
          <span>{localBusinessTax}</span>
          <span>{totalAtalanyTax}</span>
        </div>
      </div>
    );
  }
  return null;
}

Atalany.propTypes = {
  visible: PropTypes.bool
}

function KATA({visible}) {

  const kataMonths = useRef(null);
  const pausedMonths = useRef(null);
  const higherPayOption = useRef(null);
  const partTime = useRef(null);

  const [totalKATATax, setTotalKATATax] = useState("");

  const calculate = () => {
    const result = calculateKATA(
      kataMonths.current.children[0].children[0].value, 
      pausedMonths.current.children[0].children[0].value,
      higherPayOption.current.checked,
      partTime.current.checked );
    setTotalKATATax(result + " Ft");
  }

  if(visible){
    return(
      <div className="calculator-div">
        <div className="input-container-div">
          <div className="input-div">
            <label>KATA Hónapok Száma</label>
            <MDInput ref={kataMonths}/>
          </div>
          <div className="input-div">
            <label>Szüneteltetett Hónapok Száma</label>
            <MDInput ref={pausedMonths}/>
          </div>
          <div className="input-div checkbox-div">
            <label>Magasabb KATA Fizetés</label>
            <input type="checkbox" ref={higherPayOption}/>
          </div>
          <div className="input-div checkbox-div">
            <label>Részmunkaidő</label>
            <input type="checkbox" ref={partTime}/>
          </div>
        </div>
        <MDButton className="calculate-button" onClick={calculate}>Kiszámol</MDButton>
        <div className="KATA-result-div" >
          <span>Fizetett Adó</span>
          <span>{totalKATATax}</span>
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

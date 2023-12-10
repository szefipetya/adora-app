import React from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useMaterialUIController } from "context";

function NewBusinessInfoSteps() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <div>
      <MDTypography variant="h6" color="text" mb={4}>
        Három lehetőség áll rendelkezésére a bejelentés elkészítésekor, azonban tartsa szem előtt,
        hogy bármely megoldást választja is, Önnek kell megadnia a szükséges adatokat.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={1}>
        Amennyiben a bejelentést Ön szeretné elkészíteni, ezeket a lépéseket kövesse:
      </MDTypography>
      <MDBox
        justifyContent="space-between"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        pl={6}
        mb={3}
        mt={1}
      >
        <MDTypography variant="button" color="text">
          <ul>
            <li style={{ margin: "6px 0" }}>
              a Közigazgatási és Elektronikus Közszolgáltatások Központi Hivatala honlapját kell
              felkeresnie a&nbsp;
              <a href="http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes">
                <u>http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes</u>
              </a>
              &nbsp;címen.
            </li>
            <li style={{ margin: "6px 0" }}>
              Itt kattintson a &quot;Nyomtatványok kitöltésének és beküldésének folyamata&quot;
              linkre, ez egy pdf oldalra navigálja Önt, ahol a &quot;Letöltés&quot; link
              segítségével az &quot;Általános nyomtatvány kitöltő alkalmazás&quot; letölthető.
            </li>
            <li style={{ margin: "6px 0" }}>
              A program letöltése után, térjen vissza a nyilvántartó linkjére:&nbsp;
              <a href="http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes">
                <u>http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes</u>
              </a>
              &nbsp;Itt először válassza ki a megyét, majd a várost, és a megjelenő teljes űrlapot
              töltse ki.
            </li>
          </ul>
        </MDTypography>
      </MDBox>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Második lehetőség, hogy felkeresi az illetékes kormányhivatalt, és személyesen kéri az űrlap
        kitöltését.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Harmadik lehetőségként pedig, felkeresheti könyvelőjét, és ő is elvégezheti Önnek az
        elektronikus űrlap kitöltését, amit Ön majd továbbít az ügyfélkapun keresztül.
      </MDTypography>
    </div>
  );
}

export default NewBusinessInfoSteps;

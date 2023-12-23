import React from "react";
import { Link } from "react-router-dom";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function NewBusinessInfoFormFilling() {
  return (
    <div>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A tevékenységi körök meghatározásához ki kell jelölni a főtevékenységet és az egyéb
        tervezett tevékenységeket. Fő tevékenységként csak egy választható, ami a legnagyobb
        bevételt ígéri. A tevékenységek jegyzéke megtalálható a&nbsp;
        <a href="http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes">
          <u>http://nyilvantarto.hu/hu/evig_megkezdes_bejelentes</u>
        </a>
        &nbsp;oldalon.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A székhely, telephely és fióktelep meghatározásához fontos megérteni, hogy a székhely a
        központi ügyintézés helye, a telephely a székhelytől eltérő, de azonos településen lévő
        hely, míg a fióktelep egy másik városban vagy településen található telephely.<br></br>
        <i>(Mindegyik telephely után iparűzési adót kell fizetni, megosztva.)</i>
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Az egyéni vállalkozónak két adónemben kell adózási módot választania: az általános forgalmi
        adóban és a személyi jövedelemadóban.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Az adózási mód rossz kiválasztása komoly hatással lehet vállalkozására, mivel adózási módot
        csak egy évben egyszer van lehetőség módosítani. Tehát ha még nincs vállalkozási
        tapasztalata és megteheti, kérje könyvelője segítségét ebben a témában!
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Az adózási módokról bővebb tájékoztatót itt talál:
      </MDTypography>
      <MDBox borderRadius="lg" p={2} style={{ textAlign: "center" }}>
        <Link to="/business_tax">
          <MDButton variant="gradient" color="secondary">
            Adózási módok
          </MDButton>
        </Link>
      </MDBox>
    </div>
  );
}

export default NewBusinessInfoFormFilling;

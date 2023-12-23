import React from "react";
import { Link } from "react-router-dom";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function BusinessLaw() {
    return (
        <div>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az <b>egyéni vállalkozókra vonatkozó szabályok</b> számos
                fontos tényezőt tartalmaznak, amelyek segítik a
                vállalkozókat tevékenységük törvényes és hatékony
                kibontakoztatásában.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Először is, egy <b>egyéni vállalkozó többféle
                    tevékenységet</b> is végezhet, és ezeket akár
                több telephelyen vagy fióktelepen is folytathatja.
                Fontos azonban, hogy bizonyos gazdasági tevékenységek
                csak akkor kezdhetők meg, illetve folytathatók, ha a
                vállalkozó rendelkezik a szükséges <b>hatósági
                    engedéllyel</b>.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az <b>alkalmazottak felvétele is lehetőség</b> a
                vállalkozóknak, és ebben az esetben alkalmazhatnak
                közreműködőket, bedolgozókat, segítő családtagokat,
                valamint szakiskolai és szakközépiskolai tanulókat is.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Azonban, ha a vállalkozó olyan tevékenységet szeretne
                folytatni, amelyhez <b>képesítés szükséges</b>, akkor
                csak akkor teheti meg, ha ő maga, vagy legalább egy
                alkalmazottja rendelkezik a megfelelő képesítéssel.
                Ez vonatkozik akkor is, ha az egyéni vállalkozó személyesen
                nem rendelkezik a képesítéssel, de alkalmazottja között
                van olyan személy, aki rendelkezik vele.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Ha az egyéni vállalkozónak több telephelye vagy
                fióktelepe van, mindenhol be kell tartani a <b>képesítési
                    követelményeket</b>. Emellett minden üzleti
                dokumentációnak tartalmaznia kell az <b>egyéni
                    vállalkozó</b> megjelölést, vagy annak
                rövidítését, valamint a <b>nyilvántartási
                    számot</b>.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az egyéni vállalkozó halála esetén a <b>jogutódlás
                    és az öröklés szabályai</b> érvényesek. Az özvegy
                vagy az örökös folytathatja az egyéni vállalkozói
                tevékenységet, ha bejelentést tesz a hatóságnak,
                és az ügyek intézésében szükség esetén <b>jogi
                    képviselője segít</b>.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Ezen szabályok betartása nélkülözhetetlen az egyéni
                vállalkozás zökkenőmentes működéséhez és a törvényes
                előírásoknak való megfeleléshez.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az adózás menetéről bővebb tájékoztatót itt talál:
            </MDTypography>
            <MDBox borderRadius="lg" p={2} style={{ textAlign: "center" }}>
                <Link to="/business_tax">
                    <MDButton variant="gradient" color="secondary">
                        Adózási módok
                    </MDButton>
                </Link>
            </MDBox>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                A egyéni vállalkozás indításához szükséges lépésekről itt olvashat:
            </MDTypography>
            <MDBox borderRadius="lg" p={2} style={{ textAlign: "center" }}>
                <Link to="/new_business">
                    <MDButton variant="gradient" color="secondary">
                        Egyéni vállalkozás indítása
                    </MDButton>
                </Link>
            </MDBox>
        </div>
    );
}

export default BusinessLaw;

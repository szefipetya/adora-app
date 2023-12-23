import React from "react";
import { Link } from "react-router-dom";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function TaxAtalanyado() {
    return (
        <div>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az <b>átalányadózás</b> egy olyan adózási lehetőség, amely
                vállalkozók számára elérhető, feltéve, hogy éves nettó
                bevétele nem haladja meg a <b>15 millió Ft-ot (100 millió
                    Ft kiskereskedelmi tevékenység esetén)</b>. Az év közbeni
                induló vállalkozók esetében a bevételi határt <b>naptári
                    napokra arányosítják</b>.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Ezen adózási módszer esetén nincs szükség a költségek számláinak
                gyűjtésére, helyette az ún. <b>átalányköltség</b> számolható
                el. Ez a költséghányad általában <b>40%</b>, de
                főfoglalkozás esetén <b>80%, 87% vagy 93% is lehet</b>,
                attól függően, milyen tevékenységet folytat a vállalkozó.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Az adófizetések részletei változnak a bevétel és a vállalkozói
                státusz függvényében. Főfoglalkozású vállalkozóknak havonta
                legalább a <b>minimálbér 100%-a után 18,5% társadalombiztosítási
                    járulékot és 112,5%-a után 15,5% szociális hozzájárulási adót</b> kell
                fizetni, ami minimum <b>57,860 Ft</b> havonta.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                Ha a bevétel meghaladja a minimálbért, akkor az elért bevétel
                <b>60%-a után további adók fizetendők</b>, mint például
                <b>15% személyi jövedelemadó</b>.
            </MDTypography>
            <MDTypography variant="subtitle2" color="text" mb={2}>
                A <b>költséghányad</b> és az
                <b>éves nettó árbevétel</b> függvényében az átalányadózás
                választóinak nagyjából a bevétel <b>69,16%-a marad a
                    zsebében</b>. Fontos megjegyezni,
                hogy nyugdíjas átalányadózóknál alkalmazott költséghányadok
                eltérőek lehetnek.
            </MDTypography>
        </div>
    );
}

export default TaxAtalanyado;

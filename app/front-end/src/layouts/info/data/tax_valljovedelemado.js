import React from "react";
import { Link } from "react-router-dom";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function TaxVallJovedelem() {
  return (
    <div>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A <b>vállalkozói jövedelemadó</b> egy összetett rendszer, amely
        figyelembe vesz számos tényezőt a fizetendő adók és járulékok
        meghatározásában. Elsődlegesen a vállalkozói kivét fontos, mely
        lehet nulla is, de adófizetési kötelezettség keletkezik.
        Főfoglalkozás esetén havonta minimum <b>57.859 Ft adó és járulék
          fizetendő</b>, mely szakképzettségigénytől függ. Mellékállású
        vagy nyugdíjas vállalkozóknál eltérő szabályok alkalmazandók.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A vállalkozói jövedelem kiszámítása során a bevételekből levonjuk
        a költségeket, figyelembe véve különböző kedvezményeket is. A
        vállalkozói kivét hiányában is adókötelezettség keletkezik az ún.
        <b>minimum járulékalap</b> után. Pozitív vállalkozói jövedelem
        esetén a fizetendő adó (SZJA) <b>9%</b>, míg nulla vagy negatív
        jövedelemnél a bevétel <b>2%-a</b> alapján kell adózni.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A <b>vállalkozói osztalékalap</b> a jövedelemből levonva a
        fizetett adót, és ezen a részen <b>15% SZJA-t</b> és <b>15,5%
          szociális hozzájárulási adót</b> kell fizetni. Az iparűzési
        adó számításához az adóalapot veszik alapul, ahol az adó
        alapvetően az adóalap <b>2%-a</b>, de választható egy kedvezőbb
        adómegállapítási módszer is.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Összességében, ha egy vállalkozó főállású és éves árbevétele
        <b>12 millió Ft</b>, a nettó bevételnek a <b>68,74%-a</b> marad a
        vállalkozó számára, figyelembe véve a fizetendő adókat és
        járulékokat. Fontos azonban, hogy az adószabályok idővel
        változhatnak, ezért ajánlott szakértői tanácsot kérni a
        legfrissebb információkért.
      </MDTypography>
    </div>
  );
}

export default TaxVallJovedelem;

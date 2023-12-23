import React from "react";
import { Link } from "react-router-dom";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBox from "components/MDBox";

function TaxKata() {
  return (
    <div>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A <b>KATA (Kisadózó vállalkozások tételes adója)</b> adózási
        forma Magyarországon hosszú ideig népszerű volt
        a vállalkozók körében, mivel alacsony és előre kalkulálható
        adóteherrel járt, miközben lehetővé tette a magas jövedelem
        elérését. Azonban a közelmúltban elfogadott törvények
        változásokat hoztak a KATA adózási rendszerében, ami
        befolyásolhatja annak vonzerejét.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A legfontosabb változások közé tartozik az, hogy a kifizető
        (más vállalkozó megbízó) esetén, ha a KATA-s adózónak évente
        <b>3 millió forintnál többet fizetnek ki</b>, akkor a 3 millió
        forintot meghaladó rész után a kifizetőt <b>40% plusz adó
          terheli</b>.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        A <b>KATA adózási forma</b> főbb szabályai között szerepel,
        hogy nincs maximalizált bevételi határ, de évi <b>12 millió
          forintot meghaladó bevétel</b> esetén a 12 millió forint
        feletti rész után <b>40% adót kell fizetni</b>. Az iparűzési
        adó évi <b>50 000 forint</b>, amit két részletben kell megfizetni.
        Fontos, hogy a KATA adóalanyiság megkezdésétől számított
        <b>45 napon belül jelezni kell</b> az önkormányzat felé,
        különben az általános szabályok szerint kell adózni.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Egy általános példával élve, egy <b>főfoglalkozású, havonta
          50 000 forint KATA adót fizető kisadózónak éves 12 millió
          forint bevétel</b> esetén adózás után <b>95% maradhat a
            zsebében</b>.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Az adóhatóság külön figyelmet fordít arra, hogy a <b>KATA-s
          vállalkozások ne próbálják munkaviszonynak álcázni
          tevékenységüket</b>. Számos szempontot figyelembe vesznek,
        például azt, hogy a kisadózó a tevékenységet nem kizárólag
        személyesen végezte-e, vagy hogy az éves bevétel legalább
        <b>50% -a nem az adatszolgáltatásra köteles személytől
          származott-e</b>.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Az adatszolgáltatásra kötelezett vállalkozások olyan vállalkozások,
        amelyek <b>1 millió forintot meghaladó összegben fogadnak
          el számlát</b> egy adott évben a kisadózótól. Ebben az esetben
        az adózási szabályok is változhatnak.
      </MDTypography>
      <MDTypography variant="subtitle2" color="text" mb={2}>
        Fontos hangsúlyozni, hogy az adózási rendszer változhat, és a
        vállalkozóknak mindig naprakésznek kell lenniük a legfrissebb
        törvényi előírásokkal kapcsolatban.
      </MDTypography>
    </div>
  );
}

export default TaxKata;

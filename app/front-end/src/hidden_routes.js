// @mui icons
import Icon from "@mui/material/Icon";

import NewBusinessInfo from "layouts/info/components/NewBusinessInfo";
import BusinessTaxInfo from "layouts/info/components/BusinessTaxInfo";
import BusinessLawInfo from "layouts/info/components/BusinessLawInfo";

const hidden_routes = [
  {
    type: "collapse",
    name: "Új vállalkozás indítása",
    key: "new_business",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/new_business",
    component: <NewBusinessInfo />,
  },
  {
    type: "collapse",
    name: "Egyéni vállakozások adózása",
    key: "business_tax",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/business_tax",
    component: <BusinessTaxInfo />,
  },
  {
    type: "collapse",
    name: "Egyéni vállakozásokat érintő szabályok",
    key: "business_law",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/business_law",
    component: <BusinessLawInfo />,
  },
];

export default hidden_routes;

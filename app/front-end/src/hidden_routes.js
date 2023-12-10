// @mui icons
import Icon from "@mui/material/Icon";

import NewBusinessInfo from "layouts/info/components/NewBusinessInfo";

const hidden_routes = [
  {
    type: "collapse",
    name: "Új vállalkozás indítása",
    key: "new_business",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/new_business",
    component: <NewBusinessInfo />,
  },
];

export default hidden_routes;

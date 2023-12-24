// @mui icons
import Icon from "@mui/material/Icon";

import NewBusinessInfo from "layouts/info/components/NewBusinessInfo";
import BusinessTaxInfo from "layouts/info/components/BusinessTaxInfo";
import BusinessLawInfo from "layouts/info/components/BusinessLawInfo";
import ArticleShow from "layouts/hirek/components/ArticleShow";
import { config } from "Constants";

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}
console.log("processenv"+process.env)
const articles = httpGet(config.url.API_BASE_URL+'/api/articles');

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
  {
    type: "collapse",
    name: "Egyéni vállakozásokat érintő szabályok",
    key: "articles",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/articles/01",
    component: <BusinessLawInfo />,
  },
];

for (let index = 0; index < articles.length; index++) {
  const article = articles[index];
  hidden_routes.push({
    type: "collapse",
    key: article["id"],
    icon: <Icon fontSize="small">person</Icon>,
    route: "/articles/" + article["id"],
    component: <ArticleShow title={article["title"]} article_fp={`${article["fname"]}`}/>,
  })
}

export default hidden_routes;

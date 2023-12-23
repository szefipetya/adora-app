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

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { getTags } from "services/featureservice";
import { getUserInfo } from "services/featureservice";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [userInfo, setuserInfo] = useState( getUserInfo());
  const [localTags, setLocalTags] = useState( updateTags());

  const [init, setInit] = useState( false);
  console.log(localTags)
  console.log(userInfo)
  function userHasTag(tag){
    for(let i=0;i<userInfo.tags.length;i++){
      if(userInfo.tags[i].id==tag.id) return true;
    }
    return false;
  }
  
  function getTagById(id){
    return localTags.find((tag)=>tag.id===id)
  }

  function tagChanged(id){
   
      let localtagsCopy=localTags.map(tag=>{if(tag.id==id) tag.checked=! tag.checked;return tag})
      console.log(localtagsCopy)

      setLocalTags(localtagsCopy);
  }
  function updateTags(){
    
      let localtagsCopy = getTags();//JSON.parse(JSON.stringify(localTags));

        for(let i=0;i<localtagsCopy.length;i++){
        if(userHasTag(localtagsCopy[i])){
          localtagsCopy[i].checked=true;
        }else localtagsCopy[i].checked=false;
      }
      //setLocalTags(localtagsCopy);
      return localtagsCopy;
    
    } 
    
  
 
  return (
    <Card sx={{ boxShadow: "none" }}>
      <MDBox pl={2}>
        <MDTypography variant="h3" fontWeight="medium" textTransform="capitalize">
          Beállítások
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
          <MDBox mt={3}>
            <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
              E-mail
            </MDTypography>
          </MDBox>
          <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <MDBox mt={0.5}>
              <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
            </MDBox>
            <MDBox width="80%" ml={0.5}>
              <MDTypography variant="button" fontWeight="regular" color="text">
              Szeretnék e-maileket kapni
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <MDBox mt={0.5}>
              <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
            </MDBox>
            <MDBox width="80%" ml={0.5}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                Szeretnék cikkeket kapni e-mailben
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
            <MDBox mt={0.5}>
              <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
            </MDBox>
            <MDBox width="80%" ml={0.5}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                Szeretnék határidős e-maileket kapni
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
            Témák
          </MDTypography>
          {localTags.map(function(tag, ind){
            return <MDBox  obj={tag} key={ind} display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                    <MDBox mt={0.5}>
                      <Switch checked={tag.checked} onChange={() => tagChanged(tag.id)} />
                    </MDBox>
                    <MDBox width="80%" ml={0.5}>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                      {tag.caption}
                      </MDTypography>
                    </MDBox>
                  </MDBox>
          })}
        
        
      </MDBox>
    </Card>
  );
}

export default PlatformSettings;

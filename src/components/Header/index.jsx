import React, { useState } from 'react';
import * as Styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  // const [about, setAbout] = useState(false);

  function goHome(){
    navigate("/")
  }

  function goProjects(){
    navigate("/projects")
  }

  function goRecommendations(){
    navigate("/recommendations")
  }
  
  function goContacts(){
    navigate("/contacts")
  }

  // function aboutOn(){
  //   setAbout(true);
  // }

return (
    <Styles.Container>
      <Styles.FirstContainer>
        <Styles.HomeButton onClick={goHome}>
         HOME
        </Styles.HomeButton>
        <Styles.ProjectsButton type="button" onClick={goProjects}> 
          PROJECTS
        </Styles.ProjectsButton>
        <Styles.RecommendationsButton type="button" onClick={goRecommendations}>
          RECOMMENDATIONS
        </Styles.RecommendationsButton>
        <Styles.ContactsButton type="button" onClick={goContacts}>
          CONTACTS
        </Styles.ContactsButton>
      </Styles.FirstContainer>
      {location.pathname === "/" && (
        <Styles.LastContainer>
          <Styles.AboutButton type="button">
            ABOUT
          </Styles.AboutButton>
        </Styles.LastContainer>  
      )}      
    </Styles.Container>
  )}
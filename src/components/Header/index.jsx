import React, { useState } from 'react';
import * as Styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandleTransformed } from '../../storage/slice'

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

 function handleClick(){
    dispatch(HandleTransformed())
 }

return (
    <Styles.Container>
      <Styles.FirstContainer>
        <Styles.HomeButton onClick={goHome} local={location.pathname}>
         HOME
        </Styles.HomeButton>
        <Styles.ProjectsButton type="button" onClick={goProjects} local={location.pathname}> 
          PROJECTS
        </Styles.ProjectsButton>
        <Styles.RecommendationsButton type="button" onClick={goRecommendations} local={location.pathname}>
          RECOMMENDATIONS
        </Styles.RecommendationsButton>
        <Styles.ContactsButton type="button" onClick={goContacts} local={location.pathname}>
          CONTACTS
        </Styles.ContactsButton>
      </Styles.FirstContainer>
      {location.pathname === "/" && (
        <Styles.LastContainer>
          <Styles.AboutButton type="button" onClick={handleClick}>
            ABOUT
          </Styles.AboutButton>
        </Styles.LastContainer>  
      )}      
    </Styles.Container>
  )}
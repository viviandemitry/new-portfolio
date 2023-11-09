import React, { useState } from 'react';
import * as Styles from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandleTransformed } from '../../storage/slice'
import { useSelector} from 'react-redux';

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isTransformed = useSelector((state) => state.isTransformed);


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
    <Styles.Container local={location.pathname}>
      <Styles.FirstContainer local={location.pathname}>
        <Styles.NavButton onClick={goHome} local={location.pathname}>
         HOME
        </Styles.NavButton>
        <Styles.NavButton type="button" onClick={goProjects} local={location.pathname}> 
          PROJECTS
        </Styles.NavButton>
        <Styles.NavButton type="button" onClick={goRecommendations} local={location.pathname}>
          RECOMMENDATIONS
        </Styles.NavButton>
        <Styles.NavButton type="button" onClick={goContacts} local={location.pathname}>
          CONTACTS
        </Styles.NavButton>
      </Styles.FirstContainer>
      {location.pathname === "/" && (
        <Styles.LastContainer>
          { !isTransformed && 
          <Styles.AboutButton type="button" onClick={handleClick}>
            ABOUT
          </Styles.AboutButton>
          }
          { isTransformed && 
          <Styles.AboutButton type="button" onClick={handleClick}>
            HIDE
          </Styles.AboutButton>
          }
        </Styles.LastContainer>  
      )}      
    </Styles.Container>
  )}
import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';
import Email from '../../assets/icons/email.svg';


export default function Contacts() {
  return (
    <Styles.Container>
      <Header />
      
      <Styles.Title>
        LET'S <br />
        CONNECT
      </Styles.Title>
      <Styles.Icons>
      <img src={Linkedin} alt="Linkedin" />
      <img src={Github} alt="Github" />
      <img src={Email} alt="Email" />
      </Styles.Icons>
    </Styles.Container>
  )
}
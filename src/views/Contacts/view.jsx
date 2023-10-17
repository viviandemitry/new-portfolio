import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github.svg';
import Resume from '../../assets/icons/download-resume.svg';
import Email from '../../components/Email';



export default function Contacts() {

  
  return (
    <Styles.Container>
      <Header />
      <Styles.ContainerLeft>
        <Styles.Title>
          LET'S<br />
          CONNECT
        </Styles.Title>
        <Styles.Icons>
          <Styles.Link href="https://www.linkedin.com/in/viviandemitry/" target="">
            <img src={Linkedin} alt="Linkedin" />
          </Styles.Link>
          <Styles.Link href="https://github.com/viviandemitry" target="">
            <img src={Github} alt="Github" />
          </Styles.Link>
          <Styles.Link href="" target="">
            <Email />
          </Styles.Link>
        </Styles.Icons>
      </Styles.ContainerLeft>
      <Styles.ContainerRight>
        <Styles.Link href="https://drive.google.com/file/d/1PHgDTdT1GH9L4iYYjR8ApRVOwT91kpWQ/view?usp=drive_link" target="">
          <img src={Resume} alt="Resume" />
          <Styles.RightText>
            Check <br /> my CV! 
          </Styles.RightText>
        </Styles.Link>
      </Styles.ContainerRight>
    </Styles.Container>
  )
}
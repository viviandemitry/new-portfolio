import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import Figma from '../../assets/icons/figma.svg';
import Html from '../../assets/icons/html.svg';
import ReactImg from '../../assets/icons/react.svg';
import Javascript from '../../assets/icons/javascript.svg';
import Git from '../../assets/icons/git.svg';
import Css from '../../assets/icons/css3.svg';
import RobotWeb from '../../assets/images/robot-website.PNG';


export default function Projects() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Icons>
      <img src={Figma} alt="Figma" />
      <img src={Html} alt="Html" />
      <img src={ReactImg} alt="React" />
      <img src={Javascript} alt="Javascript" />
      <img src={Git} alt="Git" />
      <img src={Css} alt="Css" />
      </Styles.Icons>
      <Styles.ContainerBottom>
        <Styles.Title>
        PROJECTS
        </Styles.Title>
        <Styles.ContainerProjects>
          <Styles.Link href="https://robot-blog.vercel.app/" target="_blank">
              <Styles.ProjectImg>
              <img src={RobotWeb} alt="Robot Website" />
              </Styles.ProjectImg>
              <Styles.ProjectTitle>
                Robot Website
              </Styles.ProjectTitle>
          </Styles.Link>
          <Styles.Link href="https://robot-blog.vercel.app/" target="_blank">
              <Styles.ProjectImg>
              <img src={RobotWeb} alt="Robot Website" />
              </Styles.ProjectImg>
              <Styles.ProjectTitle>
                Robot Website
              </Styles.ProjectTitle>
          </Styles.Link>
          <Styles.Link href="https://robot-blog.vercel.app/" target="_blank">
              <Styles.ProjectImg>
              <img src={RobotWeb} alt="Robot Website" />
              </Styles.ProjectImg>
              <Styles.ProjectTitle>
                Robot Website
              </Styles.ProjectTitle>
          </Styles.Link>
        </Styles.ContainerProjects>
      </Styles.ContainerBottom> 
    </Styles.Container>
  )
}
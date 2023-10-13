import React from 'react'
import * as Styles from './styles';
import Header from '../Header'
import Photo from '../../assets/images/photo_home_page.png';
import { useSelector} from 'react-redux';

export default function About() {

  const isTransformed = useSelector((state) => state.isTransformed);

  console.log(isTransformed);
    return (
      <Styles.Container>
            <Styles.TitleAbout>
              About me
            </Styles.TitleAbout>
            <Styles.AboutText>
            I'm a Front End Developer Lorem ipsum dolor <br />
            I'm a Front End Developer Lorem ipsum dolor <br />
            I'm a Front End Developer Lorem ipsum dolor <br />
            </Styles.AboutText> 
      </Styles.Container>
    )
  }
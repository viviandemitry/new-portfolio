import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import Photo from '../../assets/images/photo_home_page.png';
import { useSelector} from 'react-redux';

export default function About() {

  const isTransformed = useSelector((state) => state.isTransformed);


    return (
      <Styles.Container>
        <Header />y
          <Styles.TextContainer>
              <Styles.Title>
               Hello!<br/>
               I’m
              <Styles.TextColor>
               Vivian 
              </Styles.TextColor>
              { !isTransformed && 
              <Styles.TextHiden>
               De Mitry
              </Styles.TextHiden>
              }
              </Styles.Title>
              <Styles.Text>
               I'm a Front End Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
              </Styles.Text>
          </Styles.TextContainer>
          <Styles.ImgContainer>
            <img src={Photo} alt="Photo_home" />
          </Styles.ImgContainer>
      </Styles.Container>
    )
  }
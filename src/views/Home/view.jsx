import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import About from '../../components/About'
import Photo from '../../assets/images/photo_home_page.png';
import { useSelector} from 'react-redux';
import Vector from '../../assets/icons/vector.svg';
import VectorClosed from '../../assets/icons/vector-closed.svg';

export default function Home() {

  const isTransformed = useSelector((state) => state.isTransformed);

  return (
    <Styles.Container>
      <Header />
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
            I'm an Engineer, with experience over 4 years managing and developing projects. In 2020, I started my career transition to the software engineering field, and nowadays, my top skills involve developing responsive pages, with clean code and creativity.
            </Styles.Text>
        </Styles.TextContainer>
        { isTransformed ? <About /> :
        <Styles.ImgContainer>
          <img src={Photo} alt="Photo_home" />
        </Styles.ImgContainer>
        }
        { isTransformed &&
        <Styles.TextABout>
          <Styles.TitleAbout>
            About me
          </Styles.TitleAbout>
          <Styles.AboutText>
            <Styles.FirstTextLine> <img src={Vector} alt="Square" /> I'm 28 brazilian woman, passonate about travelling and animals. Nowadays I've been living in Copenhagen, Denmark, with my husband and our dog. <img src={VectorClosed} alt="Vector Closed" /><br /></Styles.FirstTextLine>
            <Styles.SecondTextLine> <img src={Vector} alt="Square" /> I am a communicative person that always loved to work with projects and people, lately I found design and technology as things I love to deal with and then decided to change my career goal.  <img src={VectorClosed} alt="Vector Closed" /><br /></Styles.SecondTextLine>
            <Styles.ThirdTextLine> <img src={Vector} alt="Square" /> I'm a Front End Developer Lorem ipsum dolor I'm a Front End Developer Lorem ipsum dolor I'm a Front End Developer Lorem ipsum dolor I' <img src={VectorClosed} alt="Vector Closed" /><br /></Styles.ThirdTextLine>
          </Styles.AboutText> 
        </Styles.TextABout>
        }
    </Styles.Container>
  )
}
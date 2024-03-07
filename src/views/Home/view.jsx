import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import About from '../../components/About'
import Photo from '../../assets/images/polaroid-home.png';
import PolaroidOne from '../../assets/images/polaroid-form.png';
import PolaroidTwo from '../../assets/images/polaroid-nz.png';
import PolaroidThree from '../../assets/images/polaroid-denmark.png';
import { useSelector} from 'react-redux';

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
            I am an engineer with over three years of experience in project management and development. In 2023, I embarked on a career transition into the field of software engineering. Presently, my primary skills revolve around the development of responsive web pages, emphasizing clean and creative coding practices.
            </Styles.Text>
        </Styles.TextContainer>
        { isTransformed ? <About /> :
        <Styles.ImgContainer>
          <img src={Photo} alt="Photo_home" />
        </Styles.ImgContainer>
        }
    </Styles.Container>
  )
}
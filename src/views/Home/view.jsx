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
            Apart from the fact that I am an engineer and am specializing in
            software engineering through an MBA, I am a Brazilian with a great sense of humor,
            who loves planning, curious and eager to learn everything I can and need,passionate about optimizing processes, incredibly flexible and can adapt to different environments.
            Last but not least, I have the talent to create connections and find
            solutions within my network.
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
import React from 'react'
import * as Styles from './styles';
import PolaroidOne from '../../assets/images/polaroid-form.png';
import PolaroidTwo from '../../assets/images/polaroid-nz.png';
import PolaroidThree from '../../assets/images/polaroid-denmark.png';
import { useSelector} from 'react-redux';

export default function About() {

  const isTransformed = useSelector((state) => state.isTransformed);

  console.log(isTransformed);
    return (
      <Styles.Container>
        <Styles.TextABout>
          <Styles.TitleAbout>
            About me
          </Styles.TitleAbout>
          <Styles.AboutText>
            <Styles.ContentTextsLeft>
              <img src={PolaroidOne} alt="Graduation photo" />
              <Styles.FirstTextLine> I hold a Bachelor's degree in Civil Engineering from FEI, an esteemed institution located in Brazil. Currently, I am pursuing a Master of Business Administration (MBA) with a specialization in Software Engineering, which I am on track to complete by the year 2025.</Styles.FirstTextLine>
            </Styles.ContentTextsLeft>
            <Styles.ContentTexts>
              <Styles.SecondTextLine> I resided in New Zealand for a year and a half, during which time I pursued English language studies and gained employment in customer service roles. This experience allowed me to significantly enhance my English proficiency and provided me with a remarkable life experience.</Styles.SecondTextLine>
              <img src={PolaroidTwo} alt="Nz trip" />
            </Styles.ContentTexts>
            <Styles.ContentTextsLeft>
              <img src={PolaroidThree} alt="Denmark life" /> 
              <Styles.ThirdTextLine> I have recently relocated to Copenhagen with my husband and our dog. My husband is engaged in a significant project with Novo Nordisk, and I am actively seeking a rewarding software engineering position that enables me to contribute my energy and continue enhancing my skills.</Styles.ThirdTextLine>
            </Styles.ContentTextsLeft>
          </Styles.AboutText> 
        </Styles.TextABout>
      </Styles.Container>
    )
  }
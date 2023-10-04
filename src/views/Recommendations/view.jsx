import React from 'react'
import * as Styles from './styles';
import Header from '../../components/Header'
import Cesar from '../../assets/images/cesar-photo.jpg';
import Fernanda from '../../assets/images/fernanda-photo.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Recommendations() {
  return (
    <Styles.Container>
      <Header />
      <Styles.MainContainer>
        <Styles.Title>
          RECOMMENDATIONS
        </Styles.Title>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Styles.ContentContainer>
                <Styles.ImgContainer>
                  <img src={Cesar} alt="Cesar_photo" />
                  <Styles.ImgText>
                    César Marcelo - IT Manager
                  </Styles.ImgText>
                </Styles.ImgContainer>
                <Styles.TextContainer>
                Vivian's is an excellent person to work with. Eager to learn and an excellent developer. She's also a very good team player, always helping others and exposing her ideas.
                I really appreciated being her manager and I definitely recommend her.</Styles.TextContainer>
              </Styles.ContentContainer>
          </SwiperSlide>
          <SwiperSlide>
            <Styles.ContentContainer>
              <Styles.ImgContainer>
                  <img src={Fernanda} alt="Fernanda_photo" />
                  <Styles.ImgText>
                    Fernanda Caires - Project Manager
                  </Styles.ImgText>
                </Styles.ImgContainer>
                <Styles.TextContainer>
                Vívian is a very dedicated and committed professional. She learns everything very quickly and in a short time took over the management of projects in the area. She has great development potential and great interest in learning new things! Loves a challenge, and easily establishes trusting relationships
                </Styles.TextContainer>
            </Styles.ContentContainer>
          </SwiperSlide>
        </Swiper>
      </Styles.MainContainer>
    </Styles.Container>
  )
}
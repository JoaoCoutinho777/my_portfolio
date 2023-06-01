import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring React Front-End Developer fueled by curiosity, creativity, and a strong desire to make a mark in the digital world. While I may be new to the field, my passion for coding and determination to learn sets me apart.
        With a fresh perspective and an open mind, I bring a unique blend of enthusiasm and adaptability to every project. I thrive on challenges and embrace the opportunity to grow alongside evolving technologies, including React's dynamic ecosystem. I'm excited to apply my skills and contribute to crafting immersive web experiences.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;
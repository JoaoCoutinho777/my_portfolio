import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm João Coutinho.
      </SectionTitle>
      <SectionText>
        I'm based in Lisbon - Portugal.
        As a Front-end Developer with a good eye for visual communication, I pay close attention to any and all comments regarding my design that I receive from the audience. I'm passionate in creating high-quality ReactJS products.<br/>
        Tach:<br/>
        JavaScript React Figma Tailwind Sass Jquery
      </SectionText>
      
    </LeftSection>

  </Section>
);

export default Hero;
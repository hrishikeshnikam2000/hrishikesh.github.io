import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          {/* i know it's a bit much but bear with me. */}
        fancy Seeing you here! <br />
        Welcome to My Personal Portfolio!

        </SectionTitle>
        <SectionText>
          {/* Descripton */}
          The pourpose of this website is Basically to let you guys know me better.
        </SectionText>
        {/* Call to action button */}
        <button onClick={() => window.location = 'mailto:hrishinikam2000@gmail.com'} >Learn More</button>
      </LeftSection>
    </section>
  </div>
);

export default Hero;
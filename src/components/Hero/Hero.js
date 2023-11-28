import React, { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { Modal } from "./Modal";

const Hero = (props) => {
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hi <br />
            I'm Ashutosh Bharti.
          </SectionTitle>
          <SectionText>
            I am a Full-stack developer from Noida, India. I enjoy building
            everything from small business sites to rich interactive web apps
            and mobile apps. My expertise is in the area of backend, mobile and
            web. With every line of code, I strive to make the system the
            beautiful and efficient.
          </SectionText>
          <Button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/ashutosh-kumar-bharti-947a36121/",
                "_blank"
              );
            }}
          >
            Learn More
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;

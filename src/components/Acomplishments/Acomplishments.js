import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Front End', text: 'React Native tutorial and project course'},
  { number: 'Back End', text: 'Node.js,Express,MongoDb Bootcamp', },
  { number: 'OpenCV', text: 'Python for OpenCV and Deep Learning', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Courses</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

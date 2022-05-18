import React from 'react';

import { Heading, Tag } from 'react-bulma-components';

const CompetencyCounter = ({ comments }) => {
  let competencyCount = {
    'Continuous Improvement': 0,
    'Continuous Learning': 0,
    'Problem Solving': 0,
    'Service Focus': 0,
    'Belonging and Community': 0,
    'Collaboration': 0,
    'Communication': 0,
    'Change Agility': 0,
    'Mission and Vision Focus': 0,
    'Stewardship': 0
  };

  competencyCount = comments.reduce((acc, current) => {
    if (Object.keys(competencyCount).includes(current.competency)) {
      acc[current.competency] += 1;
    }
    return acc;
  }, competencyCount);

  const competencyColor = Object.keys(competencyCount).reduce(
    (acc, current) => {
      if (competencyCount[current] === 0) {
        acc[current] = '';
      } else if (competencyCount[current] === 1) {
        acc[current] = 'warning';
      } else {
        acc[current] = 'success';
      }

      return acc;
    },
    {}
  );

  return (
    <>
      <Heading size={6}>Core Competencies</Heading>
      <ul>
        {Object.keys(competencyCount).map((key, index) => (
          <li key={`key + ${index}`} style={{ padding: '3px' }}>
            <Tag.Group hasAddons>
              <Tag color={competencyColor[key]}>{competencyCount[key]}</Tag>
              <Tag color={competencyColor[key]}>{key}</Tag>
            </Tag.Group>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompetencyCounter;

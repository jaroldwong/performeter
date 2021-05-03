import React from 'react';

const CompetencyCounter = ({ comments }) => {
  let competencyCount = {
    Communication: 0,
    'Decision Making': 0,
    'Diversity, Equity, Inclusion': 0,
    'Health and Safety': 0,
    Leadership: 0,
    'Problem Solving and Innovation': 0,
    'Quality Improvement': 0,
    'Service Focus': 0,
    'Stewardship and Managing Resources': 0,
    'Strategic Planning': 0,
    Teamwork: 0,
    'Managing People (Supervisors)': 0,
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
        acc[current] = 'is-warning';
      } else {
        acc[current] = 'is-success';
      }

      return acc;
    },
    {}
  );

  return (
    <div className="fixed">
      <h1 className="title is-6">Core Competencies</h1>

      <ul className="unstyled-list">
        {Object.keys(competencyCount).map((key, index) => (
          <li key={`key + ${index}`} style={{ padding: '3px' }}>
            <div className="tags has-addons">
              <span className={'tag ' + competencyColor[key]}>
                {competencyCount[key]}
              </span>
              <span className={'tag ' + competencyColor[key]}>{key}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetencyCounter;

import React from 'react';

const CompetencyCounter = (props) => {
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

  competencyCount = props.comments.reduce((acc, current) => {
    if (current.competency !== 'Select') {
      acc[current.competency] += 1;
    }
    return acc;
  }, competencyCount);

  return (
    <div className="fixed">
      <h1 className="title is-6">Core Competencies</h1>

      <ul className="unstyled-list">
        {Object.keys(competencyCount).map((key, index) => (
          <li key={`key + ${index}`} style={{ padding: '3px' }}>
            <div className="tags has-addons">
              <span
                className={
                  'tag ' + (competencyCount[key] > 1 ? 'is-success' : '')
                }
              >
                {competencyCount[key]}
              </span>
              <span
                className={
                  'tag ' + (competencyCount[key] > 1 ? 'is-success' : '')
                }
              >
                {key}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetencyCounter;

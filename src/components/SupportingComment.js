import React from 'react';
import InlineEditableContent from './InlineEditableContent';

const SupportingComment = (props) => {
  const coreCompetencies = [
    'Select',
    'Communication',
    'Decision Making',
    'Diversity, Equity, Inclusion',
    'Health and Safety',
    'Leadership',
    'Problem Solving and Innovation',
    'Quality Improvement',
    'Service Focus',
    'Stewardship and Managing Resources',
    'Strategic Planning',
    'Teamwork',
    'Managing People (Supervisors)',
  ];

  return (
    <div className="box">
      <p style={{ display: 'block' }}>
        In the competency of{' '}
        <div className="select is-small">
          <select defaultValue={props.competency}>
            {coreCompetencies.map((competency) => (
              <option value={competency} key={competency}>
                {competency}
              </option>
            ))}
          </select>
        </div>
        , I <InlineEditableContent initialValue={props.indicator} />
        by <InlineEditableContent initialValue={props.example} />
      </p>
    </div>
  );
};

export default SupportingComment;

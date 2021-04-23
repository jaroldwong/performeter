import React from 'react';
import InlineEditableContent from './InlineEditableContent';

const SupportingComment = (props) => {
  const coreCompetencies = [
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

  const handleChange = (e) => {
    const newComment = {
      competency: e.target.value,
      indicator: props.indicator,
      example: props.example,
    };
    props.updateComment(newComment);
  };

  return (
    <div className="box">
      <div style={{ display: 'block' }}>
        In the competency of{' '}
        <div className="select is-small">
          <select defaultValue={props.competency} onChange={handleChange}>
            <option value="Select">Select One</option>
            {coreCompetencies.map((competency) => (
              <option value={competency} key={competency}>
                {competency}
              </option>
            ))}
          </select>
        </div>
        , I <InlineEditableContent initialValue={props.indicator} />
        by <InlineEditableContent initialValue={props.example} />
      </div>
    </div>
  );
};

export default SupportingComment;

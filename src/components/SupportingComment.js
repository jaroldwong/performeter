import React from 'react';
import InlineEditableContent from './InlineEditableContent';

const SupportingComment = ({
  competency,
  indicator,
  example,
  updateComment,
  deleteComment,
}) => {
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
      indicator: indicator,
      example: example,
    };
    updateComment(newComment);
  };

  return (
    <div className="box">
      <button
        className="delete is-danger"
        style={{ marginLeft: '99%', marginBottom: '.5rem' }}
        onClick={() => deleteComment()}
      ></button>
      <div style={{ display: 'block' }}>
        In the competency of{' '}
        <div className="select is-small">
          <select defaultValue={competency} onChange={handleChange}>
            <option value="Select">Select One</option>
            {coreCompetencies.map((competency) => (
              <option value={competency} key={competency}>
                {competency}
              </option>
            ))}
          </select>
        </div>
        , I <InlineEditableContent initialValue={indicator} />
        by <InlineEditableContent initialValue={example} />
      </div>
    </div>
  );
};

export default SupportingComment;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const INDICATORS = {
  Communication: [
    'demonstrated effective written and oral communication skills',
    'communicated clearly and knowledgeably',
    'shared information with others',
    'sought input from others',
    'adapted communication to diverse audiences',
    'protected private and confidential information',
  ],
  'Decision Making': [
    'involved others in making decisions',
    'factored organizational goals into decisions',
    'made clear, transparent, timely decisions',
  ],
  'Diversity, Equity and Inclusion': [
    'demonstrated respect for people and their differences',
    'understood the benefits of a diverse workforce',
    'am trusted and respected by others',
    'included and welcomed others',
    'worked to understand the perspectives of others',
    'promoted opportunities to experience diversity on campus',
  ],
  'Health and Safety': [
    'modeled and promoted safe behaviors in all work environments',
    'demonstrated behavior consistent with UC health and safety standards',
    'identified safety issues and problems, and took corrective action',
    'managed risks',
  ],
  Leadership: [
    'applied skills and knowledge to achieve department and organizational goals',
    'helped others perform at their best',
    'Self-aware and open to feedback',
    'added value; high quality work',
    'understood and supported organizational goals',
    'built wide sphere of influence to enhance individual and organizational effectiveness',
  ],
  'Problem Solving and Innovation': [
    'collaborated with others to solve problems',
    'analyzed and prioritized situations to identify and solve problems',
    'increased efficiency and improved quality',
  ],
  'Quality Improvement': [
    'understood the value of innovation and of quality improvement',
    'improved processes and practices by identifying inefficiencies and redundancies',
    'collaborated with campus partners to improve the quality of products and service',
    'demonstrated efficiency and quality in one’s own work',
    'managed and sustained change initiatives',
  ],
  'Service Focus': [
    'understood the importance of quality service',
    'delivered quality service',
    'anticipated and fulfilled customers’ needs',
    'skillfully served diverse customer base',
    'asked customers for feedback',
    'referred customers to appropriate/additional resources',
    'strived to improve the quality of service',
  ],
  'Stewardship and Managing Resources': [
    'used individual and campus resources effectively and efficiently',
    'innovated in terms of resource and environmental conservation',
    'protected physical and intellectual property',
    'leveraged resources for optimal outcomes',
    'performed actions consistent with UC policies',
  ],
  'Strategic Planning': [
    'understood and communicated strategic goals and plans to achieve them',
    'mobilized resources to achieve shared strategic vision and goals',
    'aligned knowledge and talent with program goals',
    'developed and implements metrics to measure results',
    'anticipated and solved problems',
  ],
  Teamwork: [
    'built productive and working relationships',
    'cooperated and collaborated with colleagues',
    'treated others with respect',
    'resolved conflicts among team members',
    'balanced individual and team goals',
  ],
};

const IndicatorDropdown = ({ competency }) => {
  if (!competency) {
    return (
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Select a competency first</span>
            <span className="icon is-small">▼</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>behavioral indicator</span>
          <span className="icon is-small">∨</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {INDICATORS[competency].map((indicator, index) => (
            <a href="#" className="dropdown-item" key={`${indicator + index}`}>
              {indicator}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndicatorDropdown;

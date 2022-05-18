import React, { useState } from 'react';
import IndicatorDropdown from './IndicatorDropdown';
import InlineEditableContent from './InlineEditableContent';
import { CORE_COMPETENCIES } from '../utils/constants';
import { Box, Button, Form } from 'react-bulma-components';

const SupportingComment = ({
  competency,
  indicator,
  example,
  updateComment,
  deleteComment,
}) => {
  const [showIndicatorDropdown, setShowIndicatorDropdown] = useState(
    indicator === '' ? true : false
  );

  const handleChange = (e) => {
    const newComment = {
      competency: e.target.value,
      indicator: '',
      example: example,
    };
    updateComment(newComment);
  };

  const updateIndicator = (e) => {
    if (showIndicatorDropdown === true) {
      setShowIndicatorDropdown(false);
    }

    const value = e.target ? e.target.value : e;
    const updatedComment = {
      competency,
      indicator: value,
      example,
    };

    updateComment(updatedComment);
  };

  const updateExample = (e) => {
    const updatedComment = {
      competency,
      indicator,
      example: e.target.value,
    };

    updateComment(updatedComment);
  };

  return (
    <Box>
      <Button
        remove
        style={{ marginLeft: '99%', marginBottom: '.5rem' }}
        onClick={() => deleteComment()}
      ></Button>
      <div style={{ display: 'block' }}>
        In the competency of{' '}
        <Form.Select size="small" value={competency} onChange={handleChange}>
          <option value="Select">Select One</option>
          {CORE_COMPETENCIES.map((competency) => (
            <option value={competency} key={competency}>
              {competency}
            </option>
          ))}
        </Form.Select>
        , I{' '}
        {showIndicatorDropdown ? (
          <IndicatorDropdown
            competency={competency}
            indicator={indicator}
            onUpdate={updateIndicator}
          />
        ) : (
          <InlineEditableContent
            initialValue={indicator}
            defaultValue="[behavioral indicator]"
            onChange={updateIndicator}
          />
        )}{' '}
        by{' '}
        <InlineEditableContent
          initialValue={example}
          defaultValue="[specific example]"
          onChange={updateExample}
        />
      </div>
    </Box>
  );
};

export default SupportingComment;

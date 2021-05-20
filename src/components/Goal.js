import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Form } from 'react-bulma-components';

const Goal = ({ id, title, value, handleUpdate }) => {
  const [text, setText] = useState(value);

  const handleChange = (event) => {
    const text = event.target.value;
    const newGoal = {
      id,
      title,
      value: text,
    };

    setText(text);
    handleUpdate(newGoal);
  };

  return (
    <Box>
      <Form.Field>
        <Form.Label>{title}</Form.Label>
        <Form.Control>
          <Form.Textarea
            placeholder="Plan out your future goals"
            value={text}
            onChange={handleChange}
          ></Form.Textarea>
        </Form.Control>
      </Form.Field>
    </Box>
  );
};

Goal.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  handleUpdate: PropTypes.func,
};

export default Goal;

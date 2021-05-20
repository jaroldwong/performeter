import React from 'react';
import PropTypes from 'prop-types';
import { Box, Form, Heading } from 'react-bulma-components';

const Achievements = ({ achievements, updateAchievements }) => {
  return (
    <>
      <Heading size={3}>Achievements</Heading>
      <Box>
        <Form.Field>
          <Form.Label>Achievements</Form.Label>
          <Form.Control>
            <Form.Textarea
              placeholder="Address your goals from last year"
              value={achievements}
              onChange={updateAchievements}
            />
          </Form.Control>
        </Form.Field>
      </Box>
    </>
  );
};

Achievements.propTypes = {
  achievements: PropTypes.string,
  updateAchievements: PropTypes.func,
};

export default Achievements;

import React from 'react';
import { Box, Button, Form, Heading, Progress } from 'react-bulma-components';

const JobFunction = (props) => {
  const percentValues = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  const { comments, description, id, percentage } = props.jobFunction;

  return (
    <Box>
      <Heading size={5} weight="light">
        Job Function
      </Heading>
      <Progress
        color="success"
        value={percentage ? comments.length : 0}
        max={percentage ? parseInt(percentage) / 10 : 0}
      >
        {percentage}
      </Progress>
      <Form.Field>
        <Form.Label>Percentage</Form.Label>
        <Form.Control>
          <Form.Select
            size="small"
            value={percentage}
            onChange={props.updateJobFunction}
          >
            <option value="">Select</option>
            {percentValues.map((value) => (
              <option
                value={`${value}%`}
                key={`${id}-${value}`}
              >{`${value}%`}</option>
            ))}
          </Form.Select>
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Description</Form.Label>
        <Form.Control>
          <Form.Textarea
            name="description"
            className="textarea"
            placeholder="Copy and paste job function here"
            value={description}
            onChange={props.updateJobFunction}
          ></Form.Textarea>
        </Form.Control>
      </Form.Field>
      <Button onClick={props.addComment}>Add Supporting Comment</Button>
      {props.children}
    </Box>
  );
};

export default JobFunction;

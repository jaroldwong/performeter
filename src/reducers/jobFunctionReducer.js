export default function jobFunctionReducer(state, action) {
  switch (action.type) {
    case 'ADD_JOB_FUNCTION':
      debugger;
      return [
        ...state,
        {
          id: `job-function-${Math.random().toString(16).slice(2)}`,
          description: '',
          percentage: '',
          comments: [
            {
              competency: '',
              indicator: '',
              example: '[specific example]',
            },
          ],
        },
      ];
    case 'UPDATE_JOB_FUNCTION':
      const { name, value } = action.payload.event.target;

      return state.map((jobFunction) =>
        jobFunction.id === action.payload.id
          ? {
              ...jobFunction,
              [name]: value,
            }
          : jobFunction
      );
    case 'ADD_COMMENT':
      return state.map((jobFunction) => {
        if (jobFunction.id === action.payload.id) {
          const newComments = [
            ...jobFunction.comments,
            {
              competency: '',
              indicator: '',
              example: '[specific example]',
            },
          ];

          return { ...jobFunction, comments: newComments };
        } else {
          return jobFunction;
        }
      });
    case 'UPDATE_COMMENT': {
      const { jobFunctionId, commentIndex, newComment } = action.payload;
      const jobFunction = state.find((jf) => jf.id === jobFunctionId);

      const updatedComments = jobFunction.comments.map((comment, idx) => {
        if (idx === commentIndex) {
          return newComment;
        } else {
          return comment;
        }
      });

      const newJobFunction = { ...jobFunction, comments: updatedComments };

      return state.map((jobFunction) => {
        if (jobFunction.id === jobFunctionId) {
          return newJobFunction;
        } else {
          return jobFunction;
        }
      });
    }
    case 'DELETE_COMMENT': {
      const { jobFunction, commentIndex } = action.payload;
      const filteredComments = jobFunction.comments.filter(
        (_, index) => index !== commentIndex
      );

      const updatedJobFunction = { ...jobFunction, comments: filteredComments };

      return state.map((jobFunction) =>
        jobFunction.id === updatedJobFunction.id
          ? updatedJobFunction
          : jobFunction
      );
    }
    default:
      throw new Error();
  }
}

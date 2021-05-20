export default function appReducer(state, action) {
  switch (action.type) {
    case 'SELECT_TAB':
      return { ...state, activeTab: action.payload.tab };
    case 'RESET_ACTIVE_TAB':
      return { activeTab: 'Job Functions' };
    default:
      return state;
  }
}

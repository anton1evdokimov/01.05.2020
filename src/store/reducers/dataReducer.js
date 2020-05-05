import { ADD_DATA, CHANGE_DATA } from '../constants';

const initialState = {
  list: []
};

function sortData(item1, item2) {
  let d1 = new Date(item1.date).setHours(0,0,0,0);
  let d2 = new Date(item2.date).setHours(0,0,0,0);
  if ((d1 > d2) || ((d1 === d2) && (!item1.checked && item2.checked))) { return -1; }
  if ((d1 < d2) || ((d1 === d2) && (item1.checked && !item2.checked))) { return 1; }
  return 0;
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      state.list.push({ ...action.data, id: state.list.length });
      state.list.sort(sortData);
      return {
        ...state,
        list: [...state.list]
      };
    case CHANGE_DATA:
      state.list.find(x => x.id === action.id).checked = action.checked;
      state.list.sort(sortData);
      return {
        ...state,
        list: [...state.list]
      };
    default:
      return state;
  }
}

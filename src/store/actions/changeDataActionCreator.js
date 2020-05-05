import { CHANGE_DATA } from "../constants";

export const changeDataActionCreator = ({checked, id}) => ({ type: CHANGE_DATA, checked, id });

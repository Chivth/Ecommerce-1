import { HIDE_POPUP } from "./toggle";
import { SHOW_POPUP } from "./toggle";
export const reducer = (
  state = { SHOW_POPUP: SHOW_POPUP, HIDE_POPUP: HIDE_POPUP },
  action
) => {

  switch (action.type) {
    case state.SHOW_POPUP:
      return { SHOW_POPUP: false, HIDE_POPUP: true };
    case state.HIDE_POPUP:
      return { SHOW_POPUP: true, HIDE_POPUP: false }
    default:
      return state;
  }
};

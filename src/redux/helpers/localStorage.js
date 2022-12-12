const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("app_state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("app_state", serializedState);
  } catch {
    // ignore write errors
  }
};

export default {
  loadState,
  saveState,
};

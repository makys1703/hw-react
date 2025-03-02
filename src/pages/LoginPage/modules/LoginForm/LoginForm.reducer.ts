export const INITIAL_STATE = {
  isReadyToSubmit: false,
  controls: {
    name: {
      value: '',
      isValid: true
    }
  }
};

export type State = typeof INITIAL_STATE;
export type Control = keyof typeof INITIAL_STATE.controls;

interface SetValueAction {
  type: 'SET_VALUE',
  payload: [Control, string]
}

interface SubmitAction {
  type: 'SUBMIT'
}

interface ResetAction {
  type: 'RESET'
}

export type Action = SetValueAction | SubmitAction | ResetAction;


export function loginFormReducer(state: State = INITIAL_STATE, action: Action): State {
  switch (action.type) {

  case 'SET_VALUE': {
    const [control, value] = action.payload;
    const controls = state.controls;

    return {
      ...state,
      controls: {
        ...controls,
        [control]: {
          ...controls[control],
          value
        }
      }
    };
  };

  case 'SUBMIT': {
    const { name } = state.controls;
    const nameValidity = name.value.trim().length > 1;

    return {
      isReadyToSubmit: nameValidity,
      controls: {
        name: {
          ...name,
          isValid: nameValidity
        }
      }
    };
  };

  case 'RESET':
    return {...INITIAL_STATE};

  default:
    return state;
  }
}

export const setValueActionCreator = (control: Control, value: string): SetValueAction => {
  return {
    type: 'SET_VALUE',
    payload: [control, value]
  };
};

export const submitActionCreator = (): SubmitAction => {
  return {
    type: 'SUBMIT'
  };
};

export const resetActionCreator = (): ResetAction => {
  return {
    type: 'RESET'
  };
};
export const SET_CURRENT_CHANNEL ='SET_CURRENT_CHANNEL';

export const setCurrentChannel = channel => ({type: SET_CURRENT_CHANNEL,
                                              channel});

const initialState = {
  currentChannel : null
}

export default (state = initialState, action) => {
  switch(action.type){
    case SET_CURRENT_CHANNEL:
      return {...state,currentChannel : action.channel}
    default:
      return {...state};
  }
}

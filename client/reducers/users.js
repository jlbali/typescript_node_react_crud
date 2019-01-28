
export default function userssReducer(state={items: []}, action){

    if (action.type == "FETCH_USERS_SUCCEEDED"){
      return {
        items: action.payload.items,
      };
    }
    if (action.type == "FETCH_USER_SUCCEEDED"){
      return {
        item: action.payload.item,
      };
    }
    if (action.type == "CREATE_USER_SUCCEEDED"){
      return {
        items: state.items.concat(action.payload.item),
      };
    }
    if (action.type == "EDIT_USER"){
      const {payload} = action;
      return {
        items: state.items.map(item => {
          if (item.id == payload.id){
            return Object.assign({}, item, payload.params);
          } else {
            return item;
          }
        }),
      };
    }
  
    return state;
  }
  
  
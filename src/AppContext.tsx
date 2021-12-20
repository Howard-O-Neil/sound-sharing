import React from "react";

interface TagType_t {
  id: string;
  name: string;
}

interface Tag_t {
  id: string;
  name: string;
  type: TagType_t;
}

interface AppState_t {
    email: string;
    name: string;
    avatar_url: string;
    listTags: Tag_t[];
    search_key: string;
}

interface AppAction_t {
    type: string;
    value: any
}

const reducer = (state: AppState_t, action: AppAction_t): AppState_t => {
  switch (action.type) {
    case "update_info":
      return {
        ...state,
        email: action.value["email"],
        name: action.value["name"],
        avatar_url: action.value["avatar_url"],
      }
    case "update_list_tags":
      return {
        ...state,
        listTags: action.value
      }
    case "update_search_key":
      return {
        ...state,
        search_key: action.value
      }
    // case "toggle_button":
    //   return {
    //     ...state,
    //     active: !state.active,
    //   };

    // default:
    //   return state;
  }

  return state;
};

const initialState: AppState_t = {
  email: "",
  name: "",
  avatar_url: "",
  listTags: [],
  search_key: "",
};


export const AppContext = React.createContext<[
  AppState_t,
  React.Dispatch<AppAction_t>
]>([
  initialState, () => null,
])

export const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
    	{ children }
    </AppContext.Provider>
  )
}

// // Some other components you've written for your app...
// import Header from "./Header"
// import Main from "./Main"

// export default () => {
//   return (
//     <UserProvider>
//       <Header />
//       <Main />
//     </UserProvider>
//   )
// }

// import React from "react"
// import { UserContext } from "../contexts/User"

// export default () => {
//   const [ state, dispatch ] = React.useContext(UserContext)

//   return (
//     <button onClick={() => dispatch({ type: "toggle_button" })}>
//       { state.active ? "On" : "Off" }  
//     </button>
//   )
// }
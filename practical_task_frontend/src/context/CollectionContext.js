import React, { useReducer} from "react";
import { CollectionReducer } from "./CollectionReducer";

export const CollectionContext = React.createContext();

const initialState = {collection: []};

export default function CollectionContextProvider ({children})  {
    const [state,dispatch] = useReducer(CollectionReducer,initialState); 

    return (
        <CollectionContext.Provider value={{state,dispatch}}>
            {children}
        </CollectionContext.Provider>
    )
}
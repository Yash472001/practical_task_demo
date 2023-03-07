import { ADD_COLLECTION_ITEM ,REMOVE_COLLECTION_ITEM,UPDATE_COLLECTION_ITEM} from "./CollectionConstants";


export const CollectionReducer = (state,action) => {
    
    switch (action.type) {
        case ADD_COLLECTION_ITEM:
            return {
                ...state,
                collection:[...state.collection,...action.payload]
            };

        case REMOVE_COLLECTION_ITEM:
            return {
                ...state,
                collection:state.collection.filter(
                    val => val._id !== action.payload
                ),
            };

        
        case UPDATE_COLLECTION_ITEM:
            return {
                ...state,
                collection:state.collection.map((val) => {
                    let id = action.payload._id;
                    
                    if(val._id === id){
                        return action.payload;
                    }
                    return val;
                })
            };
    
        default:
            return state;
    }
}
import { ADD_COLLECTION_ITEM ,REMOVE_COLLECTION_ITEM,UPDATE_COLLECTION_ITEM} from "./CollectionConstants"

export const addCollectionItem = (data) => {
    return {
        type:ADD_COLLECTION_ITEM,
        payload:data
    }
}

export const removeCollectionItem = (data) => {
    return {
        type:REMOVE_COLLECTION_ITEM,
        payload:data
    }
}

export const updateCollectionItem = (data) => {
    return {
        type:UPDATE_COLLECTION_ITEM,
        payload:data
    }
}




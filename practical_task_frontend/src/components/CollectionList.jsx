import React, { useContext, useEffect } from "react";
import { CollectionContext } from "../context/CollectionContext";
import Collectioncomp from "./CollectionComp";
import { getCollections } from "../apicalls/crudApiCall";
import { addCollectionItem, removeCollectionItem } from "../context/CollectionActions";

const CollectionList = () => {
  const { state,dispatch } = useContext(CollectionContext);

  useEffect(() => {
    (async() => {
      let response = await getCollections();
      response = response.data;
      dispatch(addCollectionItem(response))
    })()
  }, [])

  
  
  return (
    <div style={{display:"flex"}}>
      {state.collection.length == 0 ?
        <>No Collections</>
      :
      state.collection.map((val) => {
        return <Collectioncomp key={val.id} data={val} />;
      })}
      
    </div>
  );
};

export default CollectionList;

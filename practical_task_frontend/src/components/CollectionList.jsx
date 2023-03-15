import React, { useContext, useEffect } from "react";
import { CollectionContext } from "../context/CollectionContext";
import Collectioncomp from "./CollectionComp";

const CollectionList = () => {
  const { state } = useContext(CollectionContext);


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

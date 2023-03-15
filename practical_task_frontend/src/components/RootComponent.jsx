import { useEffect, useContext, useRef } from "react";
import { CollectionContext } from "../context/CollectionContext";
import { ALL_COLLECTION } from "../graphql/queryMutation";
import AddCollection from "./AddCollection";
import CollectionList from "./CollectionList";
import { useQuery } from "@apollo/client";
import {
  addCollectionItem,
} from "../context/CollectionActions";

function RootComponent() {
  const { dispatch } = useContext(CollectionContext);
  const { data, loading, error } = useQuery(ALL_COLLECTION);


  const firstTimeLoad = useRef(false); 
  useEffect(() => {
    if (firstTimeLoad.current) {
        return;
    }

    if (data) {
      firstTimeLoad.current = true;
      const { allCollection } = data;
      dispatch(addCollectionItem(allCollection));
    }
  }, [data]);

  if (loading) {return <>Loading.....</>} 
  else if (error) alert("Something went wrong!");
  return (
    <>
      <h1>PRACTICAL TASK</h1>
      <div style={{ margin: "1%", padding: "0.5%", border: "1px solid black" }}>
        <AddCollection />
      </div>
      <div>
        <CollectionList style={{ margin: "1%" }} />
      </div>
    </>
  );
}

export default RootComponent;

import React, { useContext, useRef, useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { removeCollectionItem, updateCollectionItem } from "../context/CollectionActions";
import { CollectionContext } from "../context/CollectionContext";
import { DELETE_COLLECTION, UPDATE_COLLECTION } from "../graphql/queryMutation";



const Collectioncomp = ({ data }) => {
  const { dispatch } = useContext(CollectionContext);
  const { name, address, createdAt, _id } = data;

  const [updateCollection, updateData] = useMutation(UPDATE_COLLECTION);
  const [deleteCollection, deleteData] = useMutation(DELETE_COLLECTION);
  
  const [editable, setEditable] = useState(false);

  const nameEditableRef = useRef();
  const addressEditableRef = useRef();

  useEffect(() => {
    if (editable) {
      nameEditableRef.current.value = name;
      addressEditableRef.current.value = address;
    }
    
  }, [editable]);

  useEffect(() => {
    if(updateData.data){
      const data = updateData.data.updateCollection;
      dispatch(updateCollectionItem(data));
    }
    if(deleteData.data){
      const data = deleteData.data.deleteCollection;
      dispatch(removeCollectionItem(data._id));
    }
  }, [updateData.data,deleteData.data])
  

  
  const handleDelete = async () => {
    deleteCollection({variables:{id:_id}});
    
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleUpdate = async() => {
    if(!nameEditableRef.current.value || !addressEditableRef.current.value){
      alert("INPUT BOX CAN NOT BE EMPTY");
      return
    }
    updateCollection({variables:{id:_id,input:{name:nameEditableRef.current.value,address:addressEditableRef.current.value}}})
    resetValue()
    setEditable(false);
  };

  const resetValue = () => {
    nameEditableRef.current.value = "";
    addressEditableRef.current.value = ""
  }

  return (
    <>
      <div style={{ border: "1px solid black", margin: "0.5%" }}>
        {editable ? (
          <>
            <label htmlFor="personname">Name : </label>
            <input
              type="text"
              ref={nameEditableRef}
              placeholder="Name"
              name="personname"
            />
            <br />
            <label htmlFor="personname">Address : </label>
            <input
              type="text"
              ref={addressEditableRef}
              placeholder="Address"
              name="address"
            />
            <button onClick={handleUpdate}> Submit </button>
          </>
        ) : (
          <>
            <h6>{name}</h6>
            <h6>{address}</h6>
            <button onClick={handleEdit}> Edit </button>
            <button onClick={handleDelete}> Delete </button>
          </>
        )}
      </div>
    </>
  );
};

export default Collectioncomp;

import React, { useContext, useRef, useState, useEffect } from "react";
import { handleDeleteCollection, handleUpdateCollection } from "../apicalls/crudApiCall";
import { removeCollectionItem, updateCollectionItem } from "../context/CollectionActions";
import { CollectionContext } from "../context/CollectionContext";

const Collectioncomp = ({ data }) => {
  const { dispatch } = useContext(CollectionContext);
  const { name, address, createdAt, _id } = data;

  const [editable, setEditable] = useState(false);

  const nameEditableRef = useRef();
  const addressEditableRef = useRef();

  useEffect(() => {
    if (editable) {
      nameEditableRef.current.value = name;
      addressEditableRef.current.value = address;
    }
  }, [editable]);

  const handleDelete = async () => {
    let response = await handleDeleteCollection(_id);
    if (response.status !== "OK") {
      alert("Something went wrong");
      return;
    }
    dispatch(removeCollectionItem(_id));
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleUpdate = async() => {
    if(!nameEditableRef.current.value || !addressEditableRef.current.value){
      alert("INPUT BOX CAN NOT BE EMPTY");
      return
    }
    let response = await handleUpdateCollection(_id,{name:nameEditableRef.current.value,address:addressEditableRef.current.value});
    response = response.data;
    dispatch(updateCollectionItem(response));
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

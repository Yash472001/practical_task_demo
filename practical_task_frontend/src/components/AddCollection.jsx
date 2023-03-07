import React, { useContext, useRef } from 'react'
import { handleCreateCollection } from '../apicalls/crudApiCall';
import { addCollectionItem } from '../context/CollectionActions';
import { CollectionContext } from '../context/CollectionContext';

const AddCollection = () => {

  const personnameRef = useRef();
  const addressRef = useRef();

  const {dispatch}  = useContext(CollectionContext);

  const handleSubmit = async() => {
    if(!personnameRef.current.value || !addressRef.current.value){
      alert("INPUT BOX CAN NOT BE EMPTY");
      return
    }
    
    let response = await handleCreateCollection({name:personnameRef.current.value,address:addressRef.current.value});
    response = response.data;
    dispatch(addCollectionItem(response))
    resetValue();
  }

  const resetValue = () => {
    personnameRef.current.value = "";
    addressRef.current.value = ""
  }

  return (
    <>
        <label htmlFor="personname">Name : </label>
        <input type="text" ref={personnameRef} placeholder="Name" name='personname'/>
        <br />
        <br />

        <label htmlFor="address">Address : </label>
        <input type="text" ref={addressRef} placeholder="Address" name='address' />
        <br />
        <br />

        <button onClick={handleSubmit}> Add Collection </button>
    </>
  )
}

export default AddCollection;
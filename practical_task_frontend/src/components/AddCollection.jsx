import React, { useContext, useRef ,useEffect} from 'react'
import { useMutation } from '@apollo/client';
import { addCollectionItem } from '../context/CollectionActions';
import { CollectionContext } from '../context/CollectionContext';
import { CREATE_COLLECTION } from '../graphql/queryMutation';



const AddCollection = () => {

  const personnameRef = useRef();
  const addressRef = useRef();

  const {dispatch}  = useContext(CollectionContext);
  const [createCollection, { data, loading, error }] = useMutation(CREATE_COLLECTION);

  useEffect(() => {
    if(data){
      dispatch(addCollectionItem([data.createCollection]))
    }
  }, [data])
  

  const handleSubmit = async() => {
    if(!personnameRef.current.value || !addressRef.current.value){
      alert("INPUT BOX CAN NOT BE EMPTY");
      return
    }
    
    createCollection({ variables: {input:{name:personnameRef.current.value,address:addressRef.current.value}} });
    resetValue();
  }

  const resetValue = () => {
    personnameRef.current.value = "";
    addressRef.current.value = ""
  }

  if(loading){return <>Loading.....</>}
  else if(error) alert("Something went wrong!")
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
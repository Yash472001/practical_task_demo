import axios from "./axiosConfig";

export const getCollections = async(data) => {
    try {
        const res = await axios.get('/api/collections')
        return res.data;
    } catch (error) {
        alert("something went wrong");
        throw new Error(error);
    }
};

export const handleCreateCollection = async(data) => {
    try {
        const res = await axios.post('/api/collection', data)
        return res.data;
    } catch (error) {
        alert("something went wrong");
        throw new Error(error);
    }
};

export const handleUpdateCollection = async(id, data) => {
    try {
        const res = await axios.put(`/api/collections/${id}`, data)
        return res.data;
    } catch (error) {
        alert("something went wrong");
        throw new Error(error);
    }
 
};

export const handleDeleteCollection = async(id) => {
    try {
        const res = await axios.delete(`/api/collections/${id}`);
        return res.data;
    } catch (error) {
        alert("something went wrong");
        throw new Error(error);
    }
};
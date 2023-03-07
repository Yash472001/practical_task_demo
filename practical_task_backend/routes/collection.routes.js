const { Router } = require("express");
const { createCollection,deleteCollection,getAllCollection,updateCollection ,findUserById} = require("../db/dbmethod/dbMethods");

const collectionRouter = Router();

// Create new collection
collectionRouter.post("/api/collection",async(req,res) => {
    try {
        const {name,address} = req.body;

        let resMsg = {status:"OK",msg:"Collection created successfully!!!"};

        if (!name || !address) {
            resMsg = {status:"NOTOK",msg:"Data is NOT working"};
            return res.send(resMsg);
        }
        
        const data = await createCollection({name,address});
        res.send({...resMsg,data:[data]});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not accepted`);
    }
})

//Read ALL the collection 
collectionRouter.get("/api/collections/",async(req,res) => {
    try {
        const data = await getAllCollection();
        res.send({data});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

//Find collection by name
collectionRouter.get("/api/collections/:name",async(req,res) => {
    try {
        const {name} = req.params;
        let resMsg = {status:"OK",msg:"Data is working"};
        if (!name) {
            resMsg = {status:"NOTOK",msg:"Data is NOT working"};
            return res.send(resMsg);
        }

        const data = await getCollectionByName();

        res.send({...resMsg,data});

    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not accepted`);
    }
})

//Update collection by Id
collectionRouter.put("/api/collections/:id",async(req,res) => {
    try {
        const {id} = req.params;
        const {name,address} = req.body;
        let resMsg = {status:"OK",msg:"Data is working"};
        if(!id || !name || !address){
            resMsg = {status:"NOTOK",msg:"Data is NOT correct"};
            return res.send(resMsg);
        }

        // If exist or not
        const existOrNot = await findUserById(id);
        if(!existOrNot){
            resMsg = {status:"NOTOK",msg:"Data is NOT correct"};
            return res.send(resMsg);
        }

        const data = await updateCollection(id,{name,address});
        console.log(data);
        res.send({...resMsg,msg:"Uploaded Successfully!!!",data});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

//Delete collection by Id
collectionRouter.delete("/api/collections/:id",async(req,res) => {
    try {
        const {id} = req.params;
        let resMsg = {status:"OK"};
        if(!id){
            resMsg = {status:"NOTOK",msg:"Incorrect data"};
            return res.send(resMsg);
        }

        // If exist or not
        const existOrNot = await findUserById(id);
        if(!existOrNot){
            resMsg = {status:"NOTOK",msg:"Data is not existed"};
            return res.send(resMsg);
        }

        const data = await deleteCollection(id);
        console.log("data : ",data);
        res.send({...resMsg,msg:"Deleted Successfully!!!"});
    } catch (error) {
        console.error(error)
        res.status(500).send(`Data is not valid`);
    }
})

module.exports = collectionRouter;
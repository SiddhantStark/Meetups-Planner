import {MongoClient} from 'mongodb';

async function handler(req,res){
    if(req.method==='POST'){
        const data=req.body;
        const {title, image, address, descriptim} = data;

        const client = await MongoClient.connect('mongodb+srv://peter_parker-2991:Ironman3000@cluster0.nwmp2xj.mongodb.net/meetups?retryWrites=true&w=majority');

        const db=client.db();
        const meetupsCollection = db.collection('meetups');
        
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();


        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler;
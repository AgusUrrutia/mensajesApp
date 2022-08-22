import {Schema , model, set} from 'mongoose';

const schema =  new Schema({

    title : {
        type: String,
        required: true
    },
    description: {
        type : String
    }
},{
    timestamps : true
})


export default model("Note" ,schema);

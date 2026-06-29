const mongoose = require ("mongoose")


const musicSchema = new mongoose.Schema({
    uri: {
        type : String ,
        require : true ,
    },

    title : {
        type : String , 
        required : true , 

    },

    artist : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : true 
    }
})


const musicModel = mongoose.model("model",musicSchema);


module.export = musicModel
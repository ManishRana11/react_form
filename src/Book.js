const mongoose =require("mongoose");
mongoose.model("Entry",{
    localEmail: {
        type: String,
        require: true
    },
    leave: {
        type: String,
        require: true
    }
    // saleVertical: {
    //     type: String,
    //     require: true
    // }
});
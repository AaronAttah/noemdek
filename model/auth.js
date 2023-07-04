const { default: mongoose } = require("mongoose");
const softDelete = require('mongoose-delete');
const bcrypt = require('bcrypt')

const authSchema = mongoose.Schema({
    email: {
        type: String, required: true,
        unique: true,
        lowercase:true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {type: String, required: true}, 
    full_name: {type: String, required: true} ,
    role:{type: String,default:"admin"}, // assuming this auth model is for admins only
},{timestamps:true});

authSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

authSchema.plugin(softDelete, {
    deletedAt: true 
    });
module.exports = mongoose.model('Auth', authSchema);
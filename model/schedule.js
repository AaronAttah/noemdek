const { default: mongoose } = require("mongoose");
const softDelete = require("mongoose-delete");


const scheduleSchema = mongoose.Schema({
  driver_name: { type: String, required: false },
  vehicle_name: { type: String, required: true },
  vehicle_image: { type: Object, required: false },
  condition: { type: String, required: true},
  client_name: { type: String, required: true },
  client_company: { type: String, required: true },
  service: { type: String, required: true },
  pickup_location: { type: String, required: true },
  drop_off_location: { type: String, required: true },
  start_date: { type: Date },
  end_date: { type: Date },
  created_by: { type: String, required: false },
  edited_by: { type: String, required: false },
});

scheduleSchema.plugin(softDelete, {
  deletedAt: true,
});
module.exports = mongoose.model("Schedule", scheduleSchema);

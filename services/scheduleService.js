const scheduleModel = require("../model/schedule");
const STATUSCODE = require("../utils/status-codes");

exports.createSchedule = async (data) => {
  const scheduleExist = await scheduleModel.findOne({
    driver_name: data.body.driver_name,
    client_name: data.body.client_name,
  });

  if (
    scheduleExist?.driver_name === data.body.driver_name &&
    scheduleExist?.client_name === data.body.client_name &&
    scheduleExist?.client_company === data.body.client_company
  )
    return {
      STATUS_CODE: STATUSCODE.BAD_REQUEST,
      STATUS: false,
      MESSAGE: "This schedule has been created and already exist!",
    };

  const createdSchedule = new scheduleModel({
    driver_name: data.body.driver_name,
    vehicle_name: data.body.vehicle_name,
    vehicle_image: {
      key: data.files?.vehicle_image[0].key,
      url: data.files?.vehicle_image[0].location,
    },
    condition: data.body.condition,
    client_name: data.body.client_name,
    client_company: data.body.client_company,
    service: data.body.service,
    pickup_location: data.body.pickup_location,
    drop_off_location: data.body.drop_off_location,
    start_date: data.body.start_date,
    end_date: data.body.end_date,
    created_by: data.body.created_by,
    created_by: data.user.name,
  });
  createdSchedule.save();

  // const schedule = await scheduleModel.create(data.body);

  // /**
  //  * now appending the "created_by" user gotten from the token attached to the headerto the collection
  //  */
  // const getschedule = await scheduleModel.findOne({ _id: schedule._id });
  // getschedule.created_by = data.user.name;
  // const createdSchedule = await getschedule.save();
  // // console.log(getschedule)

  return {
    STATUS_CODE: STATUSCODE.CREATED,
    STATUS: true,
    MESSAGE: "schedule created successfully!",
    DATA: createdSchedule,
  };
};

exports.getASchedule = async (data) => {
  const schedule = await scheduleModel.findOne({ _id: data.id });
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    DATA: schedule,
  };
};

exports.getAllSchedules = async (data) => {
  const schedule = await scheduleModel.find();
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    DATA: schedule,
  };
};

exports.updateSchedule = async (data) => {
  const schedule = await scheduleModel.findOneAndUpdate(
    { _id: data.params.id },
    data.body,
    { new: true }
  );
  /**
   * now appending the "edited_by" user gotten from the token attached to the header to the collection
   */
  const getschedule = await scheduleModel.findOne({ _id: schedule._id });
  getschedule.edited_by = data.user.name;
  const createdSchedule = await getschedule.save();

  //  console.log(getschedule)
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    MESSAGE: "schedule updated successfully!",
    DATA: createdSchedule,
  };
};

exports.deleteSchedule = async (data) => {
  await scheduleModel.findOneAndDelete({ _id: data.params.id }, { new: true });
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    MESSAGE: "schedule successfully deleted",
  };
};

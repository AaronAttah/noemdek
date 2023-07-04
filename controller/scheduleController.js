const ScheduleService = require("../services/scheduleService");

exports.createSchedule = async (req, res, next) => {
  const data = await ScheduleService.createSchedule(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};

exports.getASchedule = async (req, res, next) => {
  const data = await ScheduleService.getASchedule(req.params);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};

exports.getAllSchedules = async (req, res, next) => {
  const data = await ScheduleService.getAllSchedules();

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};

exports.updateSchedule = async (req, res, next) => {
  const data = await ScheduleService.updateSchedule(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};

exports.deleteSchedule = async (req, res, next) => {
  const data = await ScheduleService.deleteSchedule(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
};

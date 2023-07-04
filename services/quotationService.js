const quotationModel = require("../model/quotation");
const STATUSCODE = require("../utils/status-codes");

exports.createQuotation = async (data) => {
  const quotationExist = await quotationModel.findOne({
    rfq_number: data.body.rfq_number,
  });

  if (quotationExist) {
    return {
      STATUS_CODE: STATUSCODE.BAD_REQUEST,
      STATUS: false,
      MESSAGE: "This quotation has been created and already exist!",
    };
  }

  const quotation = await quotationModel.create(data.body);
  return {
    STATUS_CODE: STATUSCODE.CREATED,
    STATUS: true,
    MESSAGE: "quotation created successfully!",
    DATA: quotation,
  };
};

exports.getAQuotation = async (data) => {
  const quotation = await quotationModel.findOne({ _id: data.id });
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    DATA: quotation,
  };
};

exports.getAllQuotations = async (data) => {
  const quotation = await quotationModel.find();
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    DATA: quotation,
  };
};

exports.updateQuotation = async (data) => {
  const quotation = await quotationModel.findOneAndUpdate(
    { _id: data.params.id },
    data.body,
    { new: true }
  );

  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    MESSAGE: "quotation updated successfully!",
    DATA: quotation,
  };
};


exports.deleteQuotation = async (data) => {
   await quotationModel.findOneAndDelete(
      { _id: data.params.id },
      { new: true }
    );
  
    return {
      STATUS_CODE: STATUSCODE.OK,
      STATUS: true,
      MESSAGE: "quotation deleted successfully!",
    };
  };
const QuotationService = require("../services/quotationService");

exports.createQuotation = async (req, res, next) => {
  const data = await QuotationService.createQuotation(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE, 
    data: data.DATA, 
  });
};

exports.getAQuotation = async (req, res, next) => {
  const data = await QuotationService.getAQuotation(req.params);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE, 
    data: data.DATA, 
  });
};

exports.getAllQuotations = async (req, res, next) => {
  const data = await QuotationService.getAllQuotations(req.params);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE, 
    data: data.DATA, 
  });
};

exports.updateQuotation = async (req, res, next) => {
  const data = await QuotationService.updateQuotation(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE, 
    data: data.DATA, 
  });
};

exports.deleteQuotation = async (req, res, next) => {
  const data = await QuotationService.deleteQuotation(req);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE, 
    data: data.DATA, 
  });
};

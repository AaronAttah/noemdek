const express = require("express");
const router = express.Router();
const quotationController = require("../controller/quotationController")
const {quotationValidator} = require("../validation/quotationValidation")

router.post("/", quotationController.createQuotation);
router.get("/:id", quotationController.getAQuotation);
router.get("/", quotationController.getAllQuotations);
router.put("/:id", quotationController.updateQuotation);
router.delete("/:id", quotationController.deleteQuotation);

module.exports = router;
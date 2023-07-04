const express = require("express");
const router = express.Router();
const scheduleController = require("../controller/scheduleController");
const { authToken, sup_access } = require("../middleware/authMiddleware");
const { upload } = require("../utils/storage/S3");
const { scheduleValidator } = require("../validation/scheduleValidation");

router.post(
  "/",
  upload("vehicle/test").fields([{ name: "vehicle_image" }]),
  authToken,
  sup_access,
  // scheduleValidator,
  scheduleController.createSchedule
);
router.get("/:id", authToken, sup_access, scheduleController.getASchedule);
router.get("/", authToken, sup_access, scheduleController.getAllSchedules);
router.put(
  "/:id",
  authToken,
  // scheduleValidator,
  sup_access,
  scheduleController.updateSchedule
);
router.delete("/:id", authToken, sup_access, scheduleController.deleteSchedule);

module.exports = router;

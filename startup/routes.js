const express = require("express");
// const error  =  require("../middleware/error")

const scheduleRouter = require("../routes/schedule");
const quotationRouter = require("../routes/quotation");
const authRouter = require("../routes/auth");

module.exports = function (app) {
  // set cors
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, GET, PATCH, DELETE");
      return res.status(200).json({});
    }

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/api/v1/schedules", scheduleRouter);
  app.use("/api/v1/quotations", quotationRouter);
  app.use("/api/v1/auth", authRouter);

  app.get("/", (req, res, next) =>{
    res.json({status:true,message:"Noemdek health check passed ✅"})
  })

  

  // app.use(error);
};

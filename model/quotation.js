const { default: mongoose } = require("mongoose");
const softDelete = require('mongoose-delete');

const quotationSchema = mongoose.Schema({
    rfq_number:{type:String, required:true},
    general: {
        type: {
          markup_by_lineitem: { type: String, required: false },
          markup_by_percent: { type: Number, required: false },
          withholding_tax: { type: Number,  required: false  },
          client_monthly_cost: { type: Number, required: false },
          noemdek_monthly_cost: { type: Number, required: false },
          oem_discount: { type: Number, required: false }, 
          payment_timing_after_invoice: { type: Date, required: false },  
        },
        required: false,
      },
      duties_fees: {
        type: {
          surcharge: { type: Number, required: false },
          ciss: { type: String, required: false },
          vat: { type: Number,  required: false  },// should be a number type but for the sake of this task its made a string which i can parse it later to an int
          tls: { type: String, required: false },
          local_clearing: { type: String, required: false },
        },
        required: false,
      },
      freight: {
        type: {
          insurance: { type: String, required: false },
          total_weight: { type: Number, required: false },
          total_freight_cost: { type: Number, required: false  },
          weight_approach: { type: String, required: false },
          delivery_lead_time: { type: String, required: false },
        },
        required: false,
      },
      bio_details: {
        type: {
          product_name: { type: String, required: false },
          port_no: { type: String, required: false },
          long_text_description: { type: String, required: false  },
          mfg_name: { type: String, required: false },
          quantity: { type: Number, required: false },
          unit_price_cif: { type: Number, required: false },
          duty_hs_code: { type: String, required: false },
          duty_rate: { type: Number, required: false },
          total_duty: { type: Number, required: false },
          local_clearing: { type: String, required: false },
          markup_percent: { type: Number, required: false },
          markup: { type: String, required: false },
          unit_price_duties: { type: Number, required: false },
          total_unit_price: { type: Number, required: false },
          stat_uplift: { type: Number, required: false },
          total_uplift: { type: Number, required: false },
        },
        required: false,
      },
    comments:{type:String, required:false},

});

quotationSchema.plugin(softDelete, {
    deletedAt: true 
    });
module.exports = mongoose.model('Quotation', quotationSchema);
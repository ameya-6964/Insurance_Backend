import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  quoteNo: { type: String, required: true, unique: true },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  productCode: { type: String, required: true }, // 9912 (Travel), 1912 (Liability)
  sumInsured: Number,
  duration: Number,
  basePremium: Number,
  tax: Number,
  totalPremium: Number,
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['DRAFT', 'QUOTED', 'CONVERTED'], default: 'DRAFT' }
}, { timestamps: true });

export default mongoose.model('Quote', QuoteSchema);
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  quoteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote' },
  amount: Number,
  txnRef: { type: String, required: true, unique: true },
  method: { type: String, enum: ['UPI', 'CC', 'DC', 'NETBANKING'] },
  status: { type: String, enum: ['SUCCESS', 'FAILED', 'REFUNDED'], default: 'SUCCESS' }
}, { timestamps: true });

export default mongoose.model('Payment', PaymentSchema);
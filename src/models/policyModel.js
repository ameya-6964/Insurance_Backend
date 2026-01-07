import mongoose from 'mongoose';

const PolicySchema = new mongoose.Schema({
  policyNo: { type: String, required: true, unique: true },
  quoteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote' },
  partyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Party' }, // Proposer
  status: { type: String, enum: ['ACTIVE', 'CANCELLED', 'EXPIRED', 'ENDORSED'], default: 'ACTIVE' },
  startDate: Date,
  endDate: Date,
  approvalStatus: { type: String, enum: ['APPROVED', 'PENDING'], default: 'APPROVED' }
}, { timestamps: true });

export default mongoose.model('Policy', PolicySchema);
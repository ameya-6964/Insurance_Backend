import mongoose from 'mongoose';

const ClaimSchema = new mongoose.Schema({
  claimNo: { type: String, required: true, unique: true },
  policyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy' },
  incidentDate: Date,
  lossDescription: String,
  estimatedAmount: Number,
  approvedAmount: { type: Number, default: 0 },
  status: { 
    type: String, 
    enum: ['REGISTERED', 'APPROVED', 'REJECTED', 'SETTLED', 'CLOSED'], 
    default: 'REGISTERED' 
  }
}, { timestamps: true });

export default mongoose.model('Claim', ClaimSchema);
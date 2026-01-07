import mongoose from 'mongoose';

const PartySchema = new mongoose.Schema({
  partyCode: { type: String, required: true, unique: true, uppercase: true },
  firstName: { type: String, required: true },
  lastName: String,
  dob: Date,
  type: { type: String, enum: ['INDIVIDUAL', 'ORGANIZATION'], default: 'INDIVIDUAL' },
  roles: [{ type: String }], // e.g., 'PROPOSER', 'INSURED', 'AGENT'
  addresses: [{
    type: { type: String, default: 'RESIDENCE' },
    line1: String,
    city: String,
    state: String,
    pincode: String
  }],
  contacts: [{
    type: { type: String, enum: ['MOBILE', 'EMAIL'] },
    value: String
  }],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Party', PartySchema);
import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  refId: { type: String, required: true }, // Links to Party/Claim/Policy ID
  refType: { type: String, enum: ['PARTY', 'CLAIM', 'POLICY'] },
  docType: String,
  fileName: String,
  url: String
}, { timestamps: true });

export default mongoose.model('Document', DocumentSchema);
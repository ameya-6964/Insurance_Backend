import mongoose from 'mongoose';

const MasterSchema = new mongoose.Schema({
  type: { type: String, required: true, index: true }, // CITY, PRODUCT, DOCTYPE
  code: { type: String, required: true },
  name: { type: String, required: true },
  metadata: { type: Map, of: String } // Flexible field for extras
});

export default mongoose.model('Master', MasterSchema);
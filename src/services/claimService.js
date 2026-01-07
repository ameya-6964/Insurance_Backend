import Claim from '../models/claimModel.js';

export const register = async (data) => {
  return await Claim.create({
    claimNo: `CLM${Date.now()}`,
    ...data,
    status: 'REGISTERED'
  });
};

export const updateStatus = async (id, status, amount) => {
  const update = { status };
  if (amount) update.approvedAmount = amount;
  return await Claim.findByIdAndUpdate(id, update, { new: true });
};
import Party from '../models/partyModel.js';

export const create = async (data) => {
  // Generate PartyCode if missing
  if (!data.partyCode) data.partyCode = `CUST${Date.now()}`;
  return await Party.create(data);
};

export const update = async (id, data) => {
  return await Party.findByIdAndUpdate(id, data, { new: true });
};

export const search = async (filters) => {
  const query = {};
  if (filters.name) query.firstName = { $regex: filters.name, $options: 'i' };
  if (filters.partyCode) query.partyCode = filters.partyCode;
  return await Party.find(query);
};

export const getById = async (id) => await Party.findById(id);

export const assignRole = async (id, role) => {
  return await Party.findByIdAndUpdate(id, { $addToSet: { roles: role } }, { new: true });
};

export const addAddress = async (id, address) => {
  return await Party.findByIdAndUpdate(id, { $push: { addresses: address } }, { new: true });
};
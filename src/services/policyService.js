import Policy from '../models/policyModel.js';
import Quote from '../models/quoteModel.js';

export const issue = async (quoteId) => {
  const quote = await Quote.findById(quoteId);
  if (!quote) throw new Error('Quote not found');

  // Logic: Check if payment exists (omitted for brevity, assume paid)
  
  const policy = await Policy.create({
    policyNo: `POL${Date.now()}`,
    quoteId,
    partyId: quote.partyId,
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  });

  await Quote.findByIdAndUpdate(quoteId, { status: 'CONVERTED' });
  return policy;
};

export const endorse = async (id, data) => {
  // Logic: Update fields and log history (simplified here)
  return await Policy.findByIdAndUpdate(id, { ...data, status: 'ENDORSED' }, { new: true });
};

export const renew = async (id) => {
  const oldPolicy = await Policy.findById(id);
  // Clone and create new period
  return await Policy.create({
    policyNo: `POL${Date.now()}-RN`,
    quoteId: oldPolicy.quoteId,
    partyId: oldPolicy.partyId,
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  });
};
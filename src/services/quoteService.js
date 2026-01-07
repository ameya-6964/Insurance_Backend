import Quote from '../models/quoteModel.js';

export const calculate = async (data) => {
  const { productCode, sumInsured } = data;
  
  // Business Rule: Travel(9912) = 2%, Liability(1912) = 5%
  const rate = productCode === '9912' ? 0.02 : 0.05;
  const basePremium = sumInsured * rate;
  const tax = basePremium * 0.18;
  const totalPremium = basePremium + tax;

  const quote = await Quote.create({
    quoteNo: `Q${Date.now()}`,
    ...data,
    basePremium,
    tax,
    totalPremium,
    status: 'DRAFT'
  });
  return quote;
};

export const issue = async (id) => {
  return await Quote.findByIdAndUpdate(id, { status: 'QUOTED' }, { new: true });
};
import Payment from '../models/paymentModel.js';

export const collect = async (data) => {
  // In real life, integrate Stripe/Razorpay here
  return await Payment.create({
    ...data,
    status: 'SUCCESS'
  });
};

export const refund = async (id) => {
  return await Payment.findByIdAndUpdate(id, { status: 'REFUNDED' }, { new: true });
};
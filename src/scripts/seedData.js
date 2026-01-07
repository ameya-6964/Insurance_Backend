import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from '../config/database.js';

// Import Models
import Master from '../models/masterModel.js';
import Party from '../models/partyModel.js';
import Quote from '../models/quoteModel.js';
import Policy from '../models/policyModel.js';
import Claim from '../models/claimModel.js';
import Payment from '../models/paymentModel.js';

dotenv.config();

const seed = async () => {
  try {
    await connectDB();
    console.log('🌱 Connected to MongoDB...');

    // 1. CLEAR EXISTING DATA
    console.log('🗑️  Clearing existing data...');
    await Master.deleteMany({});
    await Party.deleteMany({});
    await Quote.deleteMany({});
    await Policy.deleteMany({});
    await Claim.deleteMany({});
    await Payment.deleteMany({});

    // 2. SEED MASTER DATA
    console.log('📦 Seeding Master Data...');
    await Master.insertMany([
      { type: 'CITY', code: 'MUM', name: 'Mumbai', metadata: { state: 'MAHARASHTRA' } },
      { type: 'CITY', code: 'DEL', name: 'Delhi', metadata: { state: 'DELHI' } },
      { type: 'CITY', code: 'BLR', name: 'Bangalore', metadata: { state: 'KARNATAKA' } },
      { type: 'PRODUCT', code: '9912', name: 'Travel Individual' },
      { type: 'PRODUCT', code: '1912', name: 'Public Liability' },
      { type: 'DOCTYPE', code: 'PAN', name: 'PAN Card' },
      { type: 'DOCTYPE', code: 'AADHAR', name: 'Aadhar Card' },
      { type: 'CURRENCY', code: 'INR', name: 'Indian Rupee' }
    ]);

    // 3. SEED PARTIES (CUSTOMERS)
    console.log('busts Seeding Parties...');
    const parties = await Party.insertMany([
      {
        partyCode: 'CUST001',
        firstName: 'Raj',
        lastName: 'Sharma',
        dob: '1985-06-15',
        type: 'INDIVIDUAL',
        roles: ['PROPOSER', 'INSURED'],
        addresses: [{ line1: '101, Sea View', city: 'MUMBAI', state: 'MAHARASHTRA', pincode: '400001' }],
        contacts: [{ type: 'EMAIL', value: 'raj.sharma@example.com' }, { type: 'MOBILE', value: '9876543210' }]
      },
      {
        partyCode: 'CUST002',
        firstName: 'Priya',
        lastName: 'Verma',
        dob: '1990-02-20',
        type: 'INDIVIDUAL',
        roles: ['PROPOSER'],
        addresses: [{ line1: 'Flat 5, Green Park', city: 'DELHI', state: 'DELHI', pincode: '110016' }],
        contacts: [{ type: 'EMAIL', value: 'priya.v@example.com' }]
      }
    ]);

    const rajId = parties[0]._id;
    const priyaId = parties[1]._id;

    // 4. SEED QUOTES
    console.log('📝 Seeding Quotes...');
    const quotes = await Quote.insertMany([
      {
        quoteNo: 'Q2025001',
        partyId: rajId,
        productCode: '9912',
        sumInsured: 500000,
        basePremium: 2000,
        tax: 360,
        totalPremium: 2360,
        status: 'CONVERTED' // This one became a policy
      },
      {
        quoteNo: 'Q2025002',
        partyId: priyaId,
        productCode: '1912',
        sumInsured: 1000000,
        basePremium: 5000,
        tax: 900,
        totalPremium: 5900,
        status: 'QUOTED' // Still a quote
      }
    ]);

    const convertedQuoteId = quotes[0]._id;

    // 5. SEED POLICIES
    console.log('📜 Seeding Policies...');
    const policies = await Policy.insertMany([
      {
        policyNo: 'POL2025001',
        quoteId: convertedQuoteId,
        partyId: rajId,
        status: 'ACTIVE',
        productCode: '9912',
        startDate: new Date('2025-01-01'),
        endDate: new Date('2026-01-01'),
        approvalStatus: 'APPROVED'
      }
    ]);

    const activePolicyId = policies[0]._id;

    // 6. SEED CLAIMS
    console.log('⚠️ Seeding Claims...');
    await Claim.insertMany([
      {
        claimNo: 'CLM9001',
        policyId: activePolicyId,
        incidentDate: new Date('2025-06-15'),
        lossDescription: 'Lost baggage at airport',
        estimatedAmount: 15000,
        status: 'REGISTERED'
      }
    ]);

    // 7. SEED PAYMENTS
    console.log('💳 Seeding Payments...');
    await Payment.insertMany([
      {
        quoteId: convertedQuoteId,
        amount: 2360,
        txnRef: 'TXN_UPI_123456',
        method: 'UPI',
        status: 'SUCCESS'
      }
    ]);

    console.log('✅ Database Seeded Successfully!');
    process.exit();

  } catch (error) {
    console.error(`❌ Error Seeding Data: ${error.message}`);
    process.exit(1);
  }
};

seed();
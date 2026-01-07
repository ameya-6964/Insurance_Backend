import Master from '../models/masterModel.js';

// ... other functions ...

export const seed = async () => {
  // 1. Check if data already exists to prevent duplicates
  if (await Master.countDocuments() === 0) {
    
    // 2. Insert the Initial "DB.json" equivalent data
    await Master.insertMany([
      { type: 'CITY', code: 'MUM', name: 'Mumbai' },
      { type: 'CITY', code: 'DEL', name: 'Delhi' },
      { type: 'PRODUCT', code: '9912', name: 'Travel Insurance' },
      { type: 'PRODUCT', code: '1912', name: 'Liability Insurance' },
      { type: 'DOCTYPE', code: 'PAN', name: 'PAN Card' },
      { type: 'DOCTYPE', code: 'AADHAR', name: 'Aadhar Card' }
    ]);
    
    console.log('Database Seeded Successfully');
  }
};
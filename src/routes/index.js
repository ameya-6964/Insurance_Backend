import express from 'express';
import * as PartyCtrl from '../controllers/partyController.js';
import * as QuoteCtrl from '../controllers/quoteController.js';
import * as PolicyCtrl from '../controllers/policyController.js';
import * as ClaimCtrl from '../controllers/claimController.js';
import * as MasterCtrl from '../controllers/masterController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// --- PARTY ---
router.post('/parties', PartyCtrl.createParty);
router.put('/parties/:id', protect, PartyCtrl.updateParty);
router.get('/parties/search', PartyCtrl.searchParties);
router.get('/parties/:id', PartyCtrl.getParty);
router.post('/parties/:id/roles', PartyCtrl.assignRole);
router.post('/parties/:id/addresses', PartyCtrl.addAddress);

// --- MASTER DATA ---
router.get('/masters/cities', MasterCtrl.getCities);
router.post('/masters/seed', MasterCtrl.seedData);

// --- QUOTE ---
router.post('/quotes/calculate/travel', QuoteCtrl.calculateTravel);
router.post('/quotes/:id/issue', QuoteCtrl.issueQuote);

// --- POLICY ---
router.post('/policies/issue', protect, PolicyCtrl.issuePolicy);
router.post('/policies/:id/renew', protect, PolicyCtrl.renewPolicy);

// --- CLAIMS ---
router.post('/claims', protect, ClaimCtrl.registerClaim);
router.put('/claims/:id/approve', protect, ClaimCtrl.approveClaim);

// --- AUTH MOCK ---
router.post('/auth/login', (req, res) => {
  // In real app, use AuthController
  res.json({ success: true, token: "MOCK_JWT_FOR_TESTING" });
});

export default router;
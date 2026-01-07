import * as ClaimService from '../services/claimService.js';
import AsyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const registerClaim = AsyncHandler(async (req, res) => {
  const data = await ClaimService.register(req.body);
  new ApiResponse(res, 201, 'Claim Registered', data).send();
});

export const approveClaim = AsyncHandler(async (req, res) => {
  const data = await ClaimService.updateStatus(req.params.id, 'APPROVED', req.body.amount);
  new ApiResponse(res, 200, 'Claim Approved', data).send();
});
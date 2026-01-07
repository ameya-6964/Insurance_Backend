import * as PolicyService from '../services/policyService.js';
import AsyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const issuePolicy = AsyncHandler(async (req, res) => {
  const data = await PolicyService.issue(req.body.quoteId);
  new ApiResponse(res, 201, 'Policy Issued', data).send();
});

export const renewPolicy = AsyncHandler(async (req, res) => {
  const data = await PolicyService.renew(req.params.id);
  new ApiResponse(res, 200, 'Policy Renewed', data).send();
});
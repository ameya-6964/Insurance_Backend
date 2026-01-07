import * as QuoteService from '../services/quoteService.js';
import AsyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const calculateTravel = AsyncHandler(async (req, res) => {
  const data = await QuoteService.calculate({ ...req.body, productCode: '9912' });
  new ApiResponse(res, 201, 'Travel Quote Calculated', data).send();
});

export const issueQuote = AsyncHandler(async (req, res) => {
  const data = await QuoteService.issue(req.params.id);
  new ApiResponse(res, 200, 'Quote Issued', data).send();
});
import * as MasterService from '../services/masterService.js';
import AsyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const getCities = AsyncHandler(async (req, res) => {
  const data = await MasterService.getByType('CITY');
  new ApiResponse(res, 200, 'Cities Fetched', data).send();
});

export const seedData = AsyncHandler(async (req, res) => {
  await MasterService.seed();
  new ApiResponse(res, 200, 'Data Seeded').send();
});
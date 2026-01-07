import * as PartyService from '../services/partyService.js';
import AsyncHandler from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

export const createParty = AsyncHandler(async (req, res) => {
  const data = await PartyService.create(req.body);
  new ApiResponse(res, 201, 'Party Created', data).send();
});

export const updateParty = AsyncHandler(async (req, res) => {
  const data = await PartyService.update(req.params.id, req.body);
  new ApiResponse(res, 200, 'Party Updated', data).send();
});

export const searchParties = AsyncHandler(async (req, res) => {
  const data = await PartyService.search(req.query);
  new ApiResponse(res, 200, 'Search Results', data).send();
});

export const getParty = AsyncHandler(async (req, res) => {
  const data = await PartyService.getById(req.params.id);
  new ApiResponse(res, 200, 'Party Details', data).send();
});

export const assignRole = AsyncHandler(async (req, res) => {
  const data = await PartyService.assignRole(req.params.id, req.body.role);
  new ApiResponse(res, 200, 'Role Assigned', data).send();
});

export const addAddress = AsyncHandler(async (req, res) => {
  const data = await PartyService.addAddress(req.params.id, req.body);
  new ApiResponse(res, 200, 'Address Added', data).send();
});
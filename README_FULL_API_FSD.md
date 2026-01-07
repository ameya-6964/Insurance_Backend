# Integrated Insurance Management System (IIMS)
## API Functional Specification Document (API FSD) — Implementation Verified

Version: 1.0 (As-Is from codebase)
Backend: Node.js + Express.js
Database: MongoDB + Mongoose
API Base Path: /api/v1
Security: JWT Bearer (with legacy bypass header)
Response Standard: ApiResponse wrapper + centralized ErrorHandler

---

## 1. Document Scope

### 1.1 In-Scope (Verified in Code)

This FSD covers all implemented endpoints found in:

- src/routes/index.js
- src/controllers/*
- src/services/*
- src/models/*
- src/middlewares/authMiddleware.js
- src/middlewares/errorHandler.js

### 1.2 Not in Scope (Not Implemented / Not Wired in Routes)

- Payment APIs (model + service exist, no routes/controller)
- Document APIs (model exists, no routes/controller)
- Large parts of Master Data APIs (only Cities + Seed exist)
- Liability quote calculation endpoint (not implemented)
- Policy endorsement/cancel/search/get endpoints (not implemented)
- Full claims workflow endpoints (reject/settle/reopen/docs etc. not implemented)
- Soft delete party, contacts, addresses GET, roles GET (not implemented)

---

## 2. API Standards

### Common Headers

Content-Type: application/json
Authorization: Bearer <JWT>
IsAuthenticationRequired: N

---

## 3. Authentication & Security

Protected endpoints use JWT validation middleware.
Login endpoint returns a mock token.

---

## 4. Standard Response Format

### Success
{
  "success": true,
  "message": "string",
  "data": {},
  "timestamp": "ISODate"
}

### Error
{
  "success": false,
  "error": "string",
  "stack": "only in development"
}

---

## 5. API Inventory (Verified)

### Party Management
- POST /api/v1/parties
- PUT /api/v1/parties/:id
- GET /api/v1/parties/search
- GET /api/v1/parties/:id
- POST /api/v1/parties/:id/roles
- POST /api/v1/parties/:id/addresses

### Master Data
- GET /api/v1/masters/cities
- POST /api/v1/masters/seed

### Quote
- POST /api/v1/quotes/calculate/travel
- POST /api/v1/quotes/:id/issue

### Policy
- POST /api/v1/policies/issue
- POST /api/v1/policies/:id/renew

### Claims
- POST /api/v1/claims
- PUT /api/v1/claims/:id/approve

### Authentication
- POST /api/v1/auth/login

---

## 6. Data Dictionary

Parties, Quotes, Policies, Claims, Payments, Documents

---

## 7. Variance Summary

Expected APIs: 58
Implemented APIs: 16

---

## 8. Done Definition

All routes, controllers, services, and validations must be implemented.

/**
 * Standardized API Response structure for consistent output.
 */
export class ApiResponse {
  constructor(res, statusCode, message, data = null) {
    this.res = res;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  send() {
    return this.res.status(this.statusCode).json({
      success: this.statusCode >= 200 && this.statusCode < 300,
      message: this.message,
      data: this.data,
      timestamp: new Date().toISOString()
    });
  }
}
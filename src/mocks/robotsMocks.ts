import { type NextFunction, type Request, type Response } from "express";

export const mockRequest: Partial<Request> = {};
export const mockStatus = jest.fn().mockReturnThis();
export const mockJson = jest.fn().mockReturnThis();
export const mockNext: Partial<NextFunction> = jest.fn();

export const mockResponse: Partial<Response> = {
  status: mockStatus,
  json: mockJson,
};

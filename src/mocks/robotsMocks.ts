import { type NextFunction, type Request, type Response } from "express";

export const mockRequest = {} as Request;
export const mockStatus = jest.fn().mockReturnThis();
export const mockJson = jest.fn().mockReturnThis();
export const mockNext = jest.fn() as NextFunction;

export const mockResponse = {
  status: mockStatus,
  json: mockJson,
} as Partial<Response>;

import CustomError from "../../CustomError/CustomError";
import generalError from "./errorMiddlewares";
import { type Request, type NextFunction, type Response } from "express";

describe("Given a generalError function", () => {
  describe("When it receives an error with status 500", () => {
    test("Then it should show an error with status 500", () => {
      const statusCode = 500;
      const mockError = new CustomError("", statusCode, "");
      const mockRequest: Partial<Request> = {};
      const mockStatus = jest.fn().mockReturnThis();
      const mockResponse: Partial<Response> = {
        status: mockStatus,
        json: jest.fn(),
      };
      const next = {};

      generalError(
        mockError,
        mockRequest as Request,
        mockResponse as Response,
        next as NextFunction
      );

      expect(mockStatus).toHaveBeenCalledWith(statusCode);
    });
  });

  describe("When it receives an error with the public message 'This is General Pete speaking'", () => {
    test("Then it should show the client an error with message 'This is General Pete speaking", () => {
      const errorMessage = "This is General Pete speaking";
      const mockError = new CustomError("", 400, errorMessage);
      const mockRequest: Partial<Request> = {};
      const mockStatus = jest.fn().mockReturnThis();
      const mockJson = jest.fn().mockReturnThis();
      const mockResponse: Partial<Response> = {
        status: mockStatus,
        json: mockJson,
      };
      const next = {};

      generalError(
        mockError,
        mockRequest as Request,
        mockResponse as Response,
        next as NextFunction
      );

      const expectedErrorWithMessage = { error: errorMessage };

      expect(mockJson).toHaveBeenCalledWith(expectedErrorWithMessage);
    });
  });
});

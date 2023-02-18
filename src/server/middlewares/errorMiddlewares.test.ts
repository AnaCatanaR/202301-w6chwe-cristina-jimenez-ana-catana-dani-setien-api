import { CustomError } from "../../CustomError/CustomError";
import { type Request, type NextFunction, type Response } from "express";
import generalError from "./generalError/generalError";
import {
  mockJson,
  mockNext,
  mockRequest,
  mockResponse,
  mockStatus,
} from "../../mocks/robotsMocks";
import { notFoundError } from "./errorMiddlewares";

describe("Given a generalError function", () => {
  describe("When it receives an error with status 500", () => {
    test("Then it should show an error with status 500", () => {
      const statusCode = 500;
      const mockError = new CustomError("", statusCode, "");

      generalError(
        mockError,
        mockRequest as Request,
        mockResponse as Response,
        mockNext as NextFunction
      );

      expect(mockStatus).toHaveBeenCalledWith(statusCode);
    });
  });

  describe("When it receives an error with the public message 'This is General Pete speaking'", () => {
    test("Then it should show the client an error with message 'This is General Pete speaking", () => {
      const errorMessage = "This is General Pete speaking";
      const mockError = new CustomError("", 400, errorMessage);

      generalError(
        mockError,
        mockRequest as Request,
        mockResponse as Response,
        mockNext as NextFunction
      );

      const expectedErrorWithMessage = { error: errorMessage };

      expect(mockJson).toHaveBeenCalledWith(expectedErrorWithMessage);
    });
  });
});

describe("Given a notFoundError function", () => {
  describe("When it is called", () => {
    test("Then it should pass down an error with status 404", () => {
      notFoundError(
        mockRequest as Request,
        mockResponse as Response,
        mockNext as NextFunction
      );

      const expectedError = new CustomError(
        "An unhandled response has arrived",
        404,
        "Not found."
      );

      expect(mockNext).toHaveBeenCalledWith(expectedError);
    });
  });
});

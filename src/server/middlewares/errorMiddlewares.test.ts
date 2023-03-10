import { CustomError } from "../../CustomError/CustomError";
import { type Response } from "express";
import generalError from "./generalError/generalError";
import {
  mockJson,
  mockNext,
  mockRequest,
  mockResponse as res,
  mockStatus,
} from "../../mocks/robotsMocks";
import { notFoundError } from "./errorMiddlewares";

const mockResponse = res as Response;

describe("Given a generalError function", () => {
  describe("When it receives an error with status 500", () => {
    test("Then it should show an error with status 500", () => {
      const statusCode = 500;
      const mockError = new CustomError("", statusCode, "");

      generalError(mockError, mockRequest, mockResponse, mockNext);

      expect(mockStatus).toHaveBeenCalledWith(statusCode);
    });
  });

  describe("When it receives an error with the public message 'This is General Pete speaking'", () => {
    test("Then it should show the client an error with message 'This is General Pete speaking", () => {
      const errorMessage = "This is General Pete speaking";
      const mockError = new CustomError("", 400, errorMessage);

      generalError(mockError, mockRequest, mockResponse, mockNext);

      const expectedErrorWithMessage = { error: errorMessage };

      expect(mockJson).toHaveBeenCalledWith(expectedErrorWithMessage);
    });
  });
});

describe("Given a notFoundError function", () => {
  describe("When it is called", () => {
    test("Then it should pass down an error with status 404", () => {
      notFoundError(mockRequest, mockResponse, mockNext);

      const expectedError = new CustomError(
        "An unhandled response has arrived",
        404,
        "Not found."
      );

      expect(mockNext).toHaveBeenCalledWith(expectedError);
    });
  });
});

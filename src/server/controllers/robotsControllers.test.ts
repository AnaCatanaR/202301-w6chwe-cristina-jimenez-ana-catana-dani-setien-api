import { type NextFunction, type Request, type Response } from "express";
import { Robot } from "../../database/models/robotSchema";
import {
  mockNext,
  mockRequest,
  mockResponse,
  mockStatus,
} from "../../mocks/robotsMocks";
import getRobots from "./robotsController";

describe("Given the getRobots controller", () => {
  describe("When it receives a reponse object", () => {
    test("Then it should call its status method with 200", async () => {
      const expectedStatusCode = 200;

      Robot.find = jest.fn().mockReturnValue({});

      await getRobots(
        mockRequest as Request,
        mockResponse as Response,
        mockNext as NextFunction
      );

      expect(mockStatus).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with property robots assigned to an empty object", async () => {
      Robot.find = jest.fn().mockReturnValue({});

      const expectedEmptyObject = { robots: {} };

      const mockJson = jest.fn().mockResolvedValue({});

      const mockResponse: Partial<Response> = {
        status: mockStatus,
        json: mockJson,
      };

      await getRobots(
        mockRequest as Request,
        mockResponse as Response,
        mockNext as NextFunction
      );

      expect(mockJson).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});

import { type Request, type Response } from "express";
import { Robot } from "../../database/models/robotSchema";
import {
  mockNext,
  mockRequest,
  mockResponse,
  mockStatus,
} from "../../mocks/robotsMocks";
import { type RobotStructure } from "../../types";
import { createRobot, getRobots } from "./robotsController";

describe("Given the getRobots controller", () => {
  describe("When it receives a reponse object", () => {
    test("Then it should call its status method with 200", async () => {
      const expectedStatusCode = 200;
      Robot.find = jest.fn().mockReturnValue({});

      await getRobots(mockRequest, mockResponse as Response, mockNext);

      expect(mockStatus).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with property robots assigned to an empty object", async () => {
      const expectedEmptyObject = { robots: {} };
      const mockJson = jest.fn().mockResolvedValue({});
      const mockResponse: Partial<Response> = {
        status: mockStatus,
        json: mockJson,
      };
      Robot.find = jest.fn().mockReturnValue({});

      await getRobots(mockRequest, mockResponse as Response, mockNext);

      expect(mockJson).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});

describe("Given the createRobot controller", () => {
  describe("When it receives a response with a body with robot structure", () => {
    test("Then it should call its status method with 201", async () => {
      const expectedStatusCode = 201;
      const mockStatus = jest.fn().mockReturnThis();
      const mockRequest = {
        body: {
          name: "",
          image: "",
          attributes: { creationDate: "", speed: 1, resistance: 1 },
        } as RobotStructure,
      };
      const mockResponse: Partial<Response> = {
        status: mockStatus,
      };
      Robot.create = jest.fn().mockReturnValue({});

      await createRobot(
        mockRequest as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockStatus).toBeCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with property newRobot assigned to an empty object", async () => {
      const mockStatus = jest.fn().mockReturnThis();
      const mockJson = jest.fn().mockResolvedValue({});
      const mockRequest = {
        body: {
          name: "",
          image: "",
          attributes: { creationDate: "", speed: 1, resistance: 1 },
        },
      };
      const mockResponse: Partial<Response> = {
        status: mockStatus,
        json: mockJson,
      };
      const expectedEmptyObject = { newRobot: {} };
      Robot.create = jest.fn().mockReturnValue({});

      await createRobot(
        mockRequest as Request<
          Record<string, unknown>,
          Record<string, unknown>,
          RobotStructure
        >,
        mockResponse as Response,
        mockNext
      );

      expect(mockJson).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});

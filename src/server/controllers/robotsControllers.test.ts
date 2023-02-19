import { type Request, type Response } from "express";
import { Robot } from "../../database/models/robotSchema";
import {
  mockNext,
  mockRequest,
  mockResponse,
  mockStatus,
} from "../../mocks/robotsMocks";
import { getRobots, getRobotById, createRobot } from "./robotsController";
import { type RobotDataStructure, type RobotStructure } from "../../types";

const mockRobot: RobotStructure = {
  id: "4",
  name: "C3PO",
  image: "",
  attributes: {
    speed: 1,
    resistance: 1,
    creationDate: "2018-01-01",
  },
};

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

describe("Given the getRobotsById controller", () => {
  describe("When it receives a request", () => {
    test("Then it should call its status method with a 200 code", async () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
      } as Partial<Response>;

      const mockRequest: Partial<Request> = {
        params: { id: `${mockRobot.id}` },
      };

      const expectedStatusCode = 200;

      Robot.findById = jest.fn().mockReturnValue(mockRobot);

      await getRobotById(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockResponse.status).toHaveBeenLastCalledWith(expectedStatusCode);
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
        } as RobotDataStructure,
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

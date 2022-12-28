import { Map, Position, Rover } from "../src/marsRover";

describe("marsRover", () => {
  it("should initialize the rover", () => {
    const rover = new Rover();
    expect(rover.execute("")).toBe("0,0:N");
  });

  /**
   ** turn at Right
   **/
  it("should rotate right 90 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("R")).toBe("0,0:E");
  });

  it("should rotate right 180 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("RR")).toBe("0,0:S");
  });

  it("should rotate right 270 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("RRR")).toBe("0,0:W");
  });

  it("should rotate right 360 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("RRRR")).toBe("0,0:N");
  });

  /**
   ** Turn at Left
   **/
  it("should rotate left 90 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("L")).toBe("0,0:W");
  });

  it("should rotate left 180 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("LL")).toBe("0,0:S");
  });

  it("should rotate left 270 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("LLL")).toBe("0,0:E");
  });

  it("should rotate left 360 degrees", () => {
    const rover = new Rover();
    expect(rover.execute("LLLL")).toBe("0,0:N");
  });

  /**
   ** Move
   **/
  it("should move one position up", () => {
    const rover = new Rover();
    expect(rover.execute("M")).toBe("1,0:N");
  });

  it("should move two positions up", () => {
    const rover = new Rover();
    expect(rover.execute("MM")).toBe("2,0:N");
  });

  it("should move one position right", () => {
    const rover = new Rover();
    expect(rover.execute("RM")).toBe("0,1:E");
  });

  it("should move south two positions", () => {
    const rover = new Rover();
    expect(rover.execute("MMMRRMM")).toBe("1,0:S");
  });

  it("should move west two positions", () => {
    const rover = new Rover();
    expect(rover.execute("RMMMLLMM")).toBe("0,1:W");
  });

  it("should wrap the map when going north", () => {
    const rover = new Rover();
    expect(rover.execute("MMMMMMMMMMM")).toBe("1,0:N");
  });

  it("should wrap the map when going south", () => {
    const rover = new Rover();
    expect(rover.execute("RRM")).toBe("9,0:S");
  });

  it("should wrap the map when going right", () => {
    const rover = new Rover();
    expect(rover.execute("RMMMMMMMMMM")).toBe("0,0:E");
  });

  it("should wrap the map when going left", () => {
    const rover = new Rover();
    expect(rover.execute("LMM")).toBe("0,8:W");
  });

  it("should detect and inform an obstacle", () => {
    const obstacle = new Position(1, 0);
    const map = new Map([obstacle]);
    const rover = new Rover(map);

    expect(rover.execute("M")).toBe("0,0:N,Obstacle!");
  });
});

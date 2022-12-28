const MAX_Y = 10;
const MAX_X = 10;
const collisionErrorMessage = "imminent collision";

const directions: Array<string> = ["N", "E", "S", "W"];

export class Map {
  constructor(private obstacles?: Position[]) {}

  moveNext(position: Position, direction: Direction): Position {
    let y = position.y;
    let x = position.x;

    if (direction.toString() === "N") y = (y + 1) % MAX_Y;
    if (direction.toString() === "E") x = (x + 1) % MAX_X;
    if (direction.toString() === "S") y = y === 0 ? MAX_Y - 1 : y - 1;
    if (direction.toString() === "W") x = x === 0 ? MAX_X - 1 : x - 1;

    this.validateNewPositionIsNotAnObstacle(y, x);
    return new Position(y, x);
  }

  private validateNewPositionIsNotAnObstacle(y: number, x: number): void {
    if (
      this.obstacles?.some((obstacle) => obstacle.y === y && obstacle.x === x)
    )
      throw new Error(collisionErrorMessage);
  }
}

export class Position {
  constructor(public y: number, public x: number) {}

  toString(): string {
    return `${this.y},${this.x}`;
  }
}

export class Direction {
  private position = 0;

  toString(): string {
    return directions[this.position];
  }

  rotateRight(): void {
    this.position++;
    if (this.position === 4) this.position = 0;
  }

  rotateLeft(): void {
    this.position--;
    if (this.position === -1) this.position = 3;
  }
}

export class Rover {
  private direction = new Direction();
  private position = new Position(0, 0);
  private map: Map;

  constructor(map?: Map) {
    this.map = map || new Map();
  }

  execute(commands: string): string {
    for (const command of commands) {
      if (command === "R") this.direction.rotateRight();
      if (command === "L") this.direction.rotateLeft();
      if (command === "M") {
        try {
          this.position = this.map.moveNext(this.position, this.direction);
        } catch (error: any) {
          if (error.message === "imminent collision") {
            return `${this.position}:${this.direction},Obstacle!`;
          }
        }
      }
    }

    return `${this.position}:${this.direction}`;
  }
}

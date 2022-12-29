import {
  BankAccount,
  BankStatementRepository,
  Statement,
  iStatementRepository,
} from "../src/bank";

describe("bank Test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should print the header of the statement", () => {
    const logSpy = jest.spyOn(console, "log");
    const mockRepository: iStatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([]),
    };
    const account = new BankAccount(mockRepository);

    account.printStatements();

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Date\t\tAmount\t\tBalance");
  });

  it("should print the header and one deposit statement", () => {
    const logSpy = jest.spyOn(console, "log");
    const statement1 = new Statement(new Date("3/15/2025"), 400, 400);
    const mockRepository: iStatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([statement1]),
    };
    const account = new BankAccount(mockRepository);

    account.deposit(400);
    account.printStatements();

    expect(logSpy).toBeCalledTimes(2);
    expect(logSpy).nthCalledWith(1, "Date\t\tAmount\t\tBalance");
    expect(logSpy).nthCalledWith(2, "15.03.2025\t\t+400\t\t400");
  });

  it("should print the header and one withDraw statement", () => {
    const logSpy = jest.spyOn(console, "log");
    const statement1 = new Statement(new Date("3/5/2025"), -400, -400);
    const mockRepository: iStatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([statement1]),
    };
    const account = new BankAccount(mockRepository);

    account.withDraw(400);
    account.printStatements();

    expect(logSpy).toBeCalledTimes(2);
    expect(logSpy).nthCalledWith(1, "Date\t\tAmount\t\tBalance");
    expect(logSpy).nthCalledWith(2, "05.03.2025\t\t-400\t\t-400");
  });

  it("should print the header and two operations", () => {
    const logSpy = jest.spyOn(console, "log");
    const statement1 = new Statement(new Date("3/5/2025"), -400, -400);
    const statement2 = new Statement(new Date("11/13/2025"), 1400, 600);
    const mockRepository: iStatementRepository = {
      addStatement: jest.fn(),
      getAllStatements: jest.fn().mockReturnValue([statement1, statement2]),
    };
    const account = new BankAccount(mockRepository);

    account.withDraw(400);
    account.deposit(1400);
    account.printStatements();

    expect(logSpy).toBeCalledTimes(3);
    expect(logSpy).nthCalledWith(1, "Date\t\tAmount\t\tBalance");
    expect(logSpy).nthCalledWith(2, "05.03.2025\t\t-400\t\t-400");
    expect(logSpy).nthCalledWith(3, "13.11.2025\t\t+1400\t\t600");
  });
});

describe("bankStatementRepository Test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should add new Statement in the repository", () => {
    const bankStatementRepository = new BankStatementRepository();
    const statement = new Statement(new Date(), 100, 100);

    bankStatementRepository.addStatement(statement);

    expect(bankStatementRepository.getAllStatements()).toEqual([statement]);
  });
});

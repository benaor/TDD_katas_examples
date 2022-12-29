export interface iStatementRepository {
  addStatement(statement: Statement): void;
  getAllStatements(): Array<Statement>;
}

export interface iAccount {
  deposit(amount: number): void;
  withDraw(amount: number): void;
  printStatements(): void;
}

export class Statement {
  constructor(
    private date: Date,
    private amount: number,
    private balance: number
  ) {}

  toString(): string {
    const date = this.date.getDate();
    const month = this.date.getMonth() + 1;
    return (
      `${date < 10 ? "0" + date : date}.${
        month < 10 ? "0" + month : month
      }.${this.date.getFullYear()}` +
      `\t\t${this.amount >= 0 ? "+" + this.amount : this.amount}\t\t${
        this.balance
      }`
    );
  }
}

export class BankAccount implements iAccount {
  private balance = 0;

  constructor(private statementRepository: iStatementRepository) {}

  deposit(amount: number): void {
    this.balance = this.balance + amount;
    const statement = new Statement(new Date(), amount, this.balance);
    this.statementRepository.addStatement(statement);
  }

  withDraw(amount: number): void {
    this.balance = this.balance - amount;
    const statement = new Statement(new Date(), amount, this.balance);
    this.statementRepository.addStatement(statement);
  }

  printStatements(): void {
    console.log("Date\t\tAmount\t\tBalance");
    for (const statement of this.statementRepository.getAllStatements()) {
      console.log(statement.toString());
    }
  }
}

export class BankStatementRepository implements iStatementRepository {
  private statements = new Array<Statement>();

  addStatement(statement: Statement): void {
    this.statements.push(statement);
  }

  getAllStatements(): Statement[] {
    return this.statements
  }
}

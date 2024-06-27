class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
  addItem(item: string) {
    console.log(`Adding item to database: ${item}`);
  }
}

class Application {
  database: Database;

  constructor() {
    this.database = Database.getInstance();
  }
  addItems() {
    console.log("Adding items to database");

    const dbInstance = Database.getInstance();
    dbInstance.addItem("item1");
    const dbInstance2 = Database.getInstance();
    dbInstance2.addItem("item2");
  }
}

export {};

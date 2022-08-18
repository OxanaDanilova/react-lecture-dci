class User {
  constructor(userName, location) {
    this.userName = userName;
    this.location = location;
  }
  logIn() {
    console.log(`${this.userName}! You are logged in from ${this.location}!`);
  }
}

const maxim = new User("Maxim", "Berlin"); // neue Instanz der Klasse User

maxim.logIn();

class superUser extends User {
  constructor(userName, location, permissions) {
    super(userName, location);
    this.permissions = permissions;
  }
  deleteUser(id) {
    console.log(`User ${id} deleted!`);
  }
}

const adminUser1 = new superUser("Manfred", "Moscow", "admin");

adminUser1.logIn();
adminUser1.deleteUser(1);

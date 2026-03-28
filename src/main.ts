///// TypeScript Assignment.
///// Part A - System: Simple Notes Management System.

// 1. Base Class – User.
class User {
  private _age!: number;

  // 5. Aggregation – User and Notebook.
  public notebooks: NoteBook[] = [];

  constructor(
    public Id: number,
    public name: string,
    public email: string,
    public password: string,
    public phone: string,
    age: number,
  ) {
    this.age = age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value >= 18 && value <= 60) {
      this._age = value;
    } else {
      throw new Error("Age must be between 18 and 60.");
    }
  }

  addNotebook(notebook: NoteBook) {
    this.notebooks.push(notebook);
  }

  displayInfo() {
    console.log({
      id: this.Id,
      name: this.name,
      email: this.email,
      password: this.password,
      phone: this.phone,
      age: this.age,
    });
  }
}

// 2. Inheritance – Admin User.
class Admin extends User {
  constructor(
    Id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number,
  ) {
    super(Id, name, email, password, phone, age);
  }
  manageNotes() {
    console.log(`Admin ${this.name} is managing all notes.`);
  }
}

// 3. Class - Note.
class Note {
  constructor(
    public Id: number,
    public title: string,
    public content: string,
    // 6.Association – Note and User.
    public author: User /*Reference to User, not user Id*/,
  ) {}

  preview() {
    console.log({
      Id: this.Id,
      title: this.title,
      content: this.content,
    });
  }
}

// 4. Composition– NoteBook and Notes.
class NoteBook {
  public notes: Note[] = [];

  constructor() {}

  addNote(note: Note) {
    this.notes.push(note);
    console.log(`Note "${note.title}" added to the notebook.`);
  }

  removeNote(noteId: number) {
    this.notes = this.notes.filter((note) => note.Id !== noteId);
    console.log(`Note with ID ${noteId} has been removed.`);
  }
}

// 7. Generics– Data Storage.
class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
    console.log("Item added successfully.");
  }

  removeItem(item: T): void {
    this.items = this.items.filter((i) => i !== item);
    console.log("Item removed.");
  }

  getAllItems(): T[] {
    return this.items;
  }
}

// <<<<< TESTING PART >>>>> \\

// 1. Create an Admin (Inheritance Test)
const admin = new Admin(
  1,
  "Mohamed",
  "mohamed@test.com",
  "admin123",
  "+010",
  25,
);
console.log("--- Admin Info ---");
admin.displayInfo();
admin.manageNotes();

// 2. Create a Regular User
const user = new User(2, "Malek", "malek@test.com", "user456", "+011", 20);
console.log("\n--- User Info ---");
user.displayInfo();

// 3. Create a NoteBook (Aggregation Test - Part 1)
const personalNotebook = new NoteBook();

// 4. Create Notes (Association & Composition Test)
// Note: Each note is associated with an author (User)
const note1 = new Note(
  101,
  "Study Plan",
  "Focus on TypeScript OOP today.",
  user,
);
const note2 = new Note(102, "Gym Routine", "Leg day and cardio.", user);

// 5. Add Notes to NoteBook (Composition Test - Part 2)
personalNotebook.addNote(note1);
personalNotebook.addNote(note2);

// 6. Link NoteBook to User (Aggregation Test - Part 2)
user.addNotebook(personalNotebook);

// 7. Test Note Preview
console.log("\n--- Note Preview Test ---");
console.log(`Note 1 Preview: ${note1.preview()}`);

// 8. Test Generic Storage
console.log("\n--- Generic Storage Test ---");
const userStore = new Storage<User>();
userStore.addItem(user);
userStore.addItem(admin);

console.log("All stored users:");
console.log(userStore.getAllItems());

// 9. Test Note Removal
console.log("\n--- Remove Note Test ---");
personalNotebook.removeNote(102); // Removes Gym Routine

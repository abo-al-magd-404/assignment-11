"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    Id;
    name;
    email;
    password;
    phone;
    _age;
    notebooks = [];
    constructor(Id, name, email, password, phone, age) {
        this.Id = Id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 18 && value <= 60) {
            this._age = value;
        }
        else {
            throw new Error("Age must be between 18 and 60.");
        }
    }
    addNotebook(notebook) {
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
class Admin extends User {
    constructor(Id, name, email, password, phone, age) {
        super(Id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(`Admin ${this.name} is managing all notes.`);
    }
}
class Note {
    Id;
    title;
    content;
    author;
    constructor(Id, title, content, author) {
        this.Id = Id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview() {
        console.log({
            Id: this.Id,
            title: this.title,
            content: this.content,
        });
    }
}
class NoteBook {
    notes = [];
    constructor() { }
    addNote(note) {
        this.notes.push(note);
        console.log(`Note "${note.title}" added to the notebook.`);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((note) => note.Id !== noteId);
        console.log(`Note with ID ${noteId} has been removed.`);
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
        console.log("Item added successfully.");
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
        console.log("Item removed.");
    }
    getAllItems() {
        return this.items;
    }
}
const admin = new Admin(1, "Mohamed", "mohamed@test.com", "admin123", "+010", 25);
console.log("--- Admin Info ---");
admin.displayInfo();
admin.manageNotes();
const user = new User(2, "Malek", "malek@test.com", "user456", "+011", 20);
console.log("\n--- User Info ---");
user.displayInfo();
const personalNotebook = new NoteBook();
const note1 = new Note(101, "Study Plan", "Focus on TypeScript OOP today.", user);
const note2 = new Note(102, "Gym Routine", "Leg day and cardio.", user);
personalNotebook.addNote(note1);
personalNotebook.addNote(note2);
user.addNotebook(personalNotebook);
console.log("\n--- Note Preview Test ---");
console.log(`Note 1 Preview: ${note1.preview()}`);
console.log("\n--- Generic Storage Test ---");
const userStore = new Storage();
userStore.addItem(user);
userStore.addItem(admin);
console.log("All stored users:");
console.log(userStore.getAllItems());
console.log("\n--- Remove Note Test ---");
personalNotebook.removeNote(102);

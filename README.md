# Assignment 11

**Prepared by:** abo al magd  
**Group:** Node_C45_Mon&Thurs_8:30pm_(Online)  
**Assignment:** 11

---

## Overview

This repository contains a **Simple Notes Management System** implemented in TypeScript, showcasing object-oriented programming fundamentals such as inheritance, composition, aggregation, and generics. The system models users, admins, notebooks, and notes using real OOP relationships.

## Features

- **User & Admin Classes:**  
  - `User`: Core user with age constraints and notebook management.  
  - `Admin`: Inherits from `User`, with special note management abilities.
- **Note & Notebook Management:**  
  - `Note`: Represents individual notes authored by users.
  - `NoteBook`: Handles collections of notes, supports add/remove operations (composition).
- **Data Storage with Generics:**  
  - `Storage<T>`: Generic class for managing collections of any type.
- **Relationships & OOP Principles:**  
  - Aggregation between users and notebooks.
  - Association between notes and their authors.
  - Composition between notebooks and notes.
- **Extensive Demo/Test Suite:**  
  - Demonstrates creation, linking, and management of users, admin, notebooks, notes, and storage operations via console output.

## Architecture

- **Language:** TypeScript (CommonJS modules)
- **Entry Point:** `src/main.ts`
- **Project Structure:**
  ```
  .
  ├── src
  │   └── main.ts
  ├── package.json
  ├── tsconfig.json
  ├── dist/ (compiled JavaScript)
  └── ASSIGNMENT DIAGRAM.png (system overview diagram)
  ```
- **Key Classes:**
  - `User`, `Admin`, `Note`, `NoteBook`, `Storage<T>`

## Technology Stack

- **TypeScript**: Language for strong typing and OOP structure.
- **Node.js**: Runtime for executing compiled output.
- **Dev Tools:**  
  - `concurrently`: For running TypeScript compiler and Node in development mode.

## Setup & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start in development mode:**
   ```bash
   npm run start:dev
   ```
   This concurrently watches and compiles TypeScript and runs the output.

3. **Compile separately (if needed):**
   ```bash
   tsc
   node dist/main.js
   ```

## System Diagram

For a graphical overview, see the included file:  
![System Diagram](ASSIGNMENT%20DIAGRAM.png)

## Value Proposition

- Demonstrates real-world OOP modeling in TypeScript.
- Clean, extensible architecture suitable for hands-on TypeScript/OOP learning.
- All relationships between users, notes, notebooks, and storage are implemented with correct OOP patterns.

---

_This project is intended as a robust foundation for TypeScript-based OOP assignments or educational demos._

## Assignment Overview

This assignment consists of several requirements, each implemented as a separate JavaScript file within a GitHub repository. The repository contains a script for each requirement along with the necessary setup for a clean and organized project.

### Requirements:

1. **Leap Year Checker (Requirement 1)**:
   - Developed a function `isLeapYear` to determine if a given year is a leap year.
   - Exported the function from a reusable module named `dateUtil.js`.
   - Created two test files to validate the functionality of the `isLeapYear` function:
     - `test-individual.js`: Tests the function by importing it individually.
     - `test-module.js`: Tests the function by importing the module as a variable.

2. **Print Poem Contents (Requirement 2)**:
   - Created a text file named `poem.txt` containing an English poem.
   - Developed a program to print the contents of `poem.txt` using the `fs` module's `readFile` method.

3. **Fetch Pincode Data (Requirement 3)**:
   - Developed a program to fetch pincode data from a public API for specific offsets.
   - Combined the fetched data into a single array using the spread operator.
   - Printed the combined data on the console.

4. **Event Handling and File Reading (Requirement 4)**:
   - Attached 'exit' and 'unhandledRejection' events to the 'process' object.
   - Developed a promisified version of `fs.readFile` and handled errors using the `catch` handler.
   - Tested the 'unhandledRejection' event by throwing an error from the `catch` handler.

5. **Demonstrate Map and Filter Functions (Requirement 5)**:
   - Utilized the `map` and `filter` functions of JavaScript arrays.
   - Created a list of objects with specific properties using `map` and `filter` operations.
   - Printed the resulting array on the console for verification.

### Repository Structure:

- `Requirement_1/`: Contains files related to Requirement 1.
- `Requirement_2/`: Contains files related to Requirement 2.
- `Requirement_3/`: Contains files related to Requirement 3.
- `Requirement_4/`: Contains files related to Requirement 4.
- `Requirement_5/`: Contains files related to Requirement 5.

### Usage:

Each JavaScript file can be run independently to demonstrate the functionality of the corresponding requirement.

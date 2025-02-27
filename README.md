**Simple Spreadsheet Application**

**Overview**

This project is a Simple Spreadsheet Application built using React.js. It allows users to enter and evaluate formulas, apply text formatting (bold, italic, font size), and manage spreadsheet data dynamically.

**Project SetUp**

Run the following command in your terminal:

    npx create-react-app google-sheets-clone

This will generate a folder structure like this:

google-sheets-clone/

│── node_modules/

│── public/

│── src/

│   ├── App.js
│   ├── index.js
│   ├── ...

│── package.json

│── README.md

Navigate to Your Project
    
    cd google-sheets-clone

**Dependencies to Install**

Run the following command to install required packages:

    npm install react mathjs handsontable @emotion/react @emotion/styled
    

react → Core library for UI
    
mathjs → Evaluating mathematical formulas
    
handsontable → Powerful spreadsheet UI
    
@emotion/react & @emotion/styled → Styling

Features Implemented

Basic Spreadsheet UI

Created a table structure for spreadsheet functionality.

Added input fields for formula evaluation.

Formula Evaluation

Implemented an input box where users can enter formulas (e.g., =sum(1,2,3)).

Developed a button (Evaluate) to compute the formula and display results.

Text Formatting Options

Added buttons for Bold, Italic, and Font Size.

Applied CSS styles dynamically to the selected text.

Bug Fixes & Improvements

Fixed import/export issues in Spreadsheet.js.

Resolved missing variable errors (formula, setFormula, etc.).

Eliminated duplicate UI elements appearing on the page.

Enhanced UI/UX

Removed background image and applied an attractive gradient background.

Added smooth styling using CSS to make the app more user-friendly.

Technologies Used

Frontend: React.js, JavaScript, CSS

Styling: CSS3, Flexbox, Gradient Background

Development Tools: VS Code, npm, React Hooks

How to Run the Project

1. Clone the Repository

    git clone https://github.com/yourusername/spreadsheet-app.git
    cd spreadsheet-app

2. Install Dependencies

    npm install

3. Start the Development Server

    npm start

The app will be available at http://localhost:3000.

Future Enhancements

Add support for cell referencing (e.g., =A1+B1).

Implement CSV import/export functionality.

Enhance formula parsing to support complex operations.

Improve error handling and validation.

Screenshots

(Add images if required)

Author

GM. Umamaheswara Rao

License

This project is licensed under the MIT License.

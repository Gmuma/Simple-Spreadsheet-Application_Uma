import React, { useState } from "react";
import { evaluate } from "mathjs";
import "../styles.css";

const Spreadsheet = () => {
    const [data, setData] = useState([["", "", ""], ["", "", ""], ["", "", ""]]); 
    const [formula, setFormula] = useState("");

    const handleEvaluate = () => {
        setData((prevData) =>
            prevData.map((row) =>
                row.map((cell) =>
                    cell.startsWith("=") ? evaluateFormula(cell.slice(1), prevData) : cell
                )
            )
        );
    };

    const evaluateFormula = (formula, data) => {
        try {
            let result = evaluate(formula);
            return result;
        } catch (error) {
            return "Error";
        }
    };

    return (
        <div className="spreadsheet-container">
            <h1 className="title">Simple Spreadsheet</h1>

            {/* Toolbar Section */}
            <div className="toolbar">
                <button className="toolbar-btn"><b>Bold</b></button>
                <button className="toolbar-btn"><i>Italic</i></button>
                <button className="toolbar-btn">Font Size</button>
            </div>

            {/* Formula Bar Section */}
            <div className="formula-bar">
                <input 
                    type="text" 
                    className="formula-input"
                    placeholder="Enter formula..." 
                    value={formula} 
                    onChange={(e) => setFormula(e.target.value)}
                />
                <button className="evaluate-btn" onClick={handleEvaluate}>Evaluate</button>
            </div>

            {/* Spreadsheet Table */}
            <table className="spreadsheet-table">
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} contentEditable="true">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Spreadsheet;  

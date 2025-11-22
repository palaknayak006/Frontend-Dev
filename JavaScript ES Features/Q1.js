// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function parseValue(value) {
    // If null or undefined, return as is
    if (value === null || value === undefined) return value;

    // Trim string values
    if (typeof value === "string") {
        const trimmed = value.trim();

        // Convert boolean strings
        if (trimmed === "true") return true;
        if (trimmed === "false") return false;

        // Convert NaN string
        if (trimmed === "NaN") return NaN;

        // If empty string
        if (trimmed === "") return "";

        // If string contains a number + extra text (e.g., "100px") extract number
        if (!isNaN(parseFloat(trimmed))) return parseFloat(trimmed);
    }

    return value;
}

const parsedData = apiData.map(parseValue);
console.log(parsedData);

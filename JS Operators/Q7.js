// Q7: Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(" ").length;
let hasNegative = feedback.includes("bad") || feedback.includes("poor");

console.log("Word Count:", words);

if (hasNegative) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

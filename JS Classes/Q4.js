"use strict";

// FormBuilder Class
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Create form dynamically
    createForm(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";

        this.fields.forEach(field => {
            let html = `
                <label>${field.label}</label>
                <input type="${field.type}" id="${field.id}" placeholder="${field.placeholder}">
            `;
            container.innerHTML += html;
        });
    }

    // Get all form data
    getFormData() {
        let data = {};

        this.fields.forEach(field => {
            data[field.id] = document.getElementById(field.id).value;
        });

        return data;
    }
}

// Fields Array
const fields = [
    { type: "text", label: "Username", placeholder: "Enter username", id: "username" },
    { type: "email", label: "Email", placeholder: "Enter email", id: "email" },
    { type: "password", label: "Password", placeholder: "Enter password", id: "password" },
];

// Create Form
const formBuilder = new FormBuilder(fields);
formBuilder.createForm("dynamicForm");

// Submit Button Event
document.getElementById("submitBtn").addEventListener("click", function () {
    const formData = formBuilder.getFormData();

    document.getElementById("output").innerHTML =
        `<pre>${JSON.stringify(formData, null, 2)}</pre>`;
});

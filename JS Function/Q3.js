// Q3: Arrow function issue with "this"

const user = {
    name: "Rahul",
    showName: () => {
        return this.name; 
    }
};

// FIXED Object
const fixedUser = {
    name: "Rahul",
    showName() { 
        return this.name; 
    }
};

document.getElementById("output").innerHTML = `
<b>Arrow Function Output:</b> ${user.showName()} <br>
<b>Reason:</b> Arrow functions do NOT have their own 'this'.<br><br>
<b>Fixed Output:</b> ${fixedUser.showName()}
`;

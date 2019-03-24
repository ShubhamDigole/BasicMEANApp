const mongoo = require('mongoose');
let Employee = mongoo.model('employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});
module.exports = { Employees: Employee };
//# sourceMappingURL=employee.js.map
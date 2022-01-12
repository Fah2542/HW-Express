const express = require ('exptess');
const app = express.Router();
const employeeControllres = require('../controller/employeeControllers')

app.get("/", employeeControllres.getemployee);

app.get("/:id", employeeControllres.getemployeeById);

app.get("/tax/:sal", employeeControllres.getemployeeBySal);

app.get("/retire/:age", employeeControllres.getemployeeByAge);

app.post("/", employeeControllres.addemployeeByRecord);





module.exports = app;

exports.get = async (req,res)=>{
    res.send("Get All Employee");
};

exports.getemployeeById = async (req,res)=>{
    res.send("Get emp by id" + req.params.id);
};

exports.getemployeeBySal = async (req,res)=>{
    const sal = req.params.sal
    const tax = sal*10/100

    res.send(`==> ${tax}`);
};

exports.getemployeeByAge = async (req,res)=>{
    const age = req.params.age
    const retire = 60-age

    res.send(`==> ${retire}`);
};

exports.addemployeeByRecord = async (req,res)=>{
    console.log(req.body.id);
    console.log(req.body.name);
    console.log(req.body.age);
    console.log(req.body.salary);

    res.send(" add an Employee : " + req.body.id + "," + "neme : " + req.body.name + "," + "age :" + req.body.age + "," + "salary :" + req.body.salary);
};


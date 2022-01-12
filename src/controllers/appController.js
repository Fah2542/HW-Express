exports.login = (req ,res)=>{
    res.send("Page Logines");
}

exports.getProduct =  (req ,res)=>{
    res.send("Page product search " + req.params.id + "Type is"+ req.params.type);
}

exports.redister = (req ,res)=>{
    email =  res.body.email;
    name = res.body.name;
    tel = res.body.tel;
    res.send("email :" + email + "/n" + "name :" + fname + "/n" + "tel : " + tel );
}
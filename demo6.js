const db=connect('company')

// 查找
// 定向查找
// db.workmate.find(
//     {"skill.skillOne":"HTML+CSS"},
//     {name:true,"skill.skillOne":true,_id:false}
// )

// db.workmate.find(
//     {"age":{$lte:30,$gt:25}},
//     {name:true,"skill.skillOne":true,age:true}
// )


var startDate=new Date('01/01/2018')
db.workmate.find(
    {"regeditTime":{$gte:startDate}},
    {_id:false,name:true,regeditTime:true}
)
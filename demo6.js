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

// var startDate=new Date('01/01/2018')
// db.workmate.find(
//     {"regeditTime":{$gte:startDate}},
//     {_id:false,name:true,regeditTime:true}
// )


// $in 一个key，多个值
// 查询包含在这个数组内的
// db.workmate.find(
//     {age:{$in:[25,33,32,30,28]}},
//     {name:true,"skill.skillOne":true,age:true,_id:0}
// )

// $nin 不包含这些值的
// db.workmate.find(
//     {age:{$nin:[25]}},
//     {name:true,"skill.skillOne":true,age:true,_id:0}
// )

// $or 或  $and 并
// db.workmate.find(
//     {$and:[
//         {age:{$gte:25}},
//         {'skill.skillThree':'PHP'}
//     ]},
//     {name:true,"skill.skillThree":true,age:true,_id:0}
// )

//$not
// db.workmate.find(
//     {age:{
//         $not:{
//             $lte:30,
//             $gte:25
//         }
//     }},
//     {name:true,"skill.skillThree":true,age:true,_id:0}
// )


////////////////////////////// 数组查询//////////////////////////////////


// 精确数组匹配
// db.workmate.find(
//     {
//         interest:['打飞机']
//     },
//     {name:true,"skill.skillThree":true,age:true,_id:0}
// )


//模糊数组匹配
// db.workmate.find(
//     { 
//         interest:'唱'
//     },
//     {name:true,"skill.skillThree":true,interest:true,_id:0}
// )

//并查询
// db.workmate.find(
//     { 
//         interest:{$all:['唱','跳']}
//     },
//     {name:true,"skill.skillThree":true,interest:true,_id:0}
// )


// $in
// 精确包含多个查询
// db.workmate.find(
//     { 
//         interest:{$in:['爬山','钓鱼']}
//     },
//     {name:true,"skill.skillThree":true,interest:true,_id:0}
// )

// $size
//根据个数查找
// db.workmate.find(
//     { 
//         interest:{$size:2}
//     },
//     {name:true,"skill.skillThree":true,interest:true,_id:0}
// )


// $slice
// $slice 显示几项1位1项  -1位最后一项
// db.workmate.find(
//     { 
//         interest:{$size:2}
//     },
//     {name:true,"skill.skillThree":true,interest:{$slice:-1},_id:0}
// )


//sort 1 从小到大  -1从大到小

//分页显示2  年龄从小到大
// db.workmate.find(
//     {},
//     {name:true,age:true,_id:false}
// ).limit(10).skip(10).sort({age:1})


// limit 每页几个
// skip 到第几页



// $where(有风险，能不用就不用，加重服务器负担)
// db.workmate.find(
//     {$where:"this.age>30"},
//     {name:true,age:true,_id:false}
// )

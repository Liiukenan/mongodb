var db=connect('log');
// db.workmate.update(
//     {sex:1},
//     {$set:{age:1000}},false,true
    
// )
// false 如果sex不为1不修改
// true 意思为如果有所有的都修改


// var resultMessage=db.runCommand({getLastError:1})
// if(resultMessage.updatedExisting){
//     print('成功了')
// }else{
//     print('失败了')
// }

// resultMessage
// {
// "err":null,

// "updateExisiting":true, //是否进行了更新

// "n":2, //更新的文档数

// "ok":true

// }
// printjson(resultMessage)


// var myModify={
//     findAndModify:"workmate",
//     query:{
//         name:'kenan'
//     },
//     update:{
//         $set:{
//             age:18
//         }
//     },
//     new:true
// }
// var resultMessage=db.runCommand(myModify);
// printjson(resultMessage)


// 一般都用这种
var db=connect('log')
// db.workmate.update({name:'kenan'},{$set:{name:'kenan',age:48}})
// 局部更新字段

// db.workmate.update({name:'kenan'},{$unset:{age:''}})
// 局部删除字段

// $inc
// db.workmate.update({name:'kenan'},{$inc:{age:-10}})
// 在之前的基础上设置算法

//  db.workmate.update({},{$set:{insertset:[]}},{multi:true})
// 全部插入


// db.workmate.update({name:"xiaowang"},{$set:{age:20,name:"meizi"}},{upsert:true})
// 如果没有则插入，如果有则修改


// 给interest数组添加值


// $ne
// db.workmate.update({name:"meizi",job:{$ne:'Game'}},{$push:{job:'playGame'}})
// job 不等于 Game的值则添加
// db.workmate.update({name:"meizi",name:{$ne:'kenan'}},{$set:{name:'meimei'}},{multi:true})

// $addToset
// db.workmate.update({name:"kenan"},{$addToSet:{interest:"girl"}},{multi:true})
// 已有属性里，如果interest没有这个值，则添加

// $each
// let interestArr=["sing","dance","code"]
// db.workmate.update(
//     {name:"kenan"},
//     {$addToSet:{interest:{$each:interestArr} } }
// )
// 只追加不重复的


// $pop
// 1从末端删除
// -1 从开端删除
// db.workmate.update(
//     {name:"kenan"},
//     {$pop:{interest:-1}}
// )


// 数组定位修改
// db.workmate.update(
//     {name:"kenan"},
//     {$set:{"interest.0":"makeLove"}}
// )
print('修改成功')
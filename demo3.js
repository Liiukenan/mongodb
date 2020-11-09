var db=connect('log')
db.workmate.update({name:'kenan'},{$set:{name:'傻吊'}})
// 局部更新字段
print('修改成功')
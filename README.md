

# print() 
### 打印

# show dbs
### 展示数据库

# use user    
### 选择某个库(若没有则新建)

# show collections
### 显示某个库的所有集合

# db
### 显示库名

# db.user.insert({"name":"kenan"})
### 插入数据

# db.user.find()
### 查找数据库所有集合

# db.user.findOne()
### 查找第一个数据

# db.user.update({"name":"xiaolu"},{$set:{"name":"kenand"}},{multi:true})
### 更改数据库 第一个是默认的，第二个是修改以后的,每次执行修改一条 multi,更新所有


# db.user.remove({"name":"kenand"})
### 删除全部这种属性的内容


# db.dropDatabase() 
### 删除数据库




# db.user.insert([{"name":1},{"name":2},{"name":3}])
### 批量插入


# db.workmate.update({name:'kenan'},{$set:{name:'傻吊'}})

### 局部插入


# db.workmate.update({name:'kenan'},{$unset:{age:''}})

### 局部删除

# db.workmate.update({},{$set:{insertset:[]}},{multi:true})

### 全部插入


# db.workmate.update({name:"xiaowang"},{$set:{age:20,name:"meizi"}},{upsert:true})
### 如果没有则插入，如果有则修改
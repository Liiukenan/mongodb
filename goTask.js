var userName="kenan"
var timeStamp=Date.parse(new Date())

// 插入的数据
var jsonDatabase={"loginName":userName,"loginTime":timeStamp}

// 要链接的数据库
var db=connect('log');

db.login.insert(jsonDatabase)
print('[demo]:log print success')
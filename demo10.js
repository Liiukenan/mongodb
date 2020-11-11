//用户管理
db.createUser({
    user:"kenan",
    pwd:"liu123",
    //用户备注
    customData:{
        name:"kenan",
        email:"305290526@qq.com",
        age:18
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})

// 删除用户
db.system.users.remove({user:"kenan"})

// 鉴权
db.auth("kenan","liu123")

// 鉴权后启动方式为
sudo mongod --config /usr/local/etc/mongod.conf --auth

// 则
mongo -u kenan -p liu123 127.0.0.1:27017/admin
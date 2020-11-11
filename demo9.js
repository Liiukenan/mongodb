const startTime=new Date().getTime();
const db=connect('company')
let rs=db.randomInfo.find({username:'4ne0e1f9'})

rs.forEach(rs => {
    printjson(rs)
});

const runTime=new Date().getTime()-startTime
print(runTime)


//简历索引
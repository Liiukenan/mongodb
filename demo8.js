// 生成随机数
const db=connect('company')
function GetRandomNum(min,max){
    let range=max-min
    let rand=Math.random()
    return (min+Math.round(rand * range))
}
function GetRandomUserName(min,max){
    let tempStringArray="qrueowifanofjoiqurjewqnbgoifajlewqroiufd124321431dfsa1r3098904".split("")
    let outputtext=""
    for(let i=1;i<GetRandomNum(min,max);i++){
        outputtext=outputtext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outputtext
}


const startTime=(new Date()).getTime();
const tempInfo=[]
for (let i = 0; i <2000000;i++){
    tempInfo.push({
        username:GetRandomUserName(7,16),
        regediteTime:new Date(),
        randNum0:GetRandomNum(10000,99999),
        randNum1:GetRandomNum(10000,99999),
        randNum2:GetRandomNum(10000,99999),
        randNum3:GetRandomNum(10000,99999),
        randNum4:GetRandomNum(10000,99999),
        randNum5:GetRandomNum(10000,99999),
        randNum6:GetRandomNum(10000,99999),
        randNum7:GetRandomNum(10000,99999),
        randNum8:GetRandomNum(10000,99999),
        randNum9:GetRandomNum(10000,99999),
        randNum10:GetRandomNum(10000,99999)
    })
}

db.randomInfo.insert(tempInfo)
const endTime=(new Date()).getTime()-startTime;


print("[demo]:--------endTime",endTime);
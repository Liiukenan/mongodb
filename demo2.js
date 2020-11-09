var workmate1={
    name:'kenan',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'html+css',
        skillTwo:'vue',
        skillThree:'React'
    },
    regeditTime:new Date()
}
var workmate2={
    name:'xiatingting',
    age:28,
    sex:1,
    job:'广告策划',
    skill:{
        skillOne:'文案编排',
        skillTwo:'视频制作',
        skillThree:'创意策划'
    },
    regeditTime:new Date()
}
var workmate3={
    name:'xiatingting',
    age:24,
    sex:0,
    job:'广告策划',
    skill:{
        skillOne:'文案编排',
        skillTwo:'视频制作',
        skillThree:'创意策划'
    },
    regeditTime:new Date()
}


var db=connect('log')
let arr=[workmate1,workmate2,workmate3]
db.workmate.insert(arr);
print('插入成功')
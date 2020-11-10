var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['唱','跳','rap','篮球']
}
var workmate2={
    name:'ShengLei',
    age:31,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'J2EE',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['做爱','唱']
}
var workmate3={
    name:'MinJie',
    age:18,
    sex:0,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['哭','笑']
}
var workmate4={
    name:'XiaoWang',
    age:25,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'UI',
        skillThree:'PPT'
    },
    regeditTime:new Date(),
    interest:['打飞机']
}
var workmate5={
    name:'LiangPeng',
    age:28,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['跳广场舞']
}
var workmate6={
    name:'HouFei',
    age:25,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
    },
    regeditTime:new Date(),
    interest:['跳广场舞']
}
var workmate7={
    name:'LiuYan',
    age:35,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['卖身','被操']
}
var workmate8={
    name:'DingLu',
    age:20,
    sex:0,
    job:'美工',
    skill:{
        skillOne:'PhotoShop',
        skillTwo:'CAD',
    },
    regeditTime:new Date(),
    interest:['哭','笑']
}
var workmate9={
    name:'JiaPeng',
    age:29,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['打飞机']
}
var workmate10={
    name:'LiJia',
    age:26,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date(),
    interest:['唱歌','画画','跳舞','打篮球','爬山','钓鱼']
}
var db=connect('company');
var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
db.workmate.insert(workmateArray);
print('[SUCCESS]：The data was inserted successfully');  
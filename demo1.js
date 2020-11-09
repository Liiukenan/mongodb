var startTime=(new Date()).getTime();
var db=connect('log')
// for (let index = 0; index < 1000; index++) {
//       db.user.insert({name:1})
// }
let tempArray=[]
for (let index = 0; index < 1000; index++) {
    tempArray.push({name:2})
    
}
db.user.insert(tempArray)

var runTime=(new Date()).getTime()-startTime;
print('this run is'+runTime)
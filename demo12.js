var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
let startTime=new Date().getTime();
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo=db.db("company")
  dbo.collection("randomInfo").find({username:'4ne0e1f9'}).toArray(function(err,result){
      if (err) throw err
      console.log(result[0]);
      let endTime=new Date().getTime();
      console.log(endTime-startTime+'ms');
      db.close();
  });
  
});


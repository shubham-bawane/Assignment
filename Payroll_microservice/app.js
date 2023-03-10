const express = require("express");
const app = express();
const EmployeeRouter = require("./router/PayrollRoutes");

const mongoose = require('mongoose');


//shart
const PayrollDataService = require("./services/PayrollService");

var kafka = require('kafka-node')
var Consumer = kafka.Consumer;
var Offset = kafka.Offset;
var Client = kafka.KafkaClient;


var client = new Client('localhost:2181');
var topics = [{ topic: 'EmployeeMessage', partition: 0 }];
var options = { autoCommit: false, fetchMaxWaitMs: 1000, fetchMaxBytes: 1024 * 1024 };

var consumer = new Consumer(client, topics, options);
var offset = new Offset(client);




 consumer.on('message', async function (message) {

  var decodedMessage = JSON.parse(message.value);
  console.log(message);
  // console.log(JSON.parse(message.value));
  console.log(decodedMessage.ctc);



  
  try{
    const data= await PayrollDataService.updatePayrollDataByKafka(decodedMessage.EmployeeId, decodedMessage.ctc);
    console.log(data);
  }catch(e){
console.log(e);
  }
  
});

consumer.on('error', function (err) {
  console.log('error', err);
});

//end






//middleware
app.use(express.json());
app.use("/api/payroll", EmployeeRouter);

mongoose.connect('mongodb://127.0.0.1:27017/my-db')
  .then(() => console.log('MongoDB Connected!'));

 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 
module.exports = app; 
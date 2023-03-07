
const ip = require('ip')
var kafka = require('kafka-node')
const host = process.env.HOST_IP || ip.address()
  
    HighLevelProducer = kafka.HighLevelProducer,
   
    client = new kafka.KafkaClient('localhost:2181')
//     producer = new Producer(client),
  
//     payloads = [
//         { topic: 'topic1', messages: 'hi', partition: 0 }
        
//     ];
// producer.on('ready', function () {
//     producer.send(payloads, function (err, data) {
//         console.log(data);
//     });
// });
 
// producer.on('error', function (err) {})
producer = new HighLevelProducer(client);
// payloads = [
//         { topic: 'topic1', messages: 'hi' },
//         { topic: 'topic2', messages: ['hello', 'world'] }
//     ];
// producer.on('ready', function () {
//     producer.send(payloads, function (err, data) {
//         console.log(data);
//     });
// });


exports.SendToKafka = (EmpId, EmployeeCTC) => {
    var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	

        const event = {
            // id: uuid.v4(),
            timestamp: date_time,
            EmployeeId: EmpId,
            ctc: EmployeeCTC,
          
        };

        const buffer = new Buffer.from(JSON.stringify(event));
console.log(buffer);
        // Create a new payload
        const record = [
            {
                topic: "EmployeeMessage",
                messages: buffer,
                attributes: 1 /* Use GZip compression for the payload */
            }
        ];

        //Send record to Kafka and log result/error
        // producer.send(record, callback);
        producer.send(record, function (err, data) {
            console.log(data);
        });
    }

   


var q = require('./queue.js');

var ed = new q.Queue();
var p = new q.Patient('Smith', 5);
ed.enqueue(p);
p = new q.Patient('Jones', 4);
ed.enqueue(p);
p = new q.Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new q.Patient('Brown', 1);
ed.enqueue(p);
p = new q.Patient('Ingram', 1);
ed.enqueue(p);

var seen = ed.dequeuePatients();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be treated:');
console.log(ed.toStringPatient());

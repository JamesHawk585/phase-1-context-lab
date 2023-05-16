
// // function createEmployeeRecord(arr) {
// //   return {
// //     firstName: arr[0],
// //     familyName: arr[1],
// //     title: arr[2],
// //     payPerHour: arr[3],
// //     timeInEvents: [],
// //     timeOutEvents: []
// //   };
// // }

// // function createEmployeeRecords(arr) {
// //   return arr.map(function (innerArr) {
// //     return createEmployeeRecord(innerArr)
// //   })
// // }

// // function createTimeInEvent(dateStamp) {
// //   let [date, hour] = dateStamp.split(' ');
// //   this.timeInEvents.push({
// //     type: "TimeIn",
// //     hour: parseInt(hour, 10),
// //     date: date
// //   });
// //   return this;
// // }

// // function createTimeOutEvent(dateStamp) {
// //   let [date, hour] = dateStamp.split(' ')
// //   this.timeOutEvents.push({
// //     type: "TimeOut",
// //     hour: parseInt(hour, 10),
// //     date: date
// //   })
// //   return this
// // }


// // // -------------------------------------------------------------------------


// //   function hoursWorkedOnDate(employeeRecord, date) {
// //     let inEvent = employeeRecord.timeInEvents.find(function (event) {
// //             return event.date===date

// //         }) 
// //         let outEvent = employeeRecord.timeOutEvents.find(function (event) {
// //             return event.date===date

// //         }) 
        
// //         if (inEvent && outEvent) {
// //         return (outEvent.hour - inEvent.hour) / 100
// //     }

// //     return 0;
// // }

// // function wagesEarnedOnDate(employeeRecord, date) {
// //   let rawWage = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
// //   return parseFloat(rawWage.toString())
// // }

// // function allWagesFor(employeeRecord) {
// //   let dates = employeeRecord.timeInEvents.map(function (event) {
// //     return event.date
// //   })

// //   let payable = dates.reduce(function (memo, date) {
// //     return memo + wagesEarnedOnDate(employeeRecord, date)
// //   }, 0)

// //   return payable
// // }

// // function calculatePayroll(arr) {
// //     return arr.reduce(function (memo, employeeRecord) {
// //       return memo + allWagesFor(employeeRecord)
// //     }, 0)
// // }


// // const employee = createEmployeeRecord(["John", "Doe", "Manager", 25]);
// // const createTimeInEventBound = createTimeInEvent.bind(employee);
// // createTimeInEvent("2023-05-16 0900");
// // console.log(employee.timeInEvents);



// function createEmployeeRecord(arr) {
//   return {
//     firstName: arr[0],
//     familyName: arr[1],
//     title: arr[2],
//     payPerHour: arr[3],
//     timeInEvents: [],
//     timeOutEvents: []
//   };
// }

// function createEmployeeRecords(arr) {
//   return arr.map(function (innerArr) {
//     return createEmployeeRecord(innerArr)
//   });
// }

// function createTimeInEvent(dateStamp) {
//   let [date, hour] = dateStamp.split(' ');
//   this.timeInEvents.push({
//     type: "TimeIn",
//     hour: parseInt(hour, 10),
//     date: date
//   });
//   return this;
// }

// function createTimeOutEvent(dateStamp) {
//   let [date, hour] = dateStamp.split(' ')
//   this.timeOutEvents.push({
//     type: "TimeOut",
//     hour: parseInt(hour, 10),
//     date: date
//   })
//   return this;
// }

// function hoursWorkedOnDate(employeeRecord, date) {
//   let inEvent = employeeRecord.timeInEvents.find(function (event) {
//     return event.date === date;
//   });

//   let outEvent = employeeRecord.timeOutEvents.find(function (event) {
//     return event.date === date;
//   });

//   if (inEvent && outEvent) {
//     return (outEvent.hour - inEvent.hour) / 100;
//   }

//   return 0;
// }

// function wagesEarnedOnDate(employeeRecord, date) {
//   let rawWage = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour;
//   return parseFloat(rawWage.toString());
// }

// function allWagesFor(employeeRecord) {
//   let dates = employeeRecord.timeInEvents.map(function (event) {
//     return event.date;
//   });

//   let payable = dates.reduce(function (memo, date) {
//     return memo + wagesEarnedOnDate(employeeRecord, date);
//   }, 0);

//   return payable;
// }

// function calculatePayroll(arr) {
//   return arr.reduce(function (memo, employeeRecord) {
//     return memo + allWagesFor(employeeRecord);
//   }, 0);
// }

// const employee = createEmployeeRecord(["John", "Doe", "Manager", 25]);
// const createTimeInEventBound = createTimeInEvent.bind(employee);
// createTimeInEventBound("2023-05-16 09:00");
// console.log(employee.timeInEvents);

function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });

  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });

  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date).hour;
  const timeOut = this.timeOutEvents.find(event => event.date === date).hour;

  return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

function allWagesFor() {
  const dates = this.timeInEvents.map(event => event.date);
  return dates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
}

function findEmployeeByFirstName(collection, firstName) {
  return collection.find(employee => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
}

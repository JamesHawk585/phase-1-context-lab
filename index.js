// // /* Your Code Here */

// // /*
// //  We're giving you this function. Take a look at it, you might see some usage
// //  that's new and different. That's because we're avoiding a well-known, but
// //  sneaky bug that we'll cover in the next few lessons!

// //  As a result, the lessons for this function will pass *and* it will be available
// //  for you to use if you need it!
// //  */






// // // function createTimeOutEvent(employeeRecord, dateStamp) {
// // //     const timeOutEvent = {
// // //         type: "TimeOut",
// // //         hour: parseInt(dateStamp.split(" ")[1], 10),
// // //         date: dateStamp.split(" ")[0]
// // //     };
// // //     employeeRecord.timeOutEvents.push(timeInEvent);
// // //     return employeeRecord;
// // // 
// // function createTimeOutEvent(employeeRecord, dateStamp) {
// //     const timeOutEvent = {
// //         type: "TimeOut",
// //         hour: parseInt(dateStamp.split(" ")[1], 10),
// //         date: dateStamp.split(" ")[0]
// //     };
// //     employeeRecord.timeOutEvents.push(timeOutEvent);
// //     return employeeRecord;
// // }
// // function hoursWorkedOnDate(employeeRecord, dateStamp) {
// //     const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
// //     const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
// //     const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
// //     return hoursWorked;
// // }
// // function wagesEarnedOnDate(employeeRecord, date) {
// //     const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
// //     const payOwed = hoursWorked * employeeRecord.payPerHour;
// //     return payOwed;
// // }
// // // function allWagesFor(employeeRecord) {
// // //     const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
// // //     const totalWages = datesWorked.reduce((total, date) => {
// // //         return total + wagesEarnedOnDate(employeeRecord, date);
// // //     }, 0);
// // //     return totalWages;
// // // }
// // function calculatePayroll(employeeRecords) {
// //     const totalPayroll = employeeRecords.reduce((total, employeeRecord) => {
// //       return total + allWagesFor(employeeRecord);
// //     }, 0);
// //     return totalPayroll;
// // }


// function createEmployeeRecord(array) {
//     return {
//       firstName: array[0],
//       familyName: array[1],
//       title: array[2],
//       payPerHour: array[3],
//       timeInEvents: [],
//       timeOutEvents: []
//     }
// }
  
// function createEmployeeRecords(employeeArrays) {
//     return employeeArrays.map(createEmployeeRecord)
// }
  
// function createTimeInEvent(dateTime) {
//     const [date, hour] = dateTime.split(' ')
//     this.timeInEvents.push({
//       type: 'TimeIn',
//       date: date,
//       hour: parseInt(hour, 10)
//     })
//     return this
// }
  
// function createTimeOutEvent(dateTime) {
//     const [date, hour] = dateTime.split(' ')
//     this.timeOutEvents.push({
//       type: 'TimeOut',
//       date: date,
//       hour: parseInt(hour, 10)
//     })
//     return this
// }

// // function hoursWorkedOnDate(employeeRecord, dateStamp) {
// //     const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
// //     const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
// //     const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
// //     return hoursWorked;
// // }

// function hoursWorkedOnDate(dateStamp) {
//     const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
//     const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
//     const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
//     return hoursWorked;
// }

// function wagesEarnedOnDate(employeeRecord, date) {
//     const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
//         const payOwed = hoursWorked * employeeRecord.payPerHour;
//         return payOwed;
// }

// function allWagesFor(employeeRecord) {
//     const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
//     const totalWages = datesWorked.reduce((total, date) => {
//         return total + wagesEarnedOnDate(employeeRecord, date);
//     }, 0);
//     return totalWages;
// }

// function findEmployeeByFirstName() {

// }

// function calculatePayroll() {

// }


function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(arr) {
  return arr.map(function (innerArr) {
    return createEmployeeRecord(innerArr)
  })
}

function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  })
  return this
}

function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(' ')
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  })
  return this
}

function hoursWorkedOnDate(employeeRecord, date) {
  let inEvent = employeeRecord.timeInEvents.find(function (event) {
    return event.date === date
  })

  let outEvent = employeeRecord.timeOutEvents.find(function (event) {
    return event.date === date
  })

  return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(employeeRecord, date) {
  let rawWage = hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
  return parseFloat(rawWage.toString())
}

function allWagesFor(employeeRecord) {
  let dates = employeeRecord.timeInEvents.map(function (event) {
    return event.date
  })

  let payable = dates.reduce(function (memo, date) {
    return memo + wagesEarnedOnDate(employeeRecord, date)
  }, 0)

  return payable
}

function calculatePayroll(arr) {
    return arr.reduce(function (memo, employeeRecord) {
      return memo + allWagesFor(employeeRecord)
    }, 0)
  }
 

/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(employeeArray) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(employeeArrays) {
    return employeeArrays.map(createEmployeeRecord)
  }
  
  function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ')
    this.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10)
    })
    return this
  }
  
  function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ')
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10)
    })
    return this
  }

  function hoursWorkedOnDate(employeeRecord, dateStamp) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function hoursWorkedOnDate(employeeRecord, dateStamp) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payOwed = hoursWorked * employeeRecord.payPerHour;
    return payOwed;
}

function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);
    return totalWages;
}

function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employeeRecord) => {
      return total + allWagesFor(employeeRecord);
    }, 0);
    return totalPayroll;
}

function findEmployeeByFirstName() {

}
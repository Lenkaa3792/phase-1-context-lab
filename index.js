function createEmployeeRecord(record){
    return { 
        firstName : record[0],
        familyName: record[1],
        title :record [2],
        payPerHour :record[3],
        timeInEvents : [],
        timeOutEvents : []
        }

}
let twoRows = [
    ["moe", "sizlak","barkeep",2]
    ["bartholomew","simpson","scamp",3]
]
function createEmployeeRecords(array){
    let employeeRecords = []
    array.forEach(elem => {
        employeeRecords.push(createEmployeeRecord(elem))
    })
    return employeeRecords
}
function createTimeInEvent(time){
    let newTime = time.split(" ")
    this.timeInEvents.push(new Object({
        type : "TimeIn",
        date : newTime[0],
        hour : parseInt(newTime[1])
    }))
    return this
    
}
function createTimeOutEvent(time){
    let newTime = time.split(" ")
    this.timeOutEvents.push(new Object({
        type : "TimeOut",
        date : newTime[0],
        hour : parseInt(newTime[1])
    }))
    return this

}
function hoursWorkedOnDate(hrs){
    let hours = 0
    for(let i =0;
        i<this.timeInEvents.length;
        i+1){
            hours += (this.timeOutEvents[i]-this.timeInEvents[i])
        }
        return hours
}
function wagesEarnedOnDate(givenDate) {
    const totalHoursWorked = hoursWorkedOnDate.call(this, givenDate)
  
    return totalHoursWorked * this.payPerHour;
  }
  
  
  const findEmployeeByFirstName =  (collection, firstNameString) => {
    return collection.find((employee) => {
      return employee.firstName === firstNameString;
    })
  }
  
  
  
  let calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + wagesEarnedOnDate.call(rec)
      }, 0)
  }
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    return payable
}


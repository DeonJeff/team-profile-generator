const { expect } = require("@jest/globals");
const Employee = require(“../lib/Employee”)

test ( “ Test Employee Class” , () => {
const Fred = new Employee("Fred”, 67, “Fred@email.com”)
  let boolean;
   if(typeof Fred === "object") {
           boolean = true
}   else {
             boolean = false
}
      expect(boolean).tobe(true)
})

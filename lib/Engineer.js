const Employee = require(“./Employee”);

class IEngineer extends Employee{
    constructor(name, id, email, github){
       super(name, id, email)
       this.github =  github;
}
         getGithub() {
        return this.github 
}
          getRole() {
        return  "Github"
          }
}
      module.exports = Github

const students = {
    name : 'abbas',
    isStudy:true,
    job:5000,
    friends:['jalal','rahim','lili'],
    toDo:{
       mornimg:'breakfast',
       noon:'lunch',
       night:'dinner'
    },
    time:function(){
        return `this.${this.friends} doning ${this.toDo.noon}`
    },
    teat:function(amount){
        this.job = this.job - amount;
        return this.job
    }
}
// const result = 
console.log(students.teat(500));
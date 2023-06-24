function BaseClass(value) {
    this.value = value;
}
BaseClass.prototype.plus = function(...n){
    for(let arg of n){
        this.value += arg
    }
    return this.value
}
BaseClass.prototype.get = function(){
   return this.value
}
//=======================================class in ES6 style===============//
class IntBuilder extends BaseClass{
constructor(value = 0){
    super(value)
}
static random(min, max){
  return Math.floor(Math.random() * ((max-min)+1) + min);
}
minus(...n){
    for(let arg of n){
        this.value -= arg
    }
    return this.value
}
multiply(n){
    this.value *= n
    return this.value
}
divide(n){
    this.value /= n
    return this.value
}
mod(n){
    this.value %= n
    return this.value
}
}


let intBuilder = new IntBuilder(10)
console.log(intBuilder.plus(2,3,2))
console.log(intBuilder.minus(1,2))
console.log(intBuilder.multiply(2))
console.log(intBuilder.divide(4))
console.log(intBuilder.mod(3))
console.log(intBuilder.get())

//=======================================class in ES5 style===============//
function StringBuilder(value = ''){
    BaseClass.call(this, value)
}
StringBuilder.prototype = Object.create(BaseClass.prototype)
StringBuilder.prototype.constructor = StringBuilder

StringBuilder.prototype.minus = function(n){
    return this.value = this.value.slice(0,-n)
}
StringBuilder.prototype.multiply = function(n){
    return this.value = this.value.repeat(n)
}
StringBuilder.prototype.divide = function(n){
    return this.value = this.value.slice(0, n)
} 
StringBuilder.prototype.remove = function(str){
    return this.value = this.value.split(str).join("")
}
StringBuilder.prototype.sub = function(from,to){
    return this.value = this.value.substr(from, to)
}


let strBuilder = new StringBuilder()
console.log(strBuilder.plus(' all', '!'))
console.log(strBuilder.minus(1))
console.log(strBuilder.multiply(3))
console.log(strBuilder.divide(4))
console.log(strBuilder.remove('l'))
console.log(strBuilder.sub(1,1))
console.log(strBuilder.get())

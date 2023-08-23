/*R2
function f(x, y) {
return (x === 0) ? y : f(x - 1, y + 1);
}
//R2
function g(x) { 
    return (x ===0) ? 0 : 1 + g(x - 1);
} */
    
    
    
/*  Q1 recursive recursive process
function factorial(n) {
    return n === 1 
        ? 1
        : n * factorial(n - 1);
}*/


/* Q2s. To support the learner in adopting this
mental model, we built an algebraic stepperÐa tool for visualizing the evaluation of Source ğ2 programs according to
the model. */

//Q3 50 STEPS


//Q4 5? what is deferred operations?


/*Q5 , 64 STEPS
function factorial (n){
 return iter(1, 1, n);
} 
 
 function iter(product, counter, n){
     return counter > n
     ? product
     : iter(product * counter, counter + 1, n);
     
 }
 
 factorial(5); 
 */
 
 // Q6 0 no deferred operations
 
 /*Q7 recursive
 function fib(n){
     return n <= 1
     ? n
     : fib(n - 1) + fib(n - 2);
     
 }
 
 fib(5);
 */
    
    
//  Q8 54 STEPS
     
 function fib(n) {
    return iter(1, 0, n);
 }
 
 function iter(a, b, count){
     return count === 0
     ? b
     : iter(a + b, a, count - 1);
 }
 
 fib(4);
 


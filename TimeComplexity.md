# Time complexity of any code:

we use Big O notation to represent complexity of code

Example

```
for(let i=0; i<=5; i++){
    console.log(i);
}
```

Let’s observe the steps for this code:

1. First, the assigning step(i = 1) will be done.
2. The second step will be the comparison i.e. i <= 5.
3. The third step will be the print statement (i.e. cout << “Raj”;).
4. The fourth step will be the increment(i.e. i++).
5. In the fifth step, the updated value of i will be again checked i.e. the comparison(i <= 5).
6. In the sixth step, the print statement will be executed and so on.

Thus total steps will be 5\*3 = 15
Where

1. 5 is number of iterations
2. 3 is in each iteration number of operations

If we write this in Big O notation then it will be
`O(15) or O(3*N) `

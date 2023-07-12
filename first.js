// Q1 ) You are given an array of numbers. Write a function that returns the square of a each element
// of the array.

//Q2) Write a function to find the area and perimeter of a given i>Rectangle  ii>circle

//Write a function to reverse a number (don’t convert number to string and dont use any inbuilt function))

//Write a function to Count number of Vowels in String

// Write a function to check if an input string is a palindrome or not. ex : nitin is palindrome (read same from
// forward and backward are pallindrome)

//Write a function to calculate simple interest based on the principle amount

// Write a function to generate a random number (do research on Math class)

// Write a function to find ncr 

//Write a function to find the count of a letter in a string (have to use this inbuilt functions --
// 1) toLowerCase() and 2) charAt()   --  do research)

//  https://leetcode.com/problems/roman-to-integer/ --- try to solve this problem

// https://leetcode.com/problems/length-of-last-word/ --- try to solve this problem




// function solve(arr){
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         newarr.push(arr[i]*arr[i])
//     }
//     return newarr
// }


// var arr = [1,2,5,6,9,8,7,4]
// console.log(solve(arr))


// function recarea(length,breadth){
//     return length*breadth
// }

// function recperimeter(length,breadth){
//     return 2*(length+breadth)
// }

// function circlearea(radius){
//     return 3.14*radius*radius
// }

// function circleperimeter(radius){
//     return 2*3.14*radius
// }


// var length=10
// var breadth=20

// console.log("rectangle area :"+recarea(length,breadth))
// console.log("rectangle permiter :"+recperimeter(length,breadth))

// var radius=10
// console.log("circle area :"+circlearea(radius))
// console.log("circle perimeter :"+circleperimeter(radius))


// function countvowels(str){
//     var count=0
//     for(var i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
//             count++
//         }
//     }
//     return count
// }

// console.log(countvowels("hello WORLD"))

//Roman number to number

// function romanToNumber(str){
//     var sum=0
//     for(var i=0;i<str.length;i++){
//         if(str[i]=='I'){
//             if(str[i+1]=='V'){
//                 sum+=4
//                 i++
//             }
//             else if(str[i+1]=='X'){
//                 sum+=9
//                 i++
//             }
//             else{
//                 sum+=1
//             }
//         }
//         else if(str[i]=='V'){
//             sum+=5
//         }
//         else if(str[i]=='X'){
//             if(str[i+1]=='L'){
//                 sum+=40
//                 i++
//             }
//             else if(str[i+1]=='C'){
//                 sum+=90
//                 i++
//             }
//             else{
//                 sum+=10
//             }
//         }
//         else if(str[i]=='L'){
//             sum+=50
//         }
//         else if(str[i]=='C'){
//             if(str[i+1]=='D'){
//                 sum+=400
//                 i++
//             }
//             else if(str[i+1]=='M'){
//                 sum+=900
//                 i++
//             }
//             else{
//                 sum+=100
//             }
//         }
//         else if(str[i]=='D'){
//             sum+=500
//         }
//         else if(str[i]=='M'){
//             sum+=1000
//         }
//     }
//     return sum
// }

// console.log(romanToNumber("MMCM"))


//balanced paranthesis

function bacalancedparanthesis(str){
    var stack=[]
    for(let i=0;i<str.length;i++){
        if(str[i]=='('||str[i]=='{'||str[i]=='['){
            stack.push(str[i]);
            continue;
        }
        if(stack.length==0){
            return false
        }
        var check;
        switch(str[i]){
            case ')':
                check=stack.pop()
                if(check=='{'||check=='['){
                    return false
                }
                break;
            case '}':
                check=stack.pop()
                if(check=='('||check=='['){
                    return false
                }
                break;
            case ']':
                check=stack.pop()
                if(check=='{'||check=='('){
                    return false
                }
                break;
            default:
                return false;
        }
    }
    return (stack.length==0)
}

if(bacalancedparanthesis("{()[a]}")){
    console.log("balanced")
}else{
    console.log("not balanced")
}


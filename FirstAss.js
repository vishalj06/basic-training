/ Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
 // Write your code here
 let largest=0,secondL=0;
 let i=array.length;
 for(let m=0;m<i;m++){
 
   if(largest < array[m])
     {
       secondL = largest;
       largest = array[m];
     }
   else
     {
       if(secondL < array[m])
       {
         secondL=array[m];
       }
     }
 }

 return secondL;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
 // Write your code here
 let myarray = {};
 let i = string.length;
 for(let m=0;m<i;m++)
   {
     if(string[m] >= "a" && string[m] <= "z")
       {
         if(string[m] in myarray)
           {
             myarray[string[m]] +=1;
           }
         else myarray[string[m]] = 1;
       }
   }
 return myarray;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
 // Write your code here
   var ans = {};
   function callMeBack(data, key) {
       if (Array.isArray(data)) {
         // console.log(Object(data) + "    " + data + "   "+ key + "In array");
           //console.log("Array found : "+ data + Array.isArray(data));
           let l = data.length;
           for (let i = 0 ; i < l; i++)
           callMeBack(data[i], key + "." + i);
       }
       else {
           if (Object(data) === data) {
             //console.log(Object(data) + "    " + data + "   "+ key);
               for (i in data) {
                 if(key)
                   callMeBack(data[i], key + "." + i);
                 else callMeBack(data[i],i);
               }
           }
           else{
               ans[key] = data;
             }
       }
   }
   callMeBack(unflatObject, "");
   return ans;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
 // Write your code here
 var result = {}, temp, keys, data, i;
 function getKeys(data)
 {
   var arr = [];
   arr = (data.toString()).split(".");
   return arr;
 }
 for (data in flatObject) {
     keys = getKeys(data);
     let l = keys.length;
     temp = result;
     for (i = 0; i < l - 1; i++) {
         if (!(keys[i] in temp)) {
             if (isFinite(keys[i + 1])) {
                 temp[keys[i]] = [];
             }
             else
                 temp[keys[i]] = {};

         }
         temp = temp[keys[i;
     }
     temp[keys[l - 1]] = flatObject[data];
 }
 return result;
}

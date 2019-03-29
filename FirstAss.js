/// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
 var fl=0,sl=0;
 for(no of array){
   if(no>fl){
     sl=fl
     fl=no
   }
   else if(no>sl)
     sl=no
 } 
  return sl
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  var obj={}
  for(var char1 of string)
    { if(char1 >='a' && char1<='z'){
      if(char1 in obj)
      obj[char1]+=1
      else
        obj[char1]=1

     }
    }
  return obj
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
 
   var obj = {};
   function flattening(data, key) {
       if (Array.isArray(data)) {
           
           for (let i in data)
           flattening(data[i], key + "." + i);
       }
       else {
           if (Object(data) === data) {

               for (i in data) {
                 if(key)
                   flattening(data[i], key + "." + i);
                 else flattening(data[i],i);
               }
           }
           else{
               obj[key] = data;
             }
       }
   }
   flattening(unflatObject, "");
   return obj;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format

function unflatten(flatObject) {
 // Write your code here
var fobj = {}
var curr, keys, data, ind; 
for (data in flatObject) 
{
        keys = (data.toString()).split(".");
        let l = keys.length;
	curr = fobj;     
	for (ind = 0; ind < l - 1; ind++) 
	{
             if (!(keys[ind] in curr)) {
             if (isFinite(keys[ind + 1])) {
                 curr[keys[ind]] = [];
             }
             else
                 curr[keys[ind]] = {};			
         }
         curr = curr[keys[ind]];	
     }
     curr[keys[l - 1]] = flatObject[data];
 }
 return fobj;
}

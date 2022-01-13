


//-----using rest operator to collect all parameters passed into the function. 
 const filter = (...args) => args.filter(v =>  v % 2 === 0);

//----- using Math.min to find the smallest value of parameters which got collected in our rest operator named arguments
 const findMin = (...arguments) => Math.min(...arguments);

 //----- we are using the object spread to combine both objects.
 const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2})      
 
 
//----- first we are saying in our parameters we are expecting an array
//----- and a unknown amount of numbers. Than we are returning all the values inside the array and all the number values doubled
const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map(v => v * 2)]


/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (...items) => {
  let idx =  Math.floor(Math.random() * items.length) // pick a random item from the rest operator
  return [...items.slice(0,idx), ...items.slice(idx + 1)];
// return new arrray with the items from the beginning until the randomly picked one, than continue one after the randomly picked one. 
}

// Return a new array with every item in array1 and array2. 

function extend(array1, array2) {
  return [...array1,...array2];     // destruct everything in array 1 and destruct everything in array 2 and combine it. 
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj,key,val) => {
  let newObj = { ...obj } // create new Obj with rest operator. 
  newObj[key] = val;      // key we provide  equals the value we provide
  return newObj
}

/** Return a new object with a key removed. */

const removeKey = (obj,key) => {
  let newObj = { ...obj };        // create new obj and collect in it all the different obj we pass in.
   delete newObj[key]             // remove/delete the new object with one key removed
   return newObj                  // return the new object.
}

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return {...obj1,...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
 let newObj = {... obj};      // collecting all the key value pairs of the object in the new created variable
newObj[key] = val             // newObject with modified Key and Value
return newObj
}



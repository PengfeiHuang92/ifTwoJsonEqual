const object1={
    address:'New York',
    age: 1.0 ,
    adult : true,
    name:'Adams',
    a: {
        name:'ABC',
        address:'ABC',
        age: 1 
    },
    b: ["aaa","bbb","cccc"]
    }
    
const object2={
    name:'Adams',
    address:'New York',
    age: 1.0,
    adult : true,
    a: {
        name:'ABC',
        address:'ABC',
        age: 1 
    },
    b: ["aaa","bbb","cccc"]
    
    }

function equal(jsonObj1,jsonObj2){
    //json object constructor
    var objectConstructor = ({}).constructor;
    //array object constructor
    var arrayConstructor = [].constructor;
   
    //checking if the two object has the same lenght  , retrn 
    if(Object.keys(jsonObj1).length == Object.keys(jsonObj2).length){

        for (key in jsonObj1){
            
            //if the json object contains an array obeject
            if(jsonObj1[key].constructor === arrayConstructor){
               //return false is two objects have the different length 
               if(jsonObj1[key].length != jsonObj2[key].length){
                    return false;
               }
               //checking if two arrays contain same elements
               for(const element of jsonObj1[key]){
                    if(!jsonObj2[key].includes(element)){
                        return false;
                    } 
               }
               return true;
           }
           //if the json object contains and json object,call equal function recursively 
            if(jsonObj1[key].constructor === objectConstructor){
                 equal(jsonObj1[key],jsonObj2[key]);
            }
            
            //return false if two json obejcts contain different value 
            if(jsonObj1[key] == jsonObj2[key]){
               continue;
            }else{
                return false;
            }
        }
      
    }  
    return false;
    
}
//function call
console.log(equal(object1,object2));
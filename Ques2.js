
    let obj1 = {
        name: "John",
        age: 23,
        degree: "CS"
    }
  
    let obj2 = {
        age: 23,
        degree: "CS"
    }

    function check(obj1, obj2) {
  
        for (key in obj2) {
              
            // Check if both objects do 
            // not have the equal values
            // of same key
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true
    }
  document.write(check(obj1,obj2))
    // Call the function
    console.log(check(obj1, obj2))

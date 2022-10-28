// const deepClone = obj => {
//     let clone = Object.assign({}, obj);
//     Object.keys(clone).forEach(
//       key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
//     );
//     return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
//   };
//   const a = { foo: 'bar', obj: { a: 1, b: 2 } };
//   const b = deepClone(a); // a !== b, a.obj !== b.obj
//   console.log(b)
//   document.write(a);
  

  
    var student1 ={
    name : "Manish",
    company : "Gfg"
 
    }
 
    var student2 = JSON.parse(JSON.stringify(student1))
 
    student1.name = "Rakesh"
 
    console.log("student 1 name is",student1.name)
    console.log("student 2 name is ",student2.name);
document.write(student1.name,student2.name)
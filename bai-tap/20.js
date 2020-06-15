// Chú ý phần dấu ;
// 

const foo = () => {
    return {
      foo: 'foo'
    }
  }
  
// foo tương đương
/**
 * const foo = () => {
    return {
      foo: 'foo'
    };
  }
 */

const bar = () => {
    return
    {
      bar: 'bar'
    }
}
   
// bar tương đương
/**
 * const bar = () => {
    return; 
    {
      bar: 'bar'
    }
}
 */
  console.log(foo(), bar());

function fetchData(){
    return fetch('https://jsonplaceholder.typicode.com/users')
}

test('The data is peanut butter', ()=>{
    return fetchData().then(data=>{
      expect(data).not.toBeNull()
    })
})
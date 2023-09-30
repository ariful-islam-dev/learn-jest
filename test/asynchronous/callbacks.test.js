function fetchData(){
    return fetch('https://jsonplaceholder.typicode.com/users')
}

test('the data is users', ()=>{
    function callback(error, data){
        if(error){
            throw error;
        }
        expect(data.status).toBe(200)
    }

    fetchData(callback);
})

// finishing the test

// test('GET all users data', done=>{
//     function callback(err, data){
//         if(err){
//             done(err);
//             return;
//         }
//         try {
//             expect(data).toBeTruthy()
//             done();
//         } catch (err) {
//            done(err);
//         }
//     }

    fetchData(callback)
})
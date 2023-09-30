function fetchData(){
    return fetch('https://jsonplaceholder.typicode.com/users')
}
test('Test data is peanut butter', async()=>{
    const data = await fetchData();
    expect(data.status).toBe(200);
})

test('The fetch fails with an error', async()=>{
    // expect.assertions(1);
    try {
        await fetchData();
    } catch (error) {
        expect(error).toMatch('error')
    }
})

test('the data is peanut butter', async()=>{
    await expect((fetchData())).resolves.toBeTruthy()
})

// test('the fetch fails with an error', async()=>{
//     await expect(fetchData()).rejects.toMatch('error')
// })
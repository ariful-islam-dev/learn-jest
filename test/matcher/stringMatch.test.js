test('there is no I in team', ()=>{
    expect('team').not.toMatch(/I/);
    expect('is').toMatch(/s/)
})

test('But there is a "stop" in Christoph', ()=>{
    expect('Christoph').toMatch(/stop/);
})
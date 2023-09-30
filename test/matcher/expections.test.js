function compileAndroidCode(){
    throw new Error('You are using the wrong JDK!');
}

test('compiling android goes as expected', ()=>{
    expect(()=>compileAndroidCode()).toThrow();
    expect(()=>compileAndroidCode()).toThrow(Error);

    // you can also use a string that must be contained in the
    expect(()=>compileAndroidCode()).toThrow('You are using the wrong JDK');
    expect(()=>compileAndroidCode()).toThrow(/JDK/);

    // or you can match an exact error message using a regexp like below
    expect(()=>compileAndroidCode()).toThrow(/^You are using the wrong JDK!$/);
})
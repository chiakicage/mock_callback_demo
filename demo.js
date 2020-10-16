let mocker=require('./mocker')
console.log('Request Start')
mocker.login('123','123',function(data,error){
    if(error) throw error;
    let token=data;
    console.log(token)
    mocker.list(token,function(data,error){
        if(error) throw error;
        console.log(data);
        //...?
    })
})
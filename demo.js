let mocker = require('./mocker')
console.log('Request Start')
mocker.login('123', '123', function (data, error) {
    if (error) throw error;
    let token = data;
    console.log(token)
    mocker.list(token, function (data, error) {
        if (error) throw error;
        console.log(data);
        let arr = [];
        let cnt = data.length;
        for (let id of data) {
            mocker.item(token, id, function(data, error) {
                if (error) throw error;
                console.log(data);
                arr.push(data);
                if (arr.length === cnt) {
                    console.log(arr);
                }
            });
        }
    })
})

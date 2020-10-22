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
        let p = new Promise((resolve, reject) => {
            if (data.length === 0) reject('Empty Data!');
            mocker.item(token, data[0], resolve);
        });
        for (let i = 0; i < data.length; i++) {
            p = p.then((res, error) => {
                return new Promise((resolve, reject) => {
                    if (error) reject(error);
                    else {
                        arr.push(res);
                        if (i + 1 < data.length) {
                            mocker.item(token, data[i + 1], resolve);
                        } else resolve();
                    }
                })
            });
        }
        p.then(() => {
            console.log(arr);
        }).catch((error) => {
            throw error;
        });
        console.log('done.');
    })
})

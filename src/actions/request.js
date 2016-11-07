import request from 'superagent';

export function postman(data) {
    const resHandler = (res) => {
        const resData = JSON.parse(res.text);
        if(resData.result_code===0||resData.resultCode===0){
            data.success(resData);
        }else{
            alert(resData.errMsg||resData.err_detail)
        }
    }
    if (data.type.toLocaleLowerCase() === 'get') {
        request
            .get(data.url)
            .query(data.data)
            .end((err, res) => {
                resHandler(res);
            });
    } else if (data.type.toLocaleLowerCase() === 'post') {
        request.post(data.url)
            .send(data.data)
            .end((err, res) => {
                resHandler(res);
            })
    } else {
        alert('请输入请求类型');
    }
}
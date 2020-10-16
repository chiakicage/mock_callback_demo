let token='It is a secret token.';
const WRONG_PASSWORD=1;
const WRONG_TOKEN=2;
function login(username,password,callback){
    if(username===password) 
        setTimeout(() => {
            callback(token,undefined);
        }, 1000); 
    else callback(undefined,WRONG_PASSWORD);
}
function list(tk,callback){
    if(tk===token)
        setTimeout(()=>{
            callback([1,2,3],undefined)
        },1000);
    else callback(undefined,WRONG_TOKEN)
}
function item(tk,id,callback){
    if(tk===token && (id==1 || id==2 || id==3))
        setTimeout(()=>{
            callback({
                    id: id,
                    num: id*2
                },undefined)
        },500);
    else callback(undefined,WRONG_TOKEN)
}
module.exports={
    login, list, item,
    WRONG_PASSWORD,
    WRONG_TOKEN
}
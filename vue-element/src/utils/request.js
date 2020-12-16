import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 50000,
})
/**
 * @method sendServer
 * @param {object} urlParams 数据
 * @param {object} me this 
 */
const sendServer = (urlParams,me)=>{
    return new Promise((resolve,reject)=>{
        service.post(urlParams.url,urlParams.send).then((res)=>{
    console.log(res)
            if(res.status === 200){
                resolve(res.data)
            }else{
                reject(false)
            }
        })
    })
}
export {
    sendServer
}
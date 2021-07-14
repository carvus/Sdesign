export const request =  (method, url) => new Promise(async(rslv, rjct)=>{
    try{
        const rslt = await fetch(url, { method });
        const rspAsJson = await rslt.json();
        rslv(rspAsJson);
    }
    catch(err){
        rjct(err);
    }
})
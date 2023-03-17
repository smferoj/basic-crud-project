import axios from 'axios';

export function Create(ProductName, ProductCode,Img, UnitPrice,Qty,TotalPrice){
let apiBase = "https://crudapi.smferoj.com"
    let URL = apiBase+"/api/v1/CreateProduct";
    
let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
}
return axios.post(URL, PostBody).then((res)=>{
    
if(res.status === 200){
    return true;
}
else{
    return false;
}
}).catch((err)=>{
  
    return false;
});
    
}
export function Read(){
    let apiBase = "https://crudapi.smferoj.com"
    let URL = apiBase+"/api/v1/ReadProduct"
    return axios.get(URL).then((res)=>{
        if(res.status === 200){
            return res.data['data'];
           
        }
        else{
            return false;
        }
    }).catch((err)=>{
    return false;
    });
      
}

export function ReadByid(id){
    let apiBase = "https://crudapi.smferoj.com"
    let URL = apiBase+"/api/v1/ReadProductById/"+id;
    console.log("======>"+URL)
    return axios.get(URL).then((res)=>{
        if(res.status === 200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
    return false;
    });

}



export function Delete(id){
    let apiBase = "https://crudapi.smferoj.com"
    let URL = apiBase+"/api/v1/DeleteProduct/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status === 200){
            return true;
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });

}
export function Update(id, ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice){
    let apiBase = "https://crudapi.smferoj.com"
    let URL = apiBase +"/api/v1/UpdateProduct/"+id;
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotolPrice:TotalPrice
}
   return axios.post(URL, PostBody).then((res)=>{
    if(res.status === 200){
        return true;
    }
    else{
        return false;
    }
   }).catch((err)=>{
    console.log(err);
    return false;
   });
        
}
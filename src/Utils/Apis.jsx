
import axios from 'axios'
const token = ` Bearer ${localStorage.getItem('token')}`;
// console.log('my-token',token)

const newngrok1= 'http://auth.edu2all.in:5000';
// const newngrok1= 'http://192.168.20.109:5000';
// const newngrok2= 'https://ab50-122-176-144-184.ngrok-free.app';

// ***************************************************************************************
                            // Login  //
// ***************************************************************************************


export const loginApi = async(data) => {

    let res = await axios.post(`${newngrok1}/login/all`,data);

    if (res) {
        return res;
    }else{
       return [];
    }
}

// ################### Subscription Apis start ####################### 

// GetAll 

export const GetApi = async(searchKey,pageNo,pageSize,startDate,endDate) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/subs/getAllSubs?searchKey=${searchKey}&page=${pageNo}&size=${pageSize}&startDate=${startDate}&lastDate=${endDate}`)

//    console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}
// delete Api 

export const SubscriptionDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/subs/deleteById/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Get By id 

export const SubscriptionGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/subs/getBySubsId/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Put Api 

export const SubscriptionPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/subs/editBySubsId/${id}`,datares)
   
   // console.log('my-response-get-by-id-suscription', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Get data Api from Plan modules __________

export const PlanGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/plan/getAllPlan?pageNo=1&pageSize=4`)
   
//    console.log('my-response', res)

   if(res) {
    return res;
   }
   else{
    return []
   }
}

// ################### Subcription Apis  end  ####################### 




// ################### Request Apis ####################### 

// Get all api 
export const RequestGetApi = async(searchKey,pageNo,pageSize,startDate,endDate) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/request/getAll?searchKey=${searchKey}&page=${pageNo}&size=${pageSize}&startDate=${startDate}&lastDate=${endDate}`)
   // console.log(res2)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// resqust delete api 
export const RequestDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/request/delete?reqId=${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Get by id 
export const RequestGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/request/getRequests?reqId=${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Put Data Api 
export const RequestPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/request/viewId/${id}`, datares)
   console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// request update
export const RequestUpdatePutApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.put(`${newngrok1}/request/update`, datares)
  console.log('my-response-get-by-id', res2)

  if(res2) {
   return res2;
  }
  else{
   return []
  }
}


// ################### Request Apis end  ####################### 








// ################### specialfeature and addon Apis start  ####################### 

// GetAll 

export const SpecialFeaGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/fea/getAllFeatures`)
   
//    console.log('my-response', res)

   if(res) {
    return res;
   }
   else{
    return []
   }
}

// delete Api 

export const SpecialFeaDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/fea/deleteById?feaId=${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}



// ################### specialfeature and addon Apis end  ####################### 


import { ADDINJURY,UPDATEINJURY,FINDINJURY,DELETEINJURY,FINDALLINJURIES } from "./action";
import { ADDINCIDENTS,UPDATEINCIDENTS,FINDINCIDENTS,DELETEINCIDENTS,FINDALLINCIDENTS } from "./action";
import { ADDDEFINEDACTION,UPDATEDEFINEDACTION,FINDDEFINEDACTION,DELETEDEFINEDACTION,FINDALLDEFINEDACTION } from "./action";
import { ADDREPORTS,UPDATEREPORTS,FINDREPORTS,DELETEREPORTS,FINDALLREPORTS } from "./action";
import { ADDACTIONS,UPDATEACTIONS,FINDACTIONS,DELETEACTIONS,FINDALLACTIONS } from "./action";

import axios from 'axios';

  export function addInjury(obj){
      console.log(obj)
      axios.post('http://localhost:8081/loginjuries',obj).then((res)=>{
          console.log(res.data)
      }).catch((e)=>{
          console.log(e)
      })
  return (dispatch)=>{
      return axios.get('http://localhost:8081/injuriesreport').then((res)=>{
          return res.data
      }).then (data=>{
          dispatch({
              type:ADDINJURY,
              payload:data
          })
      })
      .catch(err =>{
          throw (err)
      })
  }
}
export function deleteInjury(id){
     axios.delete(`http://localhost:8081/deleteinjuries/${id}`).then((res)=>{
        console.log(res.data)
    }) 
    return (dispatch)=>{
        return axios.get('http://localhost:8081/injuriesreport').then((res)=>{
            return res
        }).then(data=>{
            dispatch({
                type:DELETEINJURY,
                payload:id
                
            })
        })

    }  
    }
 export function updateInjury(obj){
      axios.patch('http://localhost:8081/editinjuries',obj).then((res)=>{
         console.log(res.data)
     }).catch((e)=>{
         console.log(e)
     })
     return(dispatch)=>{
         return axios.get('http://localhost:8081/injuriesreport')
     .then(res=>{
         return res.data }).then(data=>{
            dispatch({
                type:UPDATEINJURY,
                payload:obj
    
             })
         })
        
        }
}
 export function findInjury(id){
     return{
         type:FINDINJURY,
         payload:id
     }
 }
 export function findAllInjueries(){
     return(dispatch)=>{
         return axios.get("http://localhost:8081/injuriesreport").then((res)=>{
             return res.data
         }).then(data=>{
             dispatch({
                 type:FINDALLINJURIES,
                 payload:data
             })
         })
         .catch(err =>{
             throw (err)
         })
     }
     
     }
     


     export function addIncidents(obj){
        console.log(obj)
        axios.post('http://localhost:8081/logincidents',obj).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    return (dispatch)=>{
        return axios.get('http://localhost:8081/getincidents').then((res)=>{
            return res.data
        }).then (data=>{
            dispatch({
                type:ADDINCIDENTS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
  }
  export function deleteIncidents(id){
    axios.delete(`http://localhost:8081/deleteincidents/${id}`).then((res)=>{
       console.log(res.data)
   }) 
   return (dispatch)=>{
       return axios.get('http://localhost:8081/getincidents').then((res)=>{
           return res
       }).then(data=>{
           dispatch({
               type:DELETEINCIDENTS,
               payload:id
               
           })
       })

   }  
   }
   export function updateIncidents(obj){
    axios.patch('http://localhost:8081/editincidents',obj).then((res)=>{
       console.log(res.data)
   }).catch((e)=>{
       console.log(e)
   })
   return(dispatch)=>{
       return axios.get('http://localhost:8081/getincidents')
   .then(res=>{
       return res.data }).then(data=>{
          dispatch({
              type:UPDATEINCIDENTS,
              payload:obj
  
           })
       })
      
      }
}
export function findIncidents(id){
    return{
        type:FINDINCIDENTS,
        payload:id
    }
}
export function findAllIncidents(){
    return(dispatch)=>{
        return axios.get("http://localhost:8081/getincidents").then((res)=>{
            return res.data
        }).then(data=>{
            dispatch({
                type:FINDALLINCIDENTS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
    
    }



    
    export function addDefinedActions(obj){
        console.log(obj)
        axios.post('http://localhost:8081/logincident',obj).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    return (dispatch)=>{
        return axios.get('http://localhost:8081/getincident').then((res)=>{
            return res.data
        }).then (data=>{
            dispatch({
                type:ADDDEFINEDACTION,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
  }
  export function deleteDefinedIncidents(id){
    axios.delete(`http://localhost:8081/deleteincident/${id}`).then((res)=>{
       console.log(res.data)
   }) 
   return (dispatch)=>{
       return axios.get('http://localhost:8081/getincident').then((res)=>{
           return res
       }).then(data=>{
           dispatch({
               type:DELETEDEFINEDACTION,
               payload:id
               
           })
       })

   }  
   }
   export function updateDefinedAction(obj){
    axios.patch('http://localhost:8081/editincident',obj).then((res)=>{
       console.log(res.data)
   }).catch((e)=>{
       console.log(e)
   })
   return(dispatch)=>{
       return axios.get('http://localhost:8081/getincident')
   .then(res=>{
       return res.data }).then(data=>{
          dispatch({
              type:UPDATEDEFINEDACTION,
              payload:obj
  
           })
       })
      
      }
}
export function findDefinedAction(id){
    return{
        type:FINDDEFINEDACTION,
        payload:id
    }
}
export function findAllDefinedAction(){
    return(dispatch)=>{
        return axios.get("http://localhost:8081/getincident").then((res)=>{
            return res.data
        }).then(data=>{
            dispatch({
                type:FINDALLDEFINEDACTION,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
    
    }



 export function addReuest(obj){
        console.log(obj)
        axios.post('http://localhost:8081/addrequest',obj).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    return (dispatch)=>{
        return axios.get('http://localhost:8081/getrequest').then((res)=>{
            return res.data
        }).then (data=>{
            dispatch({
                type:ADDACTIONS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
  }
  export function deleteRequest(id){
    axios.delete(`http://localhost:8081/deleterequest/${id}`).then((res)=>{
       console.log(res.data)
   }) 
   return (dispatch)=>{
       return axios.get('http://localhost:8081/getrequest').then((res)=>{
           return res
       }).then(data=>{
           dispatch({
               type:DELETEACTIONS,
               payload:id
               
           })
       })

   }  
   }
   export function updateRequest(obj){
    axios.patch('http://localhost:8081/editrequest',obj).then((res)=>{
       console.log(res.data)
   }).catch((e)=>{
       console.log(e)
   })
   return(dispatch)=>{
       return axios.get('http://localhost:8081/getrequest')
   .then(res=>{
       return res.data }).then(data=>{
          dispatch({
              type:UPDATEACTIONS,
              payload:obj
  
           })
       })
      
      }
}
export function findRequest(id){
    return{
        type:FINDACTIONS,
        payload:id
    }
}
export function findAllRequest(){
    return(dispatch)=>{
        return axios.get("http://localhost:8081/getrequest").then((res)=>{
            return res.data
        }).then(data=>{
            dispatch({
                type:FINDALLACTIONS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }  
    }


    export function addReports(obj){
        console.log(obj)
        axios.post('http://localhost:8081/reportbuilder',obj).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    return (dispatch)=>{
        return axios.get('http://localhost:8081/viewreports').then((res)=>{
            return res.data
        }).then (data=>{
            dispatch({
                type:ADDREPORTS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
  }
  export function deleteReports(id){
    axios.delete(`http://localhost:8081/deletereports/${id}`).then((res)=>{
       console.log(res.data)
   }) 
   return (dispatch)=>{
       return axios.get('http://localhost:8081/viewreports').then((res)=>{
           return res
       }).then(data=>{
           dispatch({
               type:DELETEREPORTS,
               payload:id
               
           })
       })

   }  
   }
   export function updateReports(obj){
    axios.patch('http://localhost:8081/updatesreports',obj).then((res)=>{
       console.log(res.data)
   }).catch((e)=>{
       console.log(e)
   })
   return(dispatch)=>{
       return axios.get('http://localhost:8081/viewreports')
   .then(res=>{
       return res.data }).then(data=>{
          dispatch({
              type:UPDATEREPORTS,
              payload:obj
  
           })
       })
      
      }
}
export function findReports(id){
    return{
        type:FINDREPORTS,
        payload:id
    }
}
export function findAllReports(){
    return(dispatch)=>{
        return axios.get("http://localhost:8081/viewreports").then((res)=>{
            return res.data
        }).then(data=>{
            dispatch({
                type:FINDALLREPORTS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }  
    }


    export function addActions(obj){
        console.log(obj)
        axios.post('http://localhost:8081/addrequest',obj).then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    return (dispatch)=>{
        return axios.get('http://localhost:8081/getrequest').then((res)=>{
            return res.data
        }).then (data=>{
            dispatch({
                type:ADDACTIONS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }
  }
  export function deleteActions(id){
    axios.delete(`http://localhost:8081/deleterequest/${id}`).then((res)=>{
       console.log(res.data)
   }) 
   return (dispatch)=>{
       return axios.get('http://localhost:8081/getrequest').then((res)=>{
           return res
       }).then(data=>{
           dispatch({
               type:DELETEACTIONS,
               payload:id
               
           })
       })

   }  
   }
   export function updateActions(obj){
    axios.patch('http://localhost:8081/editrequest',obj).then((res)=>{
       console.log(res.data)
   }).catch((e)=>{
       console.log(e)
   })
   return(dispatch)=>{
       return axios.get('http://localhost:8081/getrequest')
   .then(res=>{
       return res.data }).then(data=>{
          dispatch({
              type:UPDATEACTIONS,
              payload:obj
  
           })
       })
      
      }
}
export function findActions(id){
    return{
        type:FINDACTIONS,
        payload:id
    }
}
export function findAllActions(){
    return(dispatch)=>{
        return axios.get("http://localhost:8081/getrequest").then((res)=>{
            return res.data
        }).then(data=>{
            dispatch({
                type:FINDALLACTIONS,
                payload:data
            })
        })
        .catch(err =>{
            throw (err)
        })
    }  
    }
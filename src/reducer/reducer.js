import { ADDINJURY,UPDATEINJURY,FINDALLINJURIES,FINDINJURY,DELETEINJURY } from "../action/action";
import { ADDINCIDENTS,UPDATEINCIDENTS,FINDINCIDENTS,DELETEINCIDENTS,FINDALLINCIDENTS } from "../action/action";
import { ADDDEFINEDACTION,UPDATEDEFINEDACTION,FINDDEFINEDACTION,DELETEDEFINEDACTION,FINDALLDEFINEDACTION } from "../action/action";
import { ADDREPORTS,UPDATEREPORTS,FINDREPORTS,DELETEREPORTS,FINDALLREPORTS } from "../action/action";
import { ADDACTIONS,UPDATEACTIONS,FINDACTIONS,DELETEACTIONS,FINDALLACTIONS } from "../action/action";


const reducer=(state=[],action)=>{
    switch(action.type){
            case ADDINJURY:
                state=[...action.payload]
            return state
            case FINDINJURY:
            return state
            case UPDATEINJURY:
            return state
            case DELETEINJURY:
            return state
            case FINDALLINJURIES:
                state=[...action.payload]
            return state

           

            case ADDINCIDENTS:
                state=[...action.payload]
            return state
            case FINDINCIDENTS:
            return state
            case UPDATEINCIDENTS:
            return state
            case DELETEINCIDENTS:
            return state
            case FINDALLINCIDENTS:
                state=[...action.payload]
            return state



            case ADDDEFINEDACTION:
                state=[...action.payload]
            return state
            case FINDDEFINEDACTION:
            return state
            case UPDATEDEFINEDACTION:
            return state
            case DELETEDEFINEDACTION:
            return state
            case FINDALLDEFINEDACTION:
                state=[...action.payload]
            return state


            case ADDACTIONS:
                state=[...action.payload]
            return state
            case FINDACTIONS:
            return state
            case UPDATEACTIONS:
            return state
            case DELETEACTIONS:
            return state
            case FINDALLACTIONS:
                state=[...action.payload]
            return state


            case ADDREPORTS:
                state=[...action.payload]
            return state
            case FINDREPORTS:
            return state
            case UPDATEREPORTS:
                state=[...action.payload]
            return state
            case DELETEREPORTS:
                state=[...action.payload]
            return state
            case FINDALLREPORTS:
                state=[...action.payload]
            return state


    }
    }
    export default reducer
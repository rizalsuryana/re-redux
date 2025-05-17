import { TargetActionType } from './action';

export const targetReducer = (targets= [], action = {}) => {
  switch (action.type){
  case TargetActionType.ADD_TARGET:
    return [...targets, action.payload];
  case TargetActionType.DELETE_TARGET:
    return targets.filter((target) => target.id !== action.payload.id);
  case TargetActionType.TOOGLE_TARGET:
    return targets.map((target)=>{
      if (target.id === action.payload.id){
        return { ...target, complete: !target.complete };
      }
      return target;
    });
  default:
    return targets;
  }
};
import {createAction, props} from "@ngrx/store";

export const setFirstName =
  createAction('[Form] Set First Name', props<{ firstName: string }>())
export const setLastName  =
  createAction('[Form] Set Last Name',props<{lastName:string}>())
export const setEmail =
  createAction('[Form] Set Email',props<{email:string}>())
export const setPassword =
  createAction('[Form] Set Password',props<{password:string}>())

import {createReducer, on} from "@ngrx/store";
import {Form} from "../model/form.model"
import * as FormActions from "../actions/form.action"

const initialState: Form = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.setFirstName, (state, {firstName}) => (
    {...state, firstName}
  )),
  on(FormActions.setLastName, (state, {lastName}) => (
    {...state, lastName}
  )),
  on(FormActions.setEmail,(state , {email})=>(
    {...state,email}
  )),
  on(FormActions.setPassword , (state, {password})=>(
    {...state,password}
  ))
);

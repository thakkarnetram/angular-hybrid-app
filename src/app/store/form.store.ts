import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {formReducer} from "./reducer/form.reducer";

@NgModule({
  imports:[
    StoreModule.forFeature('form',formReducer)
  ]
})
export class FormStoreModule{}

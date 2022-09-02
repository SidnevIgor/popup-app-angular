import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomsheetComponent } from "./bottomsheet/bottomsheet.component";

import { NativeScriptMaterialBottomSheetModule } from "@nativescript-community/ui-material-bottomsheet/angular";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialBottomSheetModule.forRoot(),
  ],
  declarations: [AppComponent, BottomsheetComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

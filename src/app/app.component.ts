import { Component, ViewContainerRef } from "@angular/core";
import {
  BottomSheetService,
  BottomSheetOptions,
} from "@nativescript-community/ui-material-bottomsheet/angular";
import { BottomsheetComponent } from "./bottomsheet/bottomsheet.component";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(
    private bottomSheet: BottomSheetService,
    private containerRef: ViewContainerRef
  ) {}

  openBottomsheet() {
    const options: BottomSheetOptions = {
      viewContainerRef: this.containerRef,
      context: ["Пищевая безопасность", "Охрана труда", "Эргономика"],
    };
    this.bottomSheet.show(BottomsheetComponent, options);
  }
}

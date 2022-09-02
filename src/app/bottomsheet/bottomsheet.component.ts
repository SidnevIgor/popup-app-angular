import { Component, OnInit } from "@angular/core";
import { BottomSheetParams } from "@nativescript-community/ui-material-bottomsheet/angular";
import { ItemEventData } from "@nativescript/core";

@Component({
  selector: "app-bottomsheet",
  templateUrl: "./bottomsheet.component.html",
  styleUrls: ["./bottomsheet.component.scss"],
})
export class BottomsheetComponent implements OnInit {
  options: string[];

  constructor(private params: BottomSheetParams) {}

  ngOnInit(): void {
    this.options = this.params.context;
  }

  onTap({ index }: ItemEventData) {
    this.params.closeCallback(this.options[index]);
  }

  onClose() {
    this.params.closeCallback();
  }
}

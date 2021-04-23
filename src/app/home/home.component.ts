import { Component } from "@angular/core";
import { BSCService } from "./bsc.service";
import { IgxToastComponent } from "igniteui-angular";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [BSCService]
})
export class HomeComponent {
  constructor(private bscService: BSCService) {}
  tokenData;
  loading: boolean;
  hasError: boolean;
  errorMessage: string;
  isPasta: boolean;
  initialLoad: boolean = true;
  getTokenData(address: string, errorToast: IgxToastComponent) {
    this.initialLoad = false;
    this.loading = true;
    this.isPasta = false;
    this.errorMessage = "";
    this.hasError = false;
    this.bscService.getTokenDetails(address).subscribe((data: any) => {
      console.log(data);
      this.loading = false;
      if (data.message === "NOTOK") {
        this.hasError = true;
        this.errorMessage = data.result;
        errorToast.open(data.result);
      } else {
        this.hasError = false;
        this.errorMessage = "";
        this.isPasta = data.result[0].SourceCode.indexOf("SafeMath") > -1;
        console.log("Is pasta?", this.isPasta)
      }
      this.tokenData = data;
    });
  }
}

import { Component } from "@angular/core";
import { routes } from "./app-routing.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Is it a Safemoon copy pasta?";
  routes = routes.filter(r => r.data);
}

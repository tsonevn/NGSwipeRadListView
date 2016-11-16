import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";

export const routes = [
    { path: "", redirectTo: "/first", pathMatch: "full" },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent }
];
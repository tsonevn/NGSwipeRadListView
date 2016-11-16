// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes } from "./app.routes";
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';

@NgModule({
    declarations: [AppComponent, FirstComponent, SecondComponent,LISTVIEW_DIRECTIVES],
    entryComponents: [FirstComponent, SecondComponent],
    bootstrap: [AppComponent],
     imports: [NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
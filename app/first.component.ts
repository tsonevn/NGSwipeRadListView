import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "first",
    template: `
        <StackLayout>
            <Label text="First component" class="title"></Label>
            <Button text="GO TO ListView" [nsRouterLink]="['/second']" class="link"></Button>
        </StackLayout>
    `
})
export class FirstComponent { 
    constructor(private page:Page){
    }
}
import { Component } from "@angular/core";
import {Page} from "ui/page";
import {ListViewEventData, RadListView} from "nativescript-telerik-ui/listview";
var frameModule = require("ui/frame");
import {ObservableArray} from "data/observable-array"

@Component({
    selector: "second",
    templateUrl:"second.component.html"
})
export class SecondComponent {
    public dataItems;
    public listviewitems=[];
    constructor(private page:Page){
        this.dataItems =[
        { "id": 1, "name": "Item 1", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 2, "name": "Item 2", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 3, "name": "Item 3", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 4, "name": "Item 4", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 5, "name": "Item 5", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 6, "name": "Item 6", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 7, "name": "Item 7", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 8, "name": "Item 8", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 9, "name": "Item 9", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image", "selected": false },
        { "id": 10, "name": "Item 10", "description":"This is item description.", "title": "This is item Title", "text": "This is item Text",  "image": "This is item Image" , "selected": false}];
        for(var i=0; i<this.dataItems.lenght; i++){
            this.listviewitems.push(this.dataItems[i]);
        }
    }

    public onRightSwipeClick() {
        console.log("remove")
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var listView = frameModule.topmost().currentPage.getViewById("listView");

        swipeLimits.threshold = listView.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.right = listView.getMeasuredWidth();
    }

    public onSwipeCellFinished(args: ListViewEventData) {
        var listview:RadListView=<RadListView> this.page.getViewById("listView");
        this.listviewitems=[];
        if (args.data.x < -200) {
            console.log("Perform right action");
            console.log(args.itemIndex);
            //delete this.dataItems[args.itemIndex];
            this.dataItems= this.remove(args.itemIndex, this.dataItems);
            // for(var i=0; i<this.dataItems.length; i++){
            //     if(i != args.itemIndex){
            //         console.log("find index "+i)
            //         this.listviewitems.push(this.dataItems[i]);
            //     }
                
            // }
            // this.dataItems=[];
            // for(var i=0; i<this.listviewitems.length; i++){
            //     this.dataItems.push(this.dataItems[i]);
            // }
            listview.refresh();
        }
    }
    remove(index, array){
        var tmpArray = [];
        for(var i=0; i<array.length; i++){
            if(index == i){
                console.log("do not include")
            }
            else{
                tmpArray.push(array[i]);
            }
        }
        return tmpArray;
    };
 }
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
let MainComponent = class MainComponent {
    constructor(httpTrenitaliaService) {
        this.httpTrenitaliaService = httpTrenitaliaService;
        this.userFrom = "";
        this.solution = new Observable;
    }
    ngOnInit() {
        this.date = new Date().toISOString().substring(0, 10);
        console.log(new Date().toLocaleDateString('en-US'));
        this.hour = new Date().getHours().toString();
    }
    readText(userFrom) {
        this.solution = this.httpTrenitaliaService.getSolution(this.userFrom, this.userTo, this.date, this.hour);
        console.log(this.userFrom);
        console.log(this.userTo);
        (this.solution.subscribe(val => console.log(val)));
    }
    onKeyUserFrom(event) {
        this.userFrom = event.target.value;
    }
    onKeyUserTo(event) {
        this.userTo = event.target.value;
    }
    onKeyUserDate(event) {
        this.date = event.target.value;
    }
    onKeyUserHour(event) {
        this.hour = event.target.value;
    }
};
MainComponent = __decorate([
    Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.css']
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpTrenitaliaService = class HttpTrenitaliaService {
    constructor(http) {
        this.http = http;
    }
    getSolution(from, to, startDate, hour) {
        return this.http.get(`/msite/api/solutions?origin=${from}&destination=${to}&arflag=A&adate=${startDate}&atime=${hour}&adultno=1&childno=0&direction=A&frecce=false&onlyRegional=false`);
    }
    getAutoCompleteStation(station) {
        console.log(`/msite/api/geolocations/locations?name=${station}`);
        return this.http.get(`/msite/api/geolocations/locations?name=${station}`);
    }
};
HttpTrenitaliaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpTrenitaliaService);
export { HttpTrenitaliaService };
//# sourceMappingURL=http-trenitalia.service.js.map
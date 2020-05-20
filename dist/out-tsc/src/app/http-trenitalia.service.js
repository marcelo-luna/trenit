import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpTrenitaliaService = class HttpTrenitaliaService {
    constructor(http) {
        this.http = http;
        console.log('teste');
    }
    getSolution(from, to, startDate, hour) {
        console.log(`https://www.lefrecce.it/msite/api/solutions?origin=${from.replace(" ", "%20")}&destination=${to}&arflag=A&adate=${startDate}&atime=${hour}&adultno=1&childno=0&direction=A&frecce=false&onlyRegional=false`);
        return this.http.get(`https://www.lefrecce.it/msite/api/solutions?origin=${from}&destination=${to}&arflag=A&adate=${startDate}&atime=${hour}&adultno=1&childno=0&direction=A&frecce=false&onlyRegional=false`);
    }
};
HttpTrenitaliaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpTrenitaliaService);
export { HttpTrenitaliaService };
//# sourceMappingURL=http-trenitalia.service.js.map
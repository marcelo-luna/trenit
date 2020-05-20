import { Trainlist } from '../models/Trainlist'

export class Solution {
    idsolution: string;
    origin: string;
    destination: string;
    direction: string;
    departuretime: number;
    departurestring: string;
    arrivaltime: number;
    minprice: number;
    optionaltext?: any;
    duration: string;
    changesno: number;
    bookable: boolean;
    saleable: boolean;
    trainlist: Trainlist[];
    onlycustom: boolean;
    extraInfo: any[];
    showSeat: boolean;
    specialOffer?: any;
    transportMeasureList: any[];
    
    constructor(){}
}
import { Flights } from './flights.service';
import { BookingInformation } from './booking-info.service';

export interface SearchResponse {
    oneWayFlights: Flights[];
    returningFlights?: Flights[];
    oneway: boolean;
    bookingInfo: BookingInformation;
};
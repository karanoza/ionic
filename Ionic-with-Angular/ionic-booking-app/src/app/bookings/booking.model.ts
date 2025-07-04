export class Booking {
    constructor(
        public id: string,
        public userId: string,
        public placeId: string,
        public placeTitle: string,
        public placeImage: string,
        public firstName: string,
        public lastName: string,
        public bookFrom: Date,
        public bookTo: Date,
        public guestNumber: string,
    ) {}
}
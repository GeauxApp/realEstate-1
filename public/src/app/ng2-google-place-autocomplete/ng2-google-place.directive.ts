import {
    Directive,
    Input,
    Output,
    NgZone,
    ElementRef,
    EventEmitter,
    OnInit
} from '@angular/core';
import { GooglePlaceService } from './ng2-google-place.service';
import { Address } from './ng2-google-place.classes';
declare let google: any;

@Directive({
    selector: '[ng2-google-place-autocomplete]',

})
export class GooglePlaceDirective implements OnInit {
    @Input('options') options: any;

    @Output() CountryCodes: EventEmitter<any> = new EventEmitter();

    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @Output() street_number: EventEmitter<any> = new EventEmitter();

    @Output() postal_code: EventEmitter<any> = new EventEmitter();
    @Output() country: EventEmitter<any> = new EventEmitter();
    @Output() lat: EventEmitter<any> = new EventEmitter();
    @Output() lng: EventEmitter<any> = new EventEmitter();
    @Output() adr_address: EventEmitter<any> = new EventEmitter();
    @Output() formatted_address: EventEmitter<any> = new EventEmitter();
    @Output() name: EventEmitter<any> = new EventEmitter();
    @Output() place_id: EventEmitter<any> = new EventEmitter();
    @Output() types: EventEmitter<any> = new EventEmitter();
    @Output() url: EventEmitter<any> = new EventEmitter();
    @Output() utc_offset: EventEmitter<any> = new EventEmitter();
    @Output() vicinity: EventEmitter<any> = new EventEmitter();
    @Output() photos: EventEmitter<any> = new EventEmitter();
    @Output() street: EventEmitter<any> = new EventEmitter();
    @Output() city: EventEmitter<any> = new EventEmitter();
    @Output() state: EventEmitter<any> = new EventEmitter();
    @Output() district: EventEmitter<any> = new EventEmitter();



    autocomplete: any;

    trigger: any;

    place: Address;

    constructor(private el: ElementRef, private service: GooglePlaceService, private ngZone: NgZone) {

    }

    ngOnInit() {

        this.CountryCodes.emit(this.service.countryIsoCode());


        if (typeof google === 'undefined') {
            console.error(`google place api is not loaded at this time, ng2-google-place-autocomplete won't work`);
            return;
        }

        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        this.trigger = this.autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
                this.place = this.autocomplete.getPlace();
                if (this.place && this.place.place_id) {
                    this.invokeEvent();
                }
            });
        });
    }


    invokeEvent() {
        this.setAddress.emit(this.place);

        this.street_number.emit(this.service.street_number(this.place.address_components) ?
            this.service.street_number(this.place.address_components) :
            null);
        this.street.emit(this.service.street(this.place.address_components) ?
            this.service.street(this.place.address_components) :
            null);
        this.city.emit(this.service.city(this.place.address_components) ?
            this.service.city(this.place.address_components) :
            null);
        this.state.emit(this.service.state(this.place.address_components) ?
            this.service.state(this.place.address_components) :
            null);
        this.country.emit(this.service.country(this.place.address_components) ?
            this.service.country(this.place.address_components) :
            null);
        this.postal_code.emit(this.service.postal_code(this.place.address_components) ?
            this.service.postal_code(this.place.address_components) :
            null);
        this.district.emit(this.service.administrative_area_level_2(this.place.address_components) ?
            this.service.administrative_area_level_2(this.place.address_components) :
            null);
        this.lat.emit(this.place.geometry.location.lat() ?
            this.place.geometry.location.lat() :
            null);
        this.lng.emit(this.place.geometry.location.lng() ?
            this.place.geometry.location.lng() :
            null);
        this.adr_address.emit(this.place.adr_address ?
            this.place.adr_address :
            null);
        this.formatted_address.emit(this.place.formatted_address ?
            this.place.formatted_address :
            null);
        this.name.emit(this.place.name ?
            this.place.name :
            null);
        this.place_id.emit(this.place.place_id ?
            this.place.place_id :
            null);
        this.types.emit(this.place.types ?
            this.place.types :
            null);
        this.url.emit(this.place.url ?
            this.place.url :
            null);
        this.utc_offset.emit(this.place.utc_offset ?
            this.place.utc_offset :
            null);
        this.vicinity.emit(this.place.vicinity ?
            this.place.vicinity :
            null);
        this.photos.emit(this.place.photos ?
            this.place.photos :
            null);


    }

}
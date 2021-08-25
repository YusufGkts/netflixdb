import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ map, debounceTime, distincthUntilChanged, filter} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
  contactFrom: FormGroup;
  searchTerm = new Subject<string>();
  @Output() loading: EventEmitter <boolean> = EventEmitter <boolean>();
  baseUrl = 'http://api.cdjns.com/librarires';
  queryUrl = '?search=';
@Output() searchResults: EventEmitter <any> = new EventEmitter  <any>();


  constructor( private fb: FormBuilder ,private http: HttpClient) {
      this.searchTerm.pipe(
          map((e:any)=>e.target.value),
          debounceTime(400),
          distincthUntilChanged(),
          filter(term=>term.lenght > 0),
            ).subscribe(searchterm)=>{
            this.loading.emit(true);
            this._searchEntries(searchterm);
    }   );
}
searchEntries(term): Observable<any>{

    return this.http.get(this.baseUrl + this.queryUrl + term).pipe(

        map(response=>{
            this.searhResults.emit(response);
        })
    )

  }
}
_searchEntires(term) {

    this.searchEntries(term).subscribe(response => {

       this.loading.emit(false);

    },
        err=> {
            this.loading.emit(false);
        }
    )

}
  ngOnInit() {
      this.contactForm = this.fb.group({
          name: [null, Validators.required],
          message: [null , Validators.required]
      });
  }

  

   

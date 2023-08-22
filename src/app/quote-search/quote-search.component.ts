import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Quote, SearchResponse } from '../models/quote.model';
import { QuoteService } from '../services/quote.service';

@Component({
    selector: 'app-quote-search',
    templateUrl: './quote-search.component.html',
    styleUrls: ['../app.component.css']
})

export class QuoteSearchComponent implements OnInit {
    searchControl = new FormControl;

    quotes: Quote[] = [];

    constructor(private quoteService: QuoteService){}
    
    ngOnInit(): void {
        // track the users input on change in the input field
        this.searchControl.valueChanges.subscribe(searchTerm => {
            // if there is a search term, call the api and return the data or error
            if(searchTerm){
                this.quoteService.searchQuotes(searchTerm).subscribe({
                    next: (data: SearchResponse) => this.quotes = data.results,
                    error: error => console.error('Error getting quotes:', error)
                }
                   
                );
            }else {
                // Clear the quotes if the search term is empty
                this.quotes = [];  
            }
        });
    }
}
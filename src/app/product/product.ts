import { Component,signal,effect } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

   search = signal('');
  products = signal<string[]>(['Phone', 'Laptop', 'Tablet', 'Monitor', 'Keyboard']);
  filtered = signal<string[]>(this.products());

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    //URL to Signal
    this.route.queryParamMap.subscribe(params => {
      this.search.set(params.get('search') || '');
    });
    //Signal to UI Update
    effect(() =>{
      const value = this.search().toLowerCase();
      this.filtered.set(
        this.products().filter( p =>
          p.toLowerCase().includes(value)
        )
      )
    })
  }

  updateURl(){
    this.router.navigate([], {
      queryParams: { search: this.search() },
    })
  }

}

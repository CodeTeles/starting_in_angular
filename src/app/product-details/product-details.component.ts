import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'], // Corrigido 'styleUrl' para 'styleUrls'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // Primeiro obtenha o id do produto da rota atual.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    if (productIdFromRoute !== null) {
      // Encontre o produto que corresponde ao id fornecido na rota.
      this.product = products.find(
        (product) => product.id === Number(productIdFromRoute)
      );
    }
  }
}

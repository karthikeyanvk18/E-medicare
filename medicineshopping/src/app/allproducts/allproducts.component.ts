import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  pageNumber: number = 3;
  currentPg: number = 1;
  public totalItem: number = 0;
  public productList: any;
  public price: number =0;
  public searchTerm !: string;

  searchKey: string = "";
  constructor(private api: ApiService, private cartService: CartService, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;

        this.productList.forEach((a: any) => {
          if (a.category == 0|| a.category == 0) {
            a.category = 0
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    this._http.post<any>("http://localhost:3000/Cart", this.productList.value).subscribe(res => {
      alert("Product added  Successfully!!");
      this.productList.reset();
      this.router.navigate(['/cart'])
  })
  }
  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })

  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  public filterCategory = [
    {
      img: '/assets/p1.jpg',
      name: 'Paracitamol',
      descpt: 'Nise 100 Tablet 15s is composed of nimesulide, primarily used to treat mild to moderate pain due to its analgesic property.Nise 100 Tablet 15s is prescribed mainly to treat pain and get relief from discomfort caused by conditions like tooth pain, arthritis, period pain, and other types of short-term pains.',
      price: '18',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p2.jpg',
      name: 'Combiflam',
      descpt: 'Combiflam Tablet 20s is composed of Ibuprofen and Paracetamol primarily used to treat mild to moderate pain.Combiflam Tablet 20s is prescribed mainly to treat pain and get relief from discomfort cause in conditions like tooth pain, arthritis, period pain and other type of short term pains.',
      price: '22',
      quantity: '1',
      Total: ''

    },
    {
      img: '/assets/p3.jpg',
      name: 'Diclofenac',
      descpt: 'Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to treat mild-to-moderate pain, and helps to relieve symptoms of arthritis (eg, osteoarthritis or rheumatoid arthritis), such as inflammation, swelling, stiffness, and joint pain.',
      price: '30',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p4.jpg',
      name: 'Soluble Aspiran',
      descpt: 'Aspirin is used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to reduce pain and swelling in conditions such as arthritis. Aspirin is known as a salicylate and a nonsteroidal anti-inflammatory drug (NSAID)',
      price: '1999',
      quantity: '1',
      Total: ''
    },

    {
      img: '/assets/p5.jpg',
      name: 'Meloxciam',
      descpt: ' Meloxicam is used to relieve pain, tenderness, swelling, and stiffness caused by osteoarthritis(arthritis caused by a breakdown of the lining of the joints) and rheumatoid arthritis(arthritis caused by swelling of the lining of the joints).',
      price: '999',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p6.jpg',
      name: 'Muvera',
      descpt: 'Muvera 15 Tablet 10s contains pain killers,primarily used to reduce pain and swelling in muscles and joints in conditions such as osteoarthritis, rheumatoid arthritis, ankylosing spondylitis(pain and stiffness in the backbone).',
      price: '499',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p7.jpg',
      name: 'Paramed ',
      descpt: 'Paramed Tablet 10s is used to treat migraine signs such as headache, being sick(vomiting) and feeling sick(nausea).Metoclopramide is an anti- emetic that works on the part of the brain, thereby prevents the symptoms of nausea and vomiting',
      price: '699',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p8.jpg',
      name: 'Shiroz ',
      descpt: 'Shiroz Tablet is a cholesterol-lowering medicine. It contains rosuvastatin as its active ingredient. It is used for the treatment of high cholesterol or to correct abnormal cholesterol along with dietary and lifestyle modifications. ',
      price: '99',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p9.jpg',
      name: 'Panadol ',
      descpt: 'Panadol Advance 500 mg Tablets are a mild analgesic and antipyretic, and are recommended for the treatment of most painful and febrile conditions, for example, headache including migraine and tension headaches, toothache, backache etc',
      price: '299',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p10.jpg',
      name: 'Dantrolene ',
      descpt: 'Dantrolene Sodium is indicated in controlling the manifestations of clinical spasticity resulting from upper motor neuron disorders such asspinal cord injury, stroke, cerebral palsy or multiple sclerosis.',
      price: '199',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p11.jpg',
      name: 'Hydrocodone ',
      descpt: 'Hydrocodone combination products may be habit forming. Take your hydrocodone combination product exactly as directed. Do not take more of it, take it more often, or take it in a different way than directed by your doctor. While taking hydrocodone combination products, discuss with your healthcare provider your pain treatment goals, length of treatment, and other ways to manage your pain',
      price: '499',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p12.jpg',
      name: 'Ofloxacin ',
      descpt: 'Ofloxacin is a broad - spectrum fluoroquinolone antibiotic used to treat bacterial infections that cause bronchitis, pneumonia, chlamydia, gonorrhea, skin infections, urinary tract infections, and infections of the prostate.',
      price: '89',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p13.jpg',
      name: 'Telithromycin ',
      descpt: 'Telithromycin may cause worsening of symptoms, including breathing problems, when taken by people with myasthenia gravis',
      price: '62.9',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p14.jpg',
      name: 'Azithromycin ',
      descpt: 'Azithromycin is used to treat certain bacterial infections, such as bronchitis; pneumonia; sexually transmitted diseases(STD); and infections of the ears, lungs, sinuses, skin, throat, and reproductive organs.',
      price: '43.3',
      quantity: '1',
      Total: ''
    },
    {
      img: '/assets/p15.jpg',
      name: 'Ampicillin ',
      descpt: 'Ampicillin is a prescription penicillin - type antibiotic used to treat many different types of infections caused by bacteria, such as ear infections, bladder infections, pneumonia, gonorrhea, and E.coli or salmonella infection.',
      price: '54',
      quantity: '1',
      Total: ''
    },


  ]
}
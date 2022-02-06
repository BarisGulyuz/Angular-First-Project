import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {



  imgCollection: Array<object>  = [
    {
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      thumbImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      alt: 'Mackbook',
      title: 'Mackbook',
      with: '600'
    },
    {
      image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      thumbImage: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      alt: 'Iphone',
      title: 'Iphone',
      with: '600'
    },
    {
      image: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      thumbImage: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      alt: 'Zowie Ec2-A',
      title: 'Zowie Ec2-A',
      with: '600'
    },
    {
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      thumbImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      alt: 'Macbook',
      title: 'Macbook',
      with: '600'
    },
    {
      image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      thumbImage: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      alt: 'Iphone',
      title: 'Iphone',
      with: '600'
    },
    {
      image: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      thumbImage: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      alt: 'Zowie Ec2-A',
      title: 'Zowie Ec2-A',
      with: '600'
    },
    {
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      thumbImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      alt: 'Mackbook',
      title: 'Mackbook',
      with: '600'
    },
    {
      image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      thumbImage: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      alt: 'Iphone',
      title: 'Iphone',
      with: '600'
    },
    {
      image: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      thumbImage: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      alt: 'Zowie Ec2-A',
      title: 'Zowie Ec2-A',
      with: '600'
    },
    {
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      thumbImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      alt: 'Mackbook',
      title: 'Mackbook',
      with: '600'
    },
    {
      image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      thumbImage: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      alt: 'Iphone',
      title: 'Iphone',
      with: '600'
    },
    {
      image: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      thumbImage: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      alt: 'Zowie Ec2-A',
      title: 'Zowie Ec2-A',
      with: '600'
    },
    {
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      thumbImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000',
      alt: 'Mackbook',
      title: 'Mackbook',
      with: '600'
    },
    {
      image: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      thumbImage: 'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/129876-1_large.jpg',
      alt: 'Iphone',
      title: 'Iphone',
      with: '600'
    },
    {
      image: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      thumbImage: 'https://benq.scene7.com/is/image/benqco/ec2-03-back-left45?$ResponsivePreset$&fmt=png-alpha',
      alt: 'Zowie Ec2-A',
      title: 'Zowie Ec2-A',
      with: '600'
    }
  ];
  constructor() { }


  ngOnInit(): void {
  }

}

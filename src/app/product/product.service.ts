import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CsvParser } from 'nest-csv-parser'
import { Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { Product } from './product.entity';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';

const fs = require('fs');

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly csvParser: CsvParser
  ) {}

  create(productDto: Product): Promise<Product> {
    let product = new Product();
    product = productDto;
    return this.productRepository.save(product);
  }

  findAll(searchs: IPaginationOptions):Promise<Pagination<Product>>{
    return paginate<Product>(this.productRepository, searchs ,{
      relations:['categoryID','supplierID'],
      order:{
        productID:"DESC"
      }
    });
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOne(id,{
      relations:['categoryID','supplierID']
    });
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  async update(id:string,productDto: Product):Promise<void>{
    this.productRepository.update(id,productDto);
  }

  search(search):Promise<Product[]>{
    return this.productRepository.createQueryBuilder('product')
      .innerJoinAndSelect(Category,"category","category.categoryID = product.categoryID")
      .innerJoinAndSelect(Supplier,"supplier","supplier.supplierID = product.supplierID")
      .where("product.productName = :search",search)
      .orWhere("category.categoryName = :search",search)
      .orWhere("supplier.companyName = :search",search)
      .getMany();
  }

  async import() {
    const stream = fs.createReadStream('src/assets/data/Products.csv')
    const entities= await this.csvParser.parse(stream, Product)
    entities.list.forEach(item=>{
      this.productRepository.save(item);
    })
    return entities;
  }

}

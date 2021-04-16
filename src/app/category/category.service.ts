import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CsvParser } from 'nest-csv-parser'
import { Repository } from 'typeorm';
import { Category } from './category.entity';

const fs = require('fs');

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly csvParser: CsvParser
  ) { }

  create(categoryDto: Category): Promise<Category> {
    let category = new Category();
    category = categoryDto;
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  getproducts(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id,{
      relations:['products']
    });
  }

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async update(id: string, categoryDto: Category): Promise<void> {
    this.categoryRepository.update(id, categoryDto);
  }

  async import() {
    const stream = fs.createReadStream('src/assets/data/Categories.csv')
    const entities= await this.csvParser.parse(stream, Category)
    entities.list.forEach(item=>{
      this.categoryRepository.save(item);
    })
    return entities;
  }

}

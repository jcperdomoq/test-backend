import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CsvParser } from 'nest-csv-parser'
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

const fs = require('fs');

@Injectable()
export class SupplierService {

  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    private readonly csvParser: CsvParser
  ) {}

  create(supplierDto: Supplier): Promise<Supplier> {
    let supplier = new Supplier();
    supplier =  supplierDto;
    return this.supplierRepository.save(supplier);
  }

  findAll(): Promise<Supplier[]> {
    return this.supplierRepository.find();
  }

  findOne(id: string): Promise<Supplier> {
    return this.supplierRepository.findOne(id);
  }

  getproducts(id: string): Promise<Supplier> {
    return this.supplierRepository.findOne(id,{
      relations:['products']
    });
  }

  async remove(id: string): Promise<void> {
    await this.supplierRepository.delete(id);
  }

  async update(id:string,supplierDto: Supplier):Promise<void>{
    this.supplierRepository.update(id,supplierDto);
  }

  async import() {
    const stream = fs.createReadStream('src/assets/data/Suppliers.csv')
    const entities= await this.csvParser.parse(stream, Supplier)
    entities.list.forEach(item=>{
      this.supplierRepository.save(item);
    })
    return entities;
  }

}

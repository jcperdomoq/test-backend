import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CsvModule } from 'nest-csv-parser';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
    imports:[TypeOrmModule.forFeature([Product]),CsvModule],
    providers:[ProductService],
    controllers:[ProductController]
})
export class ProductModule {}

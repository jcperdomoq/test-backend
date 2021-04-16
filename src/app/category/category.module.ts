import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CsvModule } from 'nest-csv-parser';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Module({
    imports:[TypeOrmModule.forFeature([Category]),CsvModule],
    providers:[CategoryService],
    controllers:[CategoryController]
})
export class CategoryModule {}

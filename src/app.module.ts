import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './app/product/product.module';
import { CategoryModule } from './app/category/category.module';
import { SupplierModule } from './app/supplier/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'store',
      autoLoadEntities: true,
      synchronize: true,
      //dropSchema:true
    }),
    ProductModule,
    CategoryModule,
    SupplierModule
  ]
})
export class AppModule {}

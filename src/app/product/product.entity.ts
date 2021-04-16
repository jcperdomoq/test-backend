import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productID: number;

  @Column()
  productName: string;

  @ManyToOne(() => Supplier, supplier => supplier.products)
  supplierID: number;

  @ManyToOne(() => Category, category => category.products)
  categoryID: number;

  @Column()
  quantityPerUnit: string;

  @Column()
  unitPrice: number;

  @Column()
  unitsInStock: number;

  @Column()
  unitsOnOrder: number;

  @Column()
  reorderLevel: number;

  @Column()
  discontinued: boolean;
  
}
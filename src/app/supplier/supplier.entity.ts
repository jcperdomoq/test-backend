import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  supplierID: number;

  @Column()
  companyName: string;

  @Column()
  contactName: string;

  @Column()
  contactTitle: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  postalCode: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  fax: string;

  @Column()
  homePage: string;

  @OneToMany(() => Product, product => product.supplierID)
  products:Product[];

}
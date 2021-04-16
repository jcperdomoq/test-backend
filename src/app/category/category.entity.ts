
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryID: number;

  @Column()
  categoryName: string;

  @Column()
  description: string;

  @Column({type:"longblob"})
  picture: string;


  @OneToMany(() => Product, product => product.categoryID)
  products:Product[];

}
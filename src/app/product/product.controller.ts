import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(
  @Query('page') page: number = 1,
  @Query('limit') limit: number = 10): Promise<Pagination<Product>>  {
    return this.productService.findAll({
      page,
      limit,
      route: 'products',
    });
  }

  @Post('search')
  getProductSearch(@Body() search:string): Promise<Product[]> {
    return this.productService.search(search);
  }

  @Get('import')
  import(){
    return this.productService.import();
  }

  @Get(':id')
  getProduct(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Post()
  createProduct(@Body() createProduct:Product):Promise<Product>{
    return this.productService.create(createProduct);
  }

  @Put(':id')
  updateProduct(@Param() params,@Body() updateProduct:Product){
    this.productService.update(params.id,updateProduct);
  }

  @Delete(':id')
  deleteProduct(@Param() params){
    return this.productService.remove(params.id);
  }

}

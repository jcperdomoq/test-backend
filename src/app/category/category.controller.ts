import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategorys(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get('import')
  import(){
    return this.categoryService.import();
  }

  @Get(':id/products')
  getProducts(@Param() params): Promise<Category> {
    return this.categoryService.getproducts(params.id);
  }

  @Get(':id')
  getCategory(@Param() params): Promise<Category> {
    return this.categoryService.findOne(params.id);
  }

  @Post()
  createCategory(@Body() createCategory:Category):Promise<Category>{
    return this.categoryService.create(createCategory);
  }

  @Put(':id')
  updateCategory(@Param() params,@Body() updateCategory:Category){
    this.categoryService.update(params.id,updateCategory);
  }

  @Delete(':id')
  deleteCategory(@Param() params){
    return this.categoryService.remove(params.id);
  }

}

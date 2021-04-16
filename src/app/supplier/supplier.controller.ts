import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';

@Controller('suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Get()
  getSuppliers(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Get('import')
  import(){
    return this.supplierService.import();
  }

  @Get(':id/products')
  getProducts(@Param() params): Promise<Supplier> {
    return this.supplierService.getproducts(params.id);
  }

  @Get(':id')
  getSupplier(@Param() params): Promise<Supplier> {
    return this.supplierService.findOne(params.id);
  }

  @Post()
  createSupplier(@Body() createSupplier:Supplier):Promise<Supplier>{
    return this.supplierService.create(createSupplier);
  }

  @Put(':id')
  updateSupplier(@Param() params,@Body() updateSupplier:Supplier){
    this.supplierService.update(params.id,updateSupplier);
  }

  @Delete(':id')
  deleteSupplier(@Param() params){
    return this.supplierService.remove(params.id);
  }

}

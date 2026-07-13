import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productRepo.create(dto);
    const saved = await this.productRepo.save(product);
    return {
      message: 'Product created successfully',
      data: saved,
    };
  }

  async findAll() {
    const products = await this.productRepo.find({
      order: { createdAt: 'DESC' },
    });
    return {
      message: 'All products fetched',
      count: products.length,
      data: products,
    };
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return {
      message: 'Product fetched successfully',
      data: product,
    };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    // Merge updates
    Object.assign(product, dto);
    const updated = await this.productRepo.save(product);
    return {
      message: 'Product updated successfully (PATCH)',
      data: updated,
    };
  }

  async replace(id: number, dto: UpdateProductDto) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    // Replace all fields
    Object.assign(product, dto);
    const updated = await this.productRepo.save(product);
    return {
      message: 'Product replaced successfully (PUT)',
      data: updated,
    };
  }

  async remove(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    await this.productRepo.remove(product);
    return {
      message: 'Product deleted successfully',
      id: id,
    };
  }

  async findByCategory(category: string) {
    const products = await this.productRepo.find({
      where: { category },
      order: { createdAt: 'DESC' },
    });
    return {
      message: `Products in category '${category}'`,
      count: products.length,
      data: products,
    };
  }

  async search(keyword: string) {
    const products = await this.productRepo.find({
      where: { name: ILike(`%${keyword}%`) },
      order: { createdAt: 'DESC' },
    });
    return {
      message: `Products matching '${keyword}'`,
      count: products.length,
      data: products,
    };
  }

  async toggleActive(id: number) {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    product.isActive = !product.isActive;
    const updated = await this.productRepo.save(product);
    return {
      message: `Product active status toggled to ${updated.isActive}`,
      data: updated,
    };
  }
}
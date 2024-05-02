import { PrismaClient } from '@prisma/client';
import { Category, Product, Warehouse } from './types';

const prisma = new PrismaClient();

export const countAllProducts = async (): Promise<number> => {
    const totalProducts: number = await prisma.product.count();
    return totalProducts;
};

export const getProductsOnWarehouse = async (uuid: string): Promise<Product[]> => {
    const productsOnWarehouse: Warehouse | null = await prisma.warehouse.findUnique({
      where: { uuid },
      include: { products: true }
    });
    return productsOnWarehouse ? productsOnWarehouse.products : [];
};

export const countAllProductsOnAllWarehouses = async (): Promise<number> => {
    const totalProductsOnAllWarehouses: { sum: { quantity: number } } = await prisma.product.aggregate({
      sum: { quantity: true }
    });
    return totalProductsOnAllWarehouses.sum.quantity;
};

export const countAllProductsOnWarehouse = async (uuid: string): Promise<number> => {
    const totalProductsOnWarehouse: { sum: { quantity: number } } = await prisma.product.aggregate({
      where: { warehouse: { uuid } },
      sum: { quantity: true }
    });
    return totalProductsOnWarehouse.sum.quantity;
};

export const countProductsByCategory = async (slug: string): Promise<number> => {
    const totalProductsByCategory: Category | null = await prisma.category.findUnique({
      where: { slug },
      include: { products: true }
    });
    return totalProductsByCategory ? totalProductsByCategory.products.length : 0;
};

export const countProductsOnWarehouseByCategory = async (uuid: string, slug: string): Promise<number> => {
    const totalProductsOnWarehouseByCategory: Category | null = await prisma.category.findUnique({
      where: { slug },
      include: {
        products: {
          where: { warehouse: { uuid } }
        }
      }
    });
    return totalProductsOnWarehouseByCategory ? totalProductsOnWarehouseByCategory.products.length : 0;
};

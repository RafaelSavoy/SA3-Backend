import { productService } from '../../services/products/products.service';
import {
  closeTestDatabase,
  initTestDatabase,
} from '../../utils/test.utils';

describe('Testing product services', () => {
  beforeAll(async () => {
    await initTestDatabase();
  }, 30000);

  afterAll(async () => {
    await closeTestDatabase();
  });

  it('should not be possible to get unexistent product', async () => {
    const response = await productService.getProductById(1);
    expect(response).toBeNull();
  });

  it('should be return empty array', async () => {
    const response = await productService.getProducts();
    expect(Array.isArray(response)).toBeTruthy();
    expect(response.length).toBe(0);
  });

  it('should be possible to create a product', async () => {
    const response = await productService.createProduct({
      name: 'Test Product',
      price: 10,
      image: 'test.png'
    });
    expect(response).toHaveProperty('name');
    expect(response).toHaveProperty('price');
  });

  it('should be possible to get product array with one item', async () => {
    const response = await productService.getProducts();
    expect(Array.isArray(response)).toBeTruthy();
    expect(response.length).toBe(1);
  });

  it('should be possible to get a item by id', async () => {
    const response = await productService.getProductById(1);
    expect(response).toHaveProperty('name');
    expect(response).toHaveProperty('price');
    expect(response).toHaveProperty('id');
    expect(response?.id).toBe(1);
  });

  it('should be possible to update a product', async () => {
    await productService.editProduct({
      id: 1,
      name: 'Updated Product',
      price: 500
    });
    const updatedProduct = await productService.getProductById(1);
    expect(updatedProduct?.name).toBe('Updated Product');
    expect(updatedProduct?.price).toBe(500);
  });
  it('should be possible to delete a user', async () => {
    await productService.deleteProduct(1);
    const updatedProduct = await productService.getProductById(1);
    expect(updatedProduct).toBeNull();
  });
});

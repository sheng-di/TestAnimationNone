import { ProductStoreModel, ProductStore } from "./product-store"

test("can be created", () => {
  const instance: ProductStore = ProductStoreModel.create({})

  expect(instance).toBeTruthy()
})
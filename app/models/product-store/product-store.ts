/* eslint-disable camelcase */
import { withEnvironment } from './../extensions/with-environment'
import { ProductModel, Product, ProductSnapshot } from './../product/product'
import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProductStoreModel = types
  .model("ProductStore")
  .props({
    products: types.optional(types.array(ProductModel), [])
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    saveProducts: (produceSnapshots: ProductSnapshot[]) => {
      const productModels: Product[] = produceSnapshots.map(c => ProductModel.create(c))
      self.products.replace(productModels)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    getProducts: flow(function* () {
      const result = yield self.environment.api.getProducts()
      if (result.kind === 'ok') {
        self.saveProducts(result.products)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    })
  }))

/**
* Un-comment the following to omit model attributes from your snapshots (and from async storage).
* Useful for sensitive data like passwords, or transitive state like whether a modal is open.

* Note that you'll need to import `omit` from ramda, which is already included in the project!
*  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
*/

type ProductStoreType = Instance<typeof ProductStoreModel>
export interface ProductStore extends ProductStoreType { }
type ProductStoreSnapshotType = SnapshotOut<typeof ProductStoreModel>
export interface ProductStoreSnapshot extends ProductStoreSnapshotType { }

export interface GetProductResponse {
  code: number,
  message: string,
  result: Array<{
    sid: string,
    text: string,
    type: string,
    thumbnail: object,
    video: object,
    images: string,
    up: string,
    down: string,
    forward: string,
    comment: string,
    uid: string,
    name: string,
    header: string,
    top_comments_content: string,
    top_comments_voiceuri: string,
    top_comments_uid: string,
    top_comments_name: string,
    top_comments_header: string,
    passtime: string
  }>
}

/* eslint-disable @typescript-eslint/camelcase */
import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProductModel = types
  .model("Product")
  .props({
    sid: types.string,
    text: types.string,
    type: types.string,
    images: types.string,
    up: types.string,
    down: types.string,
    forward: types.string,
    comment: types.string,
    uid: types.string,
    name: types.string,
    header: types.string,
    top_comments_content: types.maybeNull(types.string),
    top_comments_voiceuri: types.maybeNull(types.string),
    top_comments_uid: types.maybeNull(types.string),
    top_comments_name: types.maybeNull(types.string),
    top_comments_header: types.maybeNull(types.string),
    passtime: types.string
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
* Un-comment the following to omit model attributes from your snapshots (and from async storage).
* Useful for sensitive data like passwords, or transitive state like whether a modal is open.

* Note that you'll need to import `omit` from ramda, which is already included in the project!
*  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
*/

type ProductType = Instance<typeof ProductModel>
export interface Product extends ProductType {}
type ProductSnapshotType = SnapshotOut<typeof ProductModel>
export interface ProductSnapshot extends ProductSnapshotType {}

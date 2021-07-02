/*
 * @Author: WangLi
 * @Date: 2021-05-21 16:29:03
 * @LastEditors: WangLi
 * @LastEditTime: 2021-07-02 17:09:22
 */
import { Toast } from "../../utils/util";
import { creatCart } from "../../http/api";

const App = getApp();

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    list: Array,
  },
  data: {
    filePath: App.globalData.filePath,
  },
  methods: {
    productTap(e) {
      const productId = e.currentTarget.dataset.id;
      App.router.push("product", { productId });
    },
    async addCartHandle(e) {
      const productId = e.currentTarget.dataset.id;
      const params = {
        productId,
        addCount: 1,
        userId: App.globalData.userId,
      };
      const { code, msg, data } = await creatCart(params);
      if (code === 200) {
        Toast("加入购物车成功");
        this.triggerEvent("updateCart", true);
      }
    },
    goMain(e) {
      const classify = e.currentTarget.dataset.classify;
      App.router.pushTab("main", { pageIndex: 1, classify });
    },
  },
});

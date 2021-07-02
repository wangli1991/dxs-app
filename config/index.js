/*
 * @Author: WangLi
 * @Date: 2021-04-12 14:00:42
 * @LastEditors: WangLi
 * @LastEditTime: 2021-07-02 11:19:04
 */
const config = {
  // baseApi: "https://www.wangli.site/api",
  filePath: "http://localhost:8086",
  baseApi: "http://localhost:8888",
  timeout: 5000,
  classifyPageSize: 10,
  orderPageSize: 10,
  recommendPageSize: 10,
  searchPageSize: 10,
  orderEmpty: "您还未买过任何商品",
  cartEmpty: "你的购物车空空如也",
  payTime: 600000, //支付时间倒计时 单位毫秒
  loading: 1500, //loading时间
};
export default config;

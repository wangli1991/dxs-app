/*
 * @Author: WangLi
 * @Date: 2021-04-12 14:06:37
 * @LastEditors: WangLi
 * @LastEditTime: 2021-07-02 16:37:16
 */
import request from "./request";

//微信登陆
export const wxLogin = (params) => request.post("/user/wxLogin", params);

//微信登陆
export const getUserInfo = (params) => request.post("/user/info", params);

//首页banner数据
export const getBannerList = (params) => request.post("/sys/banner", params);

//获取分类数据
export const getClassifyList = (params) =>
  request.post("/classify/list", params);

//获取筛选排序数据
export const getSortList = (params) => request.post("/sort/list", params);

//获取分类排序商品数据
export const getClassifyProduct = (params) =>
  request.post("/product/listByClassify", params);

//获取推荐商品数据
export const getRecommendProduct = (params) =>
  request.post("/product/listByRecommend", params);

//获取商品信息数据
export const getProductById = (params) =>
  request.post("/product/productById", params);

//获取商品详情购物车数量
export const getProductCartCount = (params) =>
  request.post("/cart/product/count", params);

//保存搜索历史
export const creatSearch = (params) =>
  request.post("/search/history/creat", params);

//清空搜索历史
export const clearSearch = (params) =>
  request.post("/search/history/clear", params);

//获取搜索历史数据
export const getSearchList = (params) =>
  request.post("/search/history/list", params);

//获取热门搜索数据
export const getHotSearchList = (params) =>
  request.post("/search/hot/list", params);

//获取分类排序商品数据
export const getProductBySearch = (params) =>
  request.post("/product/listBySearch", params);

//获取限时抢购商品数据
export const getListByActive = (params) =>
  request.post("/product/salesList", params);

//获取限时抢购数据
export const getActiveList = (params) => request.post("/active/list", params);

//购物车添加
export const creatCart = (params) => request.post("/cart/creat", params);

//购物车更新
export const updateCart = (params) => request.post("/cart/update", params);

//购物车删除
export const deleteCart = (params) => request.post("/cart/delete", params);

//查询购物车数据
export const getCartList = (params) => request.post("/cart/list", params);

//查询购物车数据
export const getCartCount = (params) => request.post("/cart/count", params);

//查询下单数据
export const getPlaceList = (params) =>
  request.post("/order/placeList", params);

//商品下单
export const creatOrder = (params) => request.post("/order/creat", params);

//查询商品订单列表数据
export const getOrderList = (params) => request.post("/order/list", params);

//查询商品订单详情数据
export const getOrderInfo = (params) => request.post("/order/info", params);

//查询默认收货人信息
export const getReceiverInfo = (uid) =>
  request.get("/user/receiver/info", { userId: uid });

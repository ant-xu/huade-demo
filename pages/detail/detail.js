// pages/detail/detail.js

//
Page({

  data: {
    shop: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */

      onLoad: function (options) {
        console.log(options.item)
        let tmpUrl = "https://locally.uieee.com/shops/"+options.item ;
        console.log(tmpUrl);
        //取得轮播图数据
        wx.request({
          url: tmpUrl,
          success: res => {
            this.setData({
              shop: res.data
              
            })
            wx.setNavigationBarTitle({ title: res.data.name })

          }
        })
        }
  ,
  previewHandle(e) {
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.shop.images
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
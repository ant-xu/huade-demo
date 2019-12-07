// pages/index/index.js
//test git git
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mySliders: [],
    myCategories:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //取得轮播图数据
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success: res => {
        this.setData({
          mySliders: res.data
        })
      }
    })
    
    // //取得九宫格数据
    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success: res => {
    //     console.log(res.data);
    //     this.setData({
    //       myCategories: res.data
    //     })
    //   }
    // })
    //取得九宫格数据
    let that=this;
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: function(res) {
        console.log(res.data);
        that.setData({
          myCategories: res.data
        })
      }
    })



  },















  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
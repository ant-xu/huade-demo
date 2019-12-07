// pages/list/list.js



Page({

   
  /**
   * 页面的初始数据
   */
  data: {
    category: null,
    shops:[],
    pageIndex: 0,
    pageSize: 20,
    totalCount: 0,
    hasMore: true,
    searchText:""
  },
  loadMore(){
    //取得商店列表数据
    console.log(this.data.pageIndex);
    let tmpPageIndex=this.data.pageIndex;
    //let tmpPagesize=this.data.pageSize;
    tmpPageIndex=++tmpPageIndex;

    console.log(">>>>>tmpPageIndex" + tmpPageIndex);
   
    let that = this;
    
    let tmpUrl = "https://locally.uieee.com/categories/" + that.data.category + "/shops";
    //console.log("tmpUrl: " + tmpUrl);
    console.log("pageIndex:" + that.data.pageIndex);

    wx.request({
      url: tmpUrl,
      data: {
        _page: tmpPageIndex,
        _limit: that.data.pageSize,
        q:that.data.searchText
      },
      success: function (res) {
        if(!that.data.hasMore) return;
        // console.log("res.data"+res.data);
        const totalCount=parseInt(res.header['X-Total-Count']);
        const myHasMore = tmpPageIndex*that.data.pageSize<totalCount;
        const totalShops=that.data.shops.concat(res.data);
        that.setData({
          shops: totalShops,
          pageIndex:tmpPageIndex,
          hasMore: myHasMore
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({category:options.cat});
    //console.log(options.cat);
    //取得商店列表数据
    // let that = this;
    // let tmpUrl="https://locally.uieee.com/categories/"+options.cat+"/shops";
    // //console.log("tmpUrl: " + tmpUrl);
    // console.log("pageIndex:"+that.data.pageIndex);
    
    // wx.request({
    //   url: tmpUrl,
    //   data: {
    //     _page:that.data.pageIndex,
    //     _limit: that.data.pageSize
    //   },
    //   success: function (res) {
    //    // console.log("res.data"+res.data);
    //     that.setData({
    //       shops: res.data
    //     })
    //   }
    // })
    // console.log("++++++++");
    this.loadMore();
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
        this.setData({shops:[],pageIndex:0,hasMore:true})
        this.loadMore();
        
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("拉到底了,行了行了");
    this.loadMore();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //搜索相关
  searchHandle(e) {
    console.log(e);
    console.log("run into searchHandle");
    console.log("this.data.searchText:"+this.data.searchText)
    this.setData({ shops: [], pageIndex: 0, hasMore: true,searchText:e.detail.value })
    this.loadMore()
  },

  showSearchHandle(e) {
    console.log("run into showSearchHandle");
    console.log("e:" + e.detail.value);
    this.setData({ searchShowed: true })
  },
  hideSearchHandle() {
    console.log("run into hideSearchHandle");
    this.setData({ searchText: '', searchShowed: false })
  },
  clearSearchHandle() {
    console.log("run into clearSearchHandle");
    this.setData({ searchText: '' })
  },
  searchChangeHandle(e) {
    console.log("run into searchChangeHandle");
    console.log("e:"+e.detail.value);
    this.setData({ searchText: e.detail.value })
  }
})
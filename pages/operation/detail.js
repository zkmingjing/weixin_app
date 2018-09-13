// pages/operation/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this;
    wx.request({
      url: 'http://i-d.4008827123.cn/kbpos-comm-api/zeus-member/getMembershipDetailsByCardNo',
      method:'POST',
      data:{
        "body": { "tenantId": "18626600002", "cardNo": "6201910011023758"}
      },
      success:function(res){
        var header = res.data.header;
        if (header.code == "10000") {
          var body = res.data.body;
          that.setData({
            detail:body
          });
        }else{
          wx.showToast({
            title: '查询会员详情失败',
            icon:'',
            duration:2000
          })
        }
      }
    })
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
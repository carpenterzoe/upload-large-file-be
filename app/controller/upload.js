const { Controller } = require('egg')
const  fs = require('fs')
const path = require('path')

class UploadController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // 根据文件名查询已经上传的切片信息
  async upload_already() {
    const { ctx } = this;
    const { HASH } = ctx.query  // url查询参数
    const chunksDir = path.resolve(__dirname, '../uploadedFiles/' + HASH);
    if (!fs.existsSync(chunksDir)) {
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: []
      }
      return;
    }
    
    const resArr = fs.readdirSync(chunksDir)
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: resArr
    }
  }

  async upload_chunk() {
    const { ctx } = this;
  }

  async upload_merge() {
    const { ctx } = this;
  }
}

module.exports = UploadController;

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
    const chunksDir = path.resolve(__dirname, '../public/upload/' + HASH);
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

    let file = ctx.request.files[0]
    console.log('file: ', file);
    // let params = ctx //TODO:上传，并且把hash传过来

    const chunksDir =  path.resolve(__dirname, '../public/upload/' + HASH);

    if (!fs.existsSync(chunksDir)) {
      await fs.mkdir(chunksDir)
      fs.writeFile(chunksDir,file, (err) => {
        if (err) {
          ctx.body = {
            code: 500,
            msg: '上传失败',
            data: null

          }
          return
        }
        ctx.body = {
          code: 200,
          msg: '上传成功',
          data: null
        }
      })
    }
  }

  async upload_merge() {
    const { ctx } = this;
  }
}

module.exports = UploadController;

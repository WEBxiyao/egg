'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx}=this
    ctx.body={
        id: ctx.params.id,
        msg:'ok',
        data:{
            name:'liyao',
            id:10
        }
    }
  }
}

module.exports = UserController;

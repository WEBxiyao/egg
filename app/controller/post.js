'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
     async index(){
       this.ctx.body="这个是列表页"
     };
     async new(){
         
    };
    async create(){
         
    };


   
}

module.exports = PostController;


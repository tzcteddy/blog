const path="/mock";
const homeModeul = require('./api/home');
const detail =require('./api/detail/detail');
module.exports={
  [`${path}/web/user`]:homeModeul.user,
  [`${path}/web/home`]:homeModeul.home,
  [`${path}/web/detail`]:detail
}
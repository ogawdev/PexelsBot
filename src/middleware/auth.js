const User = require("../utils/userModel");

module.exports = async (ctx, next) => {
  if (ctx.chat.type !== "private") return next();
  if (ctx.session.user) return next();
  let user = await User.findOne();
  console.log(user)
  if (!user) {
    let newUser = new User({
      user_id: ctx.from.id,
      name: (ctx.from.first_name + " " + (ctx.from.last_name || "")).trim(),
      phone: ctx.from.phone || "",
    });
    user = await newUser.save();
  }
  ctx.session.user = user;
  return next();
};

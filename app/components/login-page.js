import Ember from "ember";

// eslint-disable-next-line ember/new-module-imports
export default Ember.Component.extend({
    actions: {
        authenticate() {
            const { username, password } = this.getProperties(
                "username",
                "password"
            );
            //这里获取登录数据
        },
    },
});

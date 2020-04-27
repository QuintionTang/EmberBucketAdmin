import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | login", function (hooks) {
    setupApplicationTest(hooks);

    test("visiting /login", async function (assert) {
        await visit("/login");

        assert.equal(currentURL(), "/login");
    });

    test("登录UI是否完整", async function (assert) {
        await visit("/login");
        assert.equal(
            this.element.querySelectorAll("form").length,
            1,
            "登录表单存在"
        );

        assert.equal(
            this.element.querySelectorAll('input[type="text"]').length,
            1,
            "用户名称输入框"
        );

        assert.equal(
            this.element.querySelectorAll('input[type="password"]').length,
            1,
            "登录密码输入框"
        );

        assert.equal(
            this.element.querySelectorAll('button[type="submit"]').length,
            1,
            "登录按钮，类似为submit"
        );
    });
});

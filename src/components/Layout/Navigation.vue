<template>
  <a-layout-header
    style="padding: 0px;height: 48px;line-height: 48px;width: 100%;z-index: 9;"
  >
    <div class="av-global-header">
      <div class="av-global-header-collapsed-button">
        <!-- 左边，默认trigger -->
        <slot name="left">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => setCollapsed(!collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => setCollapsed(!collapsed)"
          />
        </slot>
      </div>
      <div class="av-global-header-breadcrumb">
        <!-- 中间，默认面包屑导航 -->
        <slot name="middle">
          <a-breadcrumb>
            <a-breadcrumb-item
              v-for="(item, index) in breadList"
              :key="item.path"
            >
              <span v-if="index === breadList.length - 1">
                {{ item.meta.name }}
              </span>
              <router-link v-else :to="item.path">
                {{ item.meta.name }}
              </router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </slot>
      </div>
      <div style="text-align: right;">
        <!-- 右边 -->
        <slot name="right">
          <!-- 用户栏 -->
          <a-dropdown>
            <span class="av-dropdown av-dropdown-action">
              <!-- 头像 -->
              <a-avatar
                class="av-global-header-account-avatar"
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                size="small"
              />
              <!-- 用户名 -->
              <span class="av-global-header-account-name anticon">管理员 </span>
            </span>
            <template #overlay>
              <!-- 用户操作栏 -->
              <a-menu>
                <a-menu-item>
                  <router-link to="/account/center"
                    ><UserOutlined
                      style="min-width: 12px;margin-right: 8px;font-size: 12px;"
                    />个人中心</router-link
                  >
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/account/settings">
                    <SettingOutlined
                      style="min-width: 12px;margin-right: 8px;font-size: 12px;"
                    />
                    个人设置</router-link
                  >
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <span @click="logout">
                    <LogoutOutlined
                      style="min-width: 12px;margin-right: 8px;font-size: 12px;"
                    />
                    退出登陆</span
                  >
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <!-- github地址 -->
          <a href="https://github.com/shuxiaoman/admin-vue-pro" target="_blank">
            <GithubFilled style="fontSize: 20px;color: #333;" />
          </a>
        </slot>
      </div>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import { RouteLocationMatched } from "vue-router";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  GithubFilled
} from "@ant-design/icons-vue";
import {
  Layout,
  Breadcrumb,
  Dropdown,
  Avatar,
  Menu,
  Button
} from "ant-design-vue";
const { Header } = Layout;
const { Item: BreadcrumbItem } = Breadcrumb;
const { Item: MenuItem } = Menu;

import { logout as reqLogout } from "@/services/oauth";
import { removeTokenObj } from "@/utils/tokens";

export default defineComponent({
  components: {
    [Header.name]: Header,
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
    [Dropdown.name]: Dropdown,
    [Avatar.name]: Avatar,
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Menu.Divider.name]: Menu.Divider,
    [Button.name]: Button,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    GithubFilled
  },
  data() {
    const breadList: RouteLocationMatched[] = [];
    return {
      breadList
    };
  },
  computed: {
    ...mapState("layout", ["collapsed"])
  },
  watch: {
    $route: {
      handler(r) {
        this.breadList = r.matched;
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations("layout", ["setCollapsed"]),
    async logout() {
      await reqLogout();
      removeTokenObj();
      this.$router.push("/");
      // 这里不能使用nextick，必须使用setTimeout
      // setTimeout(() => {
      this.$router.push("/user/login");
      // });
    }
  }
});
</script>
<style lang="less"></style>

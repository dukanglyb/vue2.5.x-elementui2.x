<template>
  <transition name="fade">
    <div class="sidepull" v-show="visible">
      <div class="sidepull__close" @click="onClose">×</div>
      <header class="sidepull__head">
        <slot v-if="$slots.header" name="header"></slot>
        <span v-else class="head__title">{{title}}</span>
      </header>
      <main class="sidepull__content">
        <slot></slot>
      </main>
      <footer class="sidepull__foot">
        <slot v-if="$slots.footer" name="footer"></slot>
        <div v-else class="sidepull__foot--defaults">
          <button class="foot__btns" @click="onConfirm">{{okText}}</button>
          <button class="foot__btns" @click="onCancel">{{cancelText}}</button>
        </div>
      </footer>
    </div>
  </transition>
</template>

<style lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: .6s
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(100%);
  }

  .sidepull {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    z-index: 500;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #114e80;
    &__close {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 30px;
      cursor: pointer;
    }
    &__head {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #205f93;
      .head__title {
        display: block;
        margin: 0 auto;
        width: 600px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
    }
    &__content {
      flex: 1;
      overflow-y: auto;
    }
    &__foot {
      height: 60px;
      border-top: 1px solid #205f93;
      &--defaults {
        line-height: 60px;
        text-align: center;
      }
      .foot__btns {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 500;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid #1681c4;
        white-space: nowrap;
        line-height: 1.5;
        padding: 4px 15px;
        font-size: 12px;
        color: #fff;
        user-select: none;
        outline: 0;
        background-color: #1681c4;
        &:hover {
          background-color: #1e96c4;
        }
      }
    }

  }
</style>

<script>
  /*
   * props:
   *
   *   visible     Boolean   对话框的消失隐藏（必须加修饰符 .sync）
   *   title       String    标题文字，超出隐藏
   *   okText      String    确定按钮文字内容
   *   cancelText  String    取消按钮文字内容
   *   on-close    Function  关闭按钮回调函数
   *   on-ok       Function  确定按钮回调函数
   *   on-cancel   Function  取消按钮回调函数
   *
   * */

  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示标题'
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      }
    },

    methods: {
      onClose() {
        this.$emit('on-close')
        this.$emit('update:visible', false)
      },
      onConfirm() {
        this.$emit('on-ok')
      },
      onCancel() {
        this.$emit('on-cancel')
        this.$emit('update:visible', false)
      }
    }
  }
</script>

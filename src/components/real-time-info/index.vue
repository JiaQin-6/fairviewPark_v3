<template>
    <div class="real-time-info" v-show="show">
        <div class="real-time-info-content">
            <!-- 主要内容 -->
            <div class="main-content">
                123
            </div>
            <!-- 选项框 -->
            <div></div>
            <!-- 按钮 -->
            <el-button @click="close">确定</el-button>
        </div>
    </div>
</template>

<script>
import {
    ref,
    reactive,
    nextTick,
    getCurrentInstance,
    toRefs,
    onMounted,
    watch
} from 'vue';
import { useRouter, useRoute } from "vue-router";
export default {
    props: {
        showRealTimeInfo: {
            type: Boolean,
        }
    },
    setup(props, ctx) {
        const data = reactive({
            show: false,
            fairview_park_lang: "",
        });
        watch(
            () => props.showRealTimeInfo,
            (value) => {
                data.show = value
            },
        );
        const close = () => {
            /* 
                localstarge:
                 {
                    nonMember（非会员）：{
                        id:'',
                        show:'',
                    }
                    owner（业主）{
                        id:'',
                        show:'',
                    }
                    residents（住客）{
                        id:'',
                        show:'',
                    }
                 }        
            **/
            ctx.emit('close')
        };
        return {
            ...toRefs(data),
            close,
        }
    }
}
</script>

<style lang="less" scoped>
.real-time-info {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 20;

    .real-time-info-content {
        width: 50%;
        height: 50%;
        background-color: #fff;
        margin: 0 auto;
        box-shadow: 0 0 2px 5px rgba(0, 0, 0, .5);
    }
}
</style>>
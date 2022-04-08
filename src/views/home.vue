<template>
    <div class="home">
        <el-container>
            <el-header>
                <div>three.js练习demo</div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        @select="handleSelect"
                    >
                        <el-menu-item v-for="(item,index) in menu" :index="item.router"
                                      :class="activeIndex == index?'is-active':''">
                            {{ item.name }}
                        </el-menu-item>

                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>


</template>

<script lang="ts">
import {ref, reactive, onMounted} from "vue";
import router from "../router/index";

export default {
    name: 'home',
    setup() {
        onMounted(() => {
            console.log(router.currentRoute.value.path)
            switch (router.currentRoute.value.path) {
                case '/demo1':
                    activeIndex.value = '0';
                    break;
                case '/demo2':
                    activeIndex.value = '1';
                    break;
                case '/demo3':
                    activeIndex.value = '2';
                    break;
                case '/helloWorld':
                    activeIndex.value = '3';
                    break;
                case '/demo4':
                    activeIndex.value = '4';
                    break;
            }
        })
        let activeIndex = ref('0')

        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath)
            console.log(router)
            router.push({path: key})
            switch (key) {
                case '/demo1':
                    activeIndex.value = '0';
                    break;
                case '/demo2':
                    activeIndex.value = '1';
                    break;
                case '/demo3':
                    activeIndex.value = '2';
                    break;
                case '/helloWorld':
                    activeIndex.value = '3';
                    break;
                case '/demo4':
                    activeIndex.value = '4';
                    break;
            }
        }

        const menu = reactive([
            {name: 'demo1', router: '/demo1', index: '0'},
            {name: '插入新几何体', router: '/demo2', index: '1'},
            {name: '材质对象-点材质', router: '/demo3', index: '2'},
            {name: '材质对象-基础线材质', router: '/demo5', index: '3'},
            {name: '材质对象-虚线材质', router: '/demo4', index: '4'},
        ])

        return {
            activeIndex,
            handleSelect,
            menu
        }
    }
}
</script>

<style scoped lang="less">

.home {
    height: 100%;

    //.el-main {
    //    width: 100%;
    //    height: 100%;
    //    & > div {
    //        height: 100%
    //    }
    //}
}


</style>
import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
//Vuex插件中的Store是一个类
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {id: 110, name: 'why', age: 18},
            {id: 111, name: 'kobe', age: 15},
            {id: 112, name: 'kuli', age: 19},
            {id: 114, name: 'reason', age: 28},
        ],
        info: {name: 'coderwhy', age:10}
    },
    mutations: {
        //方法
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = 'chaiyong'
        }
    },
    actions: {
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo');
                    console.log(payload);
                    resolve(payload)
                    //调用了resolve(),就会在其他地方执行Promise的then
                }, 1000)
            })

        }
        //context:上下文的意思，是一个默认参数，指代store对象
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         payload.success()
        //     }, 1000)
        // }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more18stu(state) {
            return state.students.filter(s => s.age >= 18)
        },
        more18stuLength(state, getters) {
            return getters.more18stu.length
        },
        moreAgeStu(state) {
            return function(age) {
                return state.students.filter(s => s.age >age)
            }
        },
    },
    modules: {

    }
})

//3.导出store独享
export default store
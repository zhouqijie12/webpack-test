// // // // // import { rejects } from "assert";

// // // // // // // // // function loadImg(url){
// // // // // // // // //     return new Promise((resolve,reject) => {
// // // // // // // // //         let img = new Image()
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //             console.log('pic loading complete')
// // // // // // // // //             resolve()
// // // // // // // // //         })
// // // // // // // // //         img.onerror = reject
// // // // // // // // //         img.src = url
// // // // // // // // //     })
// // // // // // // // // }

// // // // // // // // // function limitLoad(urls, handler, limit){
// // // // // // // // //     const sequence = [].concat(urls)
// // // // // // // // //     let promises = [];
// // // // // // // // //     promises = sequence.splice(0, limit).map((item, index) => {
// // // // // // // // //         return handler(item).then(() => {
// // // // // // // // //             return index
// // // // // // // // //         })
// // // // // // // // //     })
// // // // // // // // // }

// // // // // // // // // var p = new Promise((resolve,reject) => {
// // // // // // // // //     setTimeout(()=>{
// // // // // // // // //         console.log('执行完成a')
// // // // // // // // //         reject('fdsa')
// // // // // // // // //     },2000)
// // // // // // // // // })
// // // // // // // // // p.then((res)=>{
// // // // // // // // //     console.log(res)
// // // // // // // // // },(err)=>{
// // // // // // // // //     console.log(err)
// // // // // // // // // }).catch((err)=>{
// // // // // // // // //     console.log(err,'dd')
// // // // // // // // // })

// // // // // // // // function hand1(){
// // // // // // // //     return new Promise((resolve,reject) => {
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             console.log('异步任务1执行完成')
// // // // // // // //             resolve('随便什么数据1')
// // // // // // // //         },1000)
// // // // // // // //     })
// // // // // // // // }
// // // // // // // // function hand2(){
// // // // // // // //     return new Promise((resolve,reject) => {
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             console.log('异步任务2执行完成')
// // // // // // // //             resolve('随便什么数据2')
// // // // // // // //         },2000)
// // // // // // // //     })
// // // // // // // // }
// // // // // // // // function hand3(){
// // // // // // // //     return new Promise((resolve,reject) => {
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             console.log('异步任务3执行完成')
// // // // // // // //             resolve('随便什么数据3')
// // // // // // // //         },5000)
// // // // // // // //     })
// // // // // // // // }
// // // // // // // // // Promise.all([hand1(),hand2(),hand3()]).then((dta)=>{
// // // // // // // // //     console.log(dta)
// // // // // // // // // })

// // // // // // // // Promise.race([hand1(),hand2(),hand3()]).then((dta)=>{
// // // // // // // //     console.log(dta,'我先完成')
// // // // // // // // })
// // // // // // // // // hand1().then((data)=>{
// // // // // // // // //     console.log(data)
// // // // // // // // //     return hand2()
// // // // // // // // // }).then((data)=>{
// // // // // // // // //     console.log(data)
// // // // // // // // //     return hand3()
// // // // // // // // // }).then((data)=>{
// // // // // // // // //     console.log(data)
// // // // // // // // // })

// // // // // // // // // function getNumber(){
// // // // // // // // //     return new Promise((resolve,reject)=>{
// // // // // // // // //         setTimeout(()=>{
// // // // // // // // //             let num = Math.ceil(Math.random()*10)
// // // // // // // // //             console.log(num)
// // // // // // // // //             if (num > 5){
// // // // // // // // //                 resolve(num)
// // // // // // // // //             } else {
// // // // // // // // //                 reject('数字太小了')
// // // // // // // // //             }
// // // // // // // // //         },2000)
// // // // // // // // //     })
// // // // // // // // // }

// // // // // // // // // getNumber().then((data)=>{
// // // // // // // // //     console.log(data)
// // // // // // // // // }).catch((err)=>{
// // // // // // // // //     console.log(err,'err')
// // // // // // // // // })

// // // // // // // // function requestImg(){
// // // // // // // //     return new Promise((resolve,reject) => {
// // // // // // // //         let img = new Image()
// // // // // // // //         img.onload = function(){
// // // // // // // //             resolve(img)
// // // // // // // //         }
// // // // // // // //         img.src="xxxx"
// // // // // // // //     })
// // // // // // // // }

// // // // // // // // function timeout(){
// // // // // // // //     return new Promise((resolve,reject) =>{
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             reject('图片加载失败')
// // // // // // // //         },5000)
// // // // // // // //     })
// // // // // // // // }

// // // // // // // // Promise.race([requestImg(),timeout()]).then((err)=>{
// // // // // // // //     console.log(err)
// // // // // // // // }).catch((err)=>{
// // // // // // // //     console.log(err)
// // // // // // // // })
// // // // // // // // let crop = {}
// // // // // // // // crop.list = []
// // // // // // // // crop.on = function (fn){
// // // // // // // //     this.list.push(fn)
// // // // // // // // }
// // // // // // // // crop.emit = function () {
// // // // // // // //     this.list.forEach((item) =>{
// // // // // // // //         console.log(arguments.callee, 'arguments')
// // // // // // // //         item.apply(this,arguments)
// // // // // // // //     })
// // // // // // // // }

// // // // // // // // crop.on(function(position, money, da){
// // // // // // // //     console.log('你的职位：' + position)
// // // // // // // //     console.log('你的薪水：' + money + da)
// // // // // // // // })
// // // // // // // // crop.on(function(skill, hobby) {
// // // // // // // //     console.log('你的技能有： ' + skill);
// // // // // // // //     console.log('爱好： ' + hobby);
// // // // // // // // });

// // // // // // // // crop.emit('前端', 10000)
// // // // // // // // crop.emit('吃饭拉屎','打游戏')

// // // // // // // // let crop = {}
// // // // // // // // crop.list = {}
// // // // // // // // crop.on = function (key, fn) {
// // // // // // // //     if (!this.list[key]){
// // // // // // // //         this.list[key] = []
// // // // // // // //     }
// // // // // // // //     this.list[key].push(fn)
// // // // // // // // }
// // // // // // // // crop.emit = function () {
// // // // // // // //     let key = [].shift.call(arguments);
// // // // // // // //     let fns = this.list[key]
// // // // // // // //     if (!fns || fns.length < 1) {
// // // // // // // //         return
// // // // // // // //     }
// // // // // // // //     this.list[key].forEach(element => {
// // // // // // // //         element.apply(this,arguments)
// // // // // // // //     });
// // // // // // // // }
// // // // // // // // crop.on('join', function(position, money){
// // // // // // // //     console.log('你的职位：' + position)
// // // // // // // //     console.log('你的薪水：' + money)
// // // // // // // // })
// // // // // // // // crop.on('other', function(skill, hobby) {
// // // // // // // //     console.log('你的技能有： ' + skill);
// // // // // // // //     console.log('爱好： ' + hobby);
// // // // // // // // });

// // // // // // // // crop.emit('join', '前端', 10000)
// // // // // // // // crop.emit('other', '吃饭拉屎','打游戏')

// // // // // // // let event = {
// // // // // // //     list: {},
// // // // // // //     on(key, fn){
// // // // // // //         if(!this.list[key]){
// // // // // // //             this.list[key] = []
// // // // // // //         }
// // // // // // //         this.list[key].push(fn)
// // // // // // //     },
// // // // // // //     emit(){
// // // // // // //         let key = [].shift.call(arguments),
// // // // // // //             fns = this.list[key];
// // // // // // //         if (!fns || fns.length < 1) {
// // // // // // //             return 
// // // // // // //         }
// // // // // // //         fns.forEach(element => {
// // // // // // //             element.apply(this, arguments)
// // // // // // //         });
// // // // // // //     },
// // // // // // //     remove(key, fn){
// // // // // // //         let fns = this.list[key]
// // // // // // //         if (fns.length< 1) {
// // // // // // //             return
// // // // // // //         }

// // // // // // //         if (!fn){
// // // // // // //             fns && (fns.length = 0);
// // // // // // //         } else {
// // // // // // //             fns.forEach((cb,index)=>{
// // // // // // //                 if (cb === fn){
// // // // // // //                     fns.splice(index, 1)
// // // // // // //                 }
// // // // // // //             })
// // // // // // //         }
// // // // // // //     }
// // // // // // // }
// // // // // // // function a(){
// // // // // // //     console.log('aaaa')
// // // // // // // }
// // // // // // // function b(){
// // // // // // //     console.log('bbbbb')
// // // // // // // }
// // // // // // // function c(){
// // // // // // //     console.log('ccccc')
// // // // // // // }
// // // // // // // event.on('pet', a)
// // // // // // // event.on('pet', b)
// // // // // // // event.on('pet', c)
// // // // // // // event.remove('pet', c)
// // // // // // // event.emit('pet')

// // // // // // // let str ='fsa5432,ertw4325'
// // // // // // // let str2 = str.replace(/([a-z]+)/g,(w, $1)=>{
// // // // // // //     return $1.toUpperCase();
// // // // // // // })
// // // // // // // console.log(str2)

// // // // // // // let arr = [2,,,,32,443,44,9]
// // // // // // // let aa = arr.map((item)=>{
// // // // // // //     return item > 0
// // // // // // // })
// // // // // // // console.log(aa)


// // // // // // var resolveAfter2Seconds = function() {
// // // // // //     console.log("starting slow promise");
// // // // // //     return new Promise(resolve => {
// // // // // //       setTimeout(function() {
// // // // // //         resolve(20);
// // // // // //         console.log("slow promise is done");
// // // // // //       }, 2000);
// // // // // //     });
// // // // // //   };
  
// // // // // //   var resolveAfter1Second = function() {
// // // // // //     console.log("starting fast promise");
// // // // // //     return new Promise(resolve => {
// // // // // //       setTimeout(function() {
// // // // // //         resolve(10);
// // // // // //         console.log("fast promise is done");
// // // // // //       }, 1000);
// // // // // //     });
// // // // // //   };
  
// // // // // //   var sequentialStart = async function() {
// // // // // //     console.log('==SEQUENTIAL START==');
  
// // // // // //     // 如果 await 操作符后的表达式不是一个 Promise 对象, 则它会被转换成一个 resolved 状态的 Promise 对象
// // // // // //     const slow = await resolveAfter2Seconds();
  
// // // // // //     const fast = await resolveAfter1Second();
// // // // // //     console.log(slow);
// // // // // //     console.log(fast);
// // // // // //   }
  
// // // // // //   var concurrentStart = async function() {
// // // // // //     console.log('==CONCURRENT START with await==');
// // // // // //     const slow = resolveAfter2Seconds(); // 立即启动计时器
// // // // // //     const fast = resolveAfter1Second();
  
// // // // // //     console.log(await slow);
// // // // // //     console.log(await fast); // 等待 slow 完成, fast 也已经完成。
// // // // // //   }
  
// // // // // //   var stillSerial = function() {
// // // // // //     console.log('==CONCURRENT START with Promise.all==');
// // // // // //     Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
// // // // // //       console.log(slow);
// // // // // //       console.log(fast);
// // // // // //     });
// // // // // //   }
  
// // // // // //   var parallel = function() {
// // // // // //     console.log('==PARALLEL with Promise.then==');
// // // // // //     resolveAfter2Seconds().then((message)=>console.log(message)); // in this case could be simply written as console.log(resolveAfter2Seconds());
// // // // // //     resolveAfter1Second().then((message)=>console.log(message));
// // // // // //   }
  
// // // // // //   sequentialStart(); // sequentialStart 总共花了 2+1 秒
// // // // // //   // 等到 sequentialStart() 完成
// // // // // //   setTimeout(concurrentStart, 4000); // concurrentStart 总共花了 2 秒
// // // // // //   // 等到 setTimeout(concurrentStart, 4000) 完成
// // // // // //   setTimeout(stillSerial, 7000); // stillSerial 总共花了 2 秒
// // // // // //   // 等到 setTimeout(stillSerial, 7000) 完成
// // // // // //   setTimeout(parallel, 10000); // 真正的并行运行

// // // // // const readFile = function () {
// // // // //     return new Promise((resolve,reject) => {
// // // // //         fs.readFile(src, (err,data)){
// // // // //             if(err) rejects(err)
// // // // //             resolve(data)
// // // // //         }
// // // // //     })
// // // // // }

// // // // // readFile('/a.txt').then((data)=>{
// // // // //     console.log(data)
// // // // //     return readFile('/b.txt')
// // // // // }).then((data)=>{
// // // // //     console.log(data)
// // // // //     return readFile('/c.txt')
// // // // // }).then((data)=>{
// // // // //     console.log(data)
// // // // // })
// // // // // function* ascReadFile(){
// // // // //     yield readFile('./a.txt');
// // // // //     yield readFile('./b.txt');
// // // // //     yield readFile('./c.txt')
// // // // // }

// // // // // let g = ascReadFile();
// // // // // g.next().value.then(data => {
// // // // //     console.log(data)
// // // // //     return g.next().value;
// // // // // }).then(data => {
// // // // //     console.log(data)
// // // // //     return g.next().value;
// // // // // }).then(data =>{
// // // // //     console.log(data)
// // // // // })

// // // // // async function asyncReadFile () {
// // // // //     let a = await readFile('./a.txt')
// // // // //     let b = await readFile('./b.txt');
// // // // //     let c = await readFile('./c.txt');

// // // // // }
// // // // // asyncReadFile()

// // // // let fn = async function() {
// // // //     debugger
// // // //     let num = await 1;
// // // //     console.log(num)
// // // //     num++;
// // // //     return num;
// // // // }
// // // // fn().then(num => console.log(num))
// // // // console.log('fdsafdas')
// // // // setTimeout(() => console.log(100),0);

// // // // function chainAnimationsPromise(elem, animations){
// // // //     let ret = null
// // // //     let p = Promise.resolve();
// // // //     for(let anim of animations){
// // // //         p = p.then((val)=>{
// // // //             ret = val;
// // // //             ruturn anim(elem)
// // // //         })
// // // //     }

// // // //     p.catch(()=>{

// // // //     }).then(()=>{
// // // //         return ret;
// // // //     })
// // // // }

// // // // function test(atr){
// // // //     return function(target){
// // // //         target.a = atr
// // // //     }
// // // // }
// // // // @test(true)
// // // // class My{}
// // // // console.log(My.a)


// // // // function test(target){
// // // //     target.prototype.abc = true
// // // // }
// // // // @test
// // // // class My{}
// // // // let aa = new My()
// // // // aa.abc

// // // // export function mixins(...list){
// // // //     return function(target){
// // // //         Object.assign(target.prototype,...list)
// // // //     }
// // // // }
// // // // import { mixins } from './mixins'
// // // // const Foo = {
// // // //     abc (){}
// // // // }
// // // // @mixins(Foo)
// // // // class My{}

// // // // let ojb = new My()
// // // // ojb.abc()

// // // // function foo(obj){
// // // //     var obj={}
// // // //     obj.x=3
// // // // }
// // // // foo(obj)
// // // // console.log(obj)

// // // function clone(origin){
// // //     let originProto = Object.getPrototypeOf(origin)
// // //     return Object.assign(Object.create(originProto), origin)
// // // }

// // // const obj = {
// // //     foo: 13,
// // //     get bar(){
// // //         return 'abc'
// // //     }
// // // }
// // // console.log(Object.getOwnPropertyDescriptors(obj))



// // class Parent {
// //     static myMehtod (msg) {
// //         console.log('static', this.x)
// //     }
// //     myMehtod (msg) {
// //         console.log('instance', msg)
// //     }
// // }

// // class Child extends Parent {
// //     constructor () {
// //         super()
// //         this.x = 2
// //     }
// //     static myMehtod (msg) {
// //         super.myMehtod(msg)
// //     }
// //     myMehtod (msg) {
// //         super.myMehtod(msg)
// //     }
// // }
// // Child.x = 3
// // console.log(Child.myMehtod('aaaa'))
// // let adc = new Child()
// // console.log(adc.myMehtod('fdasfas'))

// // class A{}
// // class B extends A{}
// // B._proto_ === A
// // B.prototype._proto_ = A.Prototype

// // function makeIterator(arr){
// //     var nextIndex = 0;
// //     return {
// //         next: function () {
// //             return nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {value: undefined, done: true}
// //         }
// //     }
// // }

// // let arbc = makeIterator(['a','b'])
// // console.log(arbc.next())
// // console.log(arbc.next())
// // console.log(arbc.next())

// // function idMarker(){
// //     var index = 0
// //     return {
// //         next: function(){
// //             return { value: index++, done:false}
// //         }
// //     }
// // }

// // var it = idMarker()
// // console.log(it.next().value)
// // console.log(it.next().value)
// // console.log(it.next().value)
// // let arr = ['a','b']
// // let obj = {
// //     'a': 2341
// // }
// // console.dir(arr[Symbol.iterator])

// // const obj2 = {
// //     data: 
// //     [Symbol.iterator]: function () {
// //         return {
// //             next: function () {
// //                 return {
// //                     value: 1,
// //                     done: true
// //                 }
// //             }
// //         }
// //     }
// // }


// // let str = "hello";

// // for (let s of str) {
// //   console.log(s); // h e l l o
// // }

// // function* generatorFn(){
// //     yield 'hello';
// //     yield 'world';
// //     return 'ending'
// // }

// // var hw = generatorFn();
// // console.log(hw)


// // var Thunk = function (fn) {
// //     return function () {
// //         var args = Array.prototype.slice.call(arguments);
// //         return function(callback) {
// //             args.push(callback)
// //             return fn.apply(this, args)
// //         }
// //     }
// // }

// // const Thunk = function () {
// //     return function (...args) {
// //         return function (callback) {
// //             return fn.call(this, ...args, callback)
// //         }
// //     }
// // }

// // let str ='fds5435432,5435342j5l432ljk555432lk';
// // str = str.split('').sort().join('')
// // let arr = str.match(/(\d)\1+/g)
// // arr.sort((a,b)=>{
// //     return a.length - b.length
// // })
// // console.log(arr[arr.length-1])


// // let obj = [
// //     {id:1,parent:null},
// //     {id:2,parent:1},
// //     {id:3,parent:2}
// // ]

// // function mul(arr, n) {
// //     if (n === arr.length - 1){
// //         arr[n].id += 10
// //         return arr[n]
// //     }
// //     console.log(arr[n].id += 10)
// //     arr[n].children = mul(arr, n+1)
// //     return arr[n]
    
// // }
// // var obj2 = {}
// // obj2.bbj = mul(obj, 0)
// // console.log(JSON.stringify(obj2,null,4))

// // const fs = require('fs')
// // console.log(fs)

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// })
// promise.then(() => {
//     console.log(3);
// })

// console.log(4);

// function red() {
//     console.log('red');
// }
// function green() {
//     console.log('green');
// }
// function yellow() {
//     console.log('yellow');
// }
// const light = (cb, timer) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             cb()
//             resolve()
//         }, timer)
//     })
// }

// const test = () => {
//     Promise.resolve().then(()=>{
//         return light(red, 3000)
//     }).then(()=>{
//         return light(yellow, 2000)
//     }).then(()=>{
//         return light(green, 1000)
//     }).then(()=>{
//         test()
//     })
// }

// test()

/* const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    const data = []
    let sequence = Promise.resolve()

    ajaxArray.forEach(element => {
        sequence = sequence.then(element).then((item) => {
            data.push(item)
            return data
        })
    });
    return sequence
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
}); */

/* const urls = ['https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 'https://www.kkkk1000.com/images/getImgData/gray.gif', 'https://www.kkkk1000.com/images/getImgData/Particle.gif', 'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 'https://user-gold-cdn.xitu.io/2018/10/29/166be40ccc434be0?w=600&h=342&f=png&s=122185'];
function loadImg(url){
    return new Promise((resolve, reject)=>{
        const img = new Image()
        img.onload = function () {
            console.log('一张图片加载完成')
            resolve()
        }
        img.onerror = reject
        console.log(url)
        img.src = url
    })
}

function limitLoad(urls, handler, limit) {
    const sequence = [].concat(urls)
    let promises = []

    promises = sequence.splice(0, limit).map((url, index)=>{
        return handler(url).then(()=>{
            return index
        })
    })
    console.log(JSON.stringify(promises,null,4))
    sequence.reduce((last, url, currentIndex)=>{
        return last.then(()=>{
            return Promise.race(promises)
        }).catch(()=>{

        }).then((res)=>{
            promises[res] = handler(sequence[currentIndex]).then(()=>{
                console.log(res)
                return res
            })
        })
    }, Promise.resolve()).then(()=>{
        return Promise.all(promises)
    })

}

limitLoad(urls, loadImg, 3)  */
// function add (x,y){
//     return x + y
// }
// console.log(add(3,4))

// let add1 = function(x){
//     return function(y){
//         return x + y
//     }
// }

// console.log(add1(30)(40))

// /* function curry(fn){
//     let args = [].slice.call(arguments, 1)
//     return function (){
//         let newArgs = args.concat([].slice.call(arguments))
//         return fn.apply(null, newArgs)
//     }
// } */

// function curry(fn,...list){
//     return (...arg)=>{
//         return fn.apply(null, [...list,...arg])
//     }
// }

// function fn (...args){
//     console.log(args)
// }
// curry(fn,1,2,3)(4,5,6,7)

// // Array.prototype.slice = function(start,end){
// //     var result = []
// //     start = start || 0
// //     end = end || this.length;
// //     for(var i=start; i<end; i++){
// //         result.push(this[i])
// //     }
// //     return result
// // }

// function throttle(fn,time){
//     let timer = null;
//     return function(){
//         let self = this,
//             args = arguments;
//         if (timer) return false
//         timer = setTimeout(function(){
//             clearTimeout(timer)
//             timer = null
//             fn.apply(self, args)
//         },time)
//     }
// }


// function timeChunk(data, fn, count = 1, wait) {
//     let val, timer;
//     function start(){
//         let len = Math.min(count, data.length)
//         for(let i=0; i<len; i++) {
//             val = data.shift()
//             fn(val)
//         }
//     }

//     return function(){
//         timer = setInterval(function(){
//             if(data.length === 0) {
//                 clearInterval(timer)
//             }
//             start()
//         }, wait)
//     }
// }

// let arr = [];
// for (let i = 0; i < 100; i++) {  // 这里跑了10万数据
//     arr.push(i);
// }

// let render = timeChunk(arr, function(n){
//     let div = document.createElement('div')
//     div.innerHTML = n
//     document.body.appendChild(div)
// },8, 1000)
// render()


// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
// }
// class ColorPoint extends Point{
//     constructor(x,y,z){
//         super(x,y)
//         this.z = z
//     }
// }
// let a = new ColorPoint(1,3,4)
// console.log(a.x,a.y,a.z)

// // 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
// // 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
// // ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
// // 另外，在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例


// function popSort(arr){
//     for(let i=arr.length;i>=2;i--){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// function selectorSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             if(arr[j]< arr[i]){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }
// function insertSort(arr){
//     for(let i=1; i<arr.length; i++){
//         for(let j=i; j>0; j--){
//             if(arr[j] < arr[j-1]){
//                 [arr[j],arr[j-1]] = [arr[j-1], arr[j]]
//             }else {
//                 break;
//             }
//         }
//     }
//     return arr
// }

// let arra = [1,321,432,25,2,2,4,5,765,4,654,35643]
// console.log(insertSort(arra))
// console.log(popSort(arra))
// console.log(selectorSort(arra))

// Object.setPrototypeOf = Object.setPrototypeOf ||
// function(obj, proto) {
//     obj.__proto__ = proto;

//     return obj;
// };

// /**
//  * 用了点技巧的继承，实际上返回的是Date对象
//  */
// function MyDate() {
//     // bind属于Function.prototype，接收的参数是：object, param1, params2...
//     var dateInst = new(Function.prototype.bind.apply(Date, [Date].concat(Array.prototype.slice.call(arguments))))();

//     // 更改原型指向，否则无法调用MyDate原型上的方法
//     // ES6方案中，这里就是[[prototype]]这个隐式原型对象，在没有标准以前就是__proto__
//     Object.setPrototypeOf(dateInst, MyDate.prototype);

//     dateInst.abc = 1;

//     return dateInst;
// }

// // 原型重新指回Date，否则根本无法算是继承
// Object.setPrototypeOf(MyDate.prototype, Date.prototype);

// MyDate.prototype.getTest = function getTest() {
//     return this.getTime();
// };
// MyDate.prototype.getMontha = function (){
//     return this.getMonth()
// }

// let date = new MyDate();

// // 正常输出，譬如1515638988725
// console.log(date.getTest(),date.getMontha());


// function Dep () {
//     this.subs = [];
// }
// Dep.prototype = {
//     addSub(sub){
//         this.subs.push(sub)
//     },
//     notify(){
//         this.subs.forEach(element => {
//             element.update()
//         });
//     }
// }

// function Watch(fn) {
//     this.fn = fn;
// }
// Watch.prototype.update = function(){
//     this.fn()
// }
// let watcher = new Watch(() => console.log('1111'))
// let dep = new Dep();
// dep.addSub(watcher)
// dep.addSub(watcher)
// dep.notify()

var father1 = {name:'shangdi',age:1000,job:['teacher','cook'],abc:function(){console.log('aaadd')}};
//浅拷贝函数
function copy(obj){
    var childs = {};
    for(var key in obj){
        childs[key] = obj[key];
    }
    return childs;
}
var child1 = copy(father1);
console.log(child1);    //{ name: 'shangdi', age: 1000 }
console.log(typeof child1); //object

function deepCopy(p,c={}){
    for (var i in p){
        if(p.hasOwnProperty(i)){
            if(typeof p[i] === 'object'){
                c[i] = Array.from(p[i]) ? [] : {}
                deepCopy(p[i], c[i])
            }else {
                c[i] = p[i]
            }
        }
    }
    return c
}

let test = JSON.parse(JSON.stringify(father1))
console.log(test,'fdsa')
var abc = deepCopy(father1)
abc.abc()
abc.job.push('abd')
console.log(father1,abc)
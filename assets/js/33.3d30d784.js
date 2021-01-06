(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{516:function(e,v,_){"use strict";_.r(v);var t=_(4),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("Abstract")]),e._v(" "),_("ol",[_("li",[e._v("统计24道Vue面试题，分别来自"),_("a",{attrs:{href:"https://juejin.im/post/6844904084374290446",target:"_blank",rel:"noopener noreferrer"}},[e._v("「面试题」20+Vue面试题整理"),_("OutboundLink")],1),e._v("和"),_("a",{attrs:{href:"https://juejin.im/post/6870374238760894472",target:"_blank",rel:"noopener noreferrer"}},[e._v("一次关于Vue的自我模拟面试"),_("OutboundLink")],1)])])]),e._v(" "),_("h2",{attrs:{id:"_0-那你能讲一讲mvvm吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0-那你能讲一讲mvvm吗"}},[e._v("#")]),e._v(" 0.那你能讲一讲MVVM吗？")]),e._v(" "),_("p",[e._v("MVVM是"),_("code",[e._v("Model-View-ViewModel")]),e._v("缩写，也就是把"),_("code",[e._v("MVC")]),e._v("中的"),_("code",[e._v("Controller")]),e._v("演变成"),_("code",[e._v("ViewModel")]),e._v("。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。")]),e._v(" "),_("h2",{attrs:{id:"_1-简单说一下vue2-x响应式数据原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单说一下vue2-x响应式数据原理"}},[e._v("#")]),e._v(" 1.简单说一下Vue2.x响应式数据原理")]),e._v(" "),_("p",[e._v("Vue在初始化数据时，会使用"),_("code",[e._v("Object.defineProperty")]),e._v("重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的"),_("code",[e._v("watcher")]),e._v(")如果属性发生变化会通知相关依赖进行更新操作("),_("code",[e._v("发布订阅")]),e._v(")。")]),e._v(" "),_("h2",{attrs:{id:"_2-那你知道vue3-x响应式数据原理吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-那你知道vue3-x响应式数据原理吗"}},[e._v("#")]),e._v(" 2.那你知道Vue3.x响应式数据原理吗？")]),e._v(" "),_("p",[e._v("Vue3.x改用"),_("code",[e._v("Proxy")]),e._v("替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。")]),e._v(" "),_("blockquote",[_("p",[e._v("❝")]),e._v(" "),_("p",[e._v("Proxy只会代理对象的第一层，那么Vue3又是怎样处理这个问题的呢？")]),e._v(" "),_("p",[e._v("❞")])]),e._v(" "),_("p",[e._v("（很简单啊）")]),e._v(" "),_("p",[e._v("判断当前Reflect.get的返回值是否为Object，如果是则再通过"),_("code",[e._v("reactive")]),e._v("方法做代理， 这样就实现了深度观测。")]),e._v(" "),_("blockquote",[_("p",[e._v("❝")]),e._v(" "),_("p",[e._v("监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？")]),e._v(" "),_("p",[e._v("❞")])]),e._v(" "),_("p",[e._v("我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。")]),e._v(" "),_("h2",{attrs:{id:"_3-再说一下vue2-x中如何监测数组变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-再说一下vue2-x中如何监测数组变化"}},[e._v("#")]),e._v(" 3.再说一下vue2.x中如何监测数组变化")]),e._v(" "),_("p",[e._v("使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。")]),e._v(" "),_("p",[e._v("（能问到这的面试官都比较注重深度，这些常规操作要记牢）")]),e._v(" "),_("p",[e._v("（原型链的细节可以参考我的另一篇专栏）")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903893520875527",target:"_blank",rel:"noopener noreferrer"}},[e._v("一文带你彻底搞懂JavaScript原型链"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"_4-nexttick知道吗-实现原理是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-nexttick知道吗-实现原理是什么"}},[e._v("#")]),e._v(" 4.nextTick知道吗，实现原理是什么？")]),e._v(" "),_("p",[e._v("在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用")]),e._v(" "),_("ul",[_("li",[e._v("Promise")]),e._v(" "),_("li",[e._v("MutationObserver")]),e._v(" "),_("li",[e._v("setImmediate")]),e._v(" "),_("li",[e._v("如果以上都不行则采用setTimeout")])]),e._v(" "),_("p",[e._v("定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。")]),e._v(" "),_("p",[e._v("（关于宏任务和微任务以及事件循环可以参考我的另两篇专栏）")]),e._v(" "),_("p",[e._v("(看到这你就会发现，其实问框架最终还是考验你的原生JavaScript功底)")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903881663578119",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器中JavaScript的事件循环"),_("OutboundLink")],1)]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844904007270563848",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js事件循环"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"_5-说一下vue的生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-说一下vue的生命周期"}},[e._v("#")]),e._v(" 5.说一下Vue的生命周期")]),e._v(" "),_("p",[_("code",[e._v("beforeCreate")]),e._v("是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。")]),e._v(" "),_("p",[_("code",[e._v("created")]),e._v("在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。")]),e._v(" "),_("p",[_("code",[e._v("beforeMount")]),e._v("发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。")]),e._v(" "),_("p",[_("code",[e._v("mounted")]),e._v("在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。")]),e._v(" "),_("p",[_("code",[e._v("beforeUpdate")]),e._v("发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。")]),e._v(" "),_("p",[_("code",[e._v("updated")]),e._v("发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。")]),e._v(" "),_("p",[_("code",[e._v("beforeDestroy")]),e._v("发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。")]),e._v(" "),_("p",[_("code",[e._v("destroyed")]),e._v("发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。")]),e._v(" "),_("p",[e._v("(关于Vue的生命周期详解感兴趣的也请移步我的另一篇专栏)")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/6844903879100858382",target:"_blank",rel:"noopener noreferrer"}},[e._v("从源码解读Vue生命周期，让面试官对你刮目相看"),_("OutboundLink")],1)]),e._v(" "),_("h2",{attrs:{id:"_6-你的接口请求一般放在哪个生命周期中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-你的接口请求一般放在哪个生命周期中"}},[e._v("#")]),e._v(" 6.你的接口请求一般放在哪个生命周期中？")]),e._v(" "),_("p",[e._v("接口请求一般放在"),_("code",[e._v("mounted")]),e._v("中，但需要注意的是服务端渲染时不支持mounted，需要放到"),_("code",[e._v("created")]),e._v("中。")]),e._v(" "),_("h2",{attrs:{id:"_7-再说一下computed和watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-再说一下computed和watch"}},[e._v("#")]),e._v(" 7.再说一下Computed和Watch")]),e._v(" "),_("p",[_("code",[e._v("Computed")]),e._v("本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。")]),e._v(" "),_("p",[_("code",[e._v("Watch")]),e._v("没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开"),_("code",[e._v("deep：true")]),e._v("选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用"),_("code",[e._v("字符串形式")]),e._v("监听，如果没有写到组件中，不要忘记使用"),_("code",[e._v("unWatch手动注销")]),e._v("哦。")]),e._v(" "),_("h2",{attrs:{id:"_8-说一下v-if和v-show的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-说一下v-if和v-show的区别"}},[e._v("#")]),e._v(" 8.说一下v-if和v-show的区别")]),e._v(" "),_("p",[e._v("当条件不成立时，"),_("code",[e._v("v-if")]),e._v("不会渲染DOM元素，"),_("code",[e._v("v-show")]),e._v("操作的是样式(display)，切换当前DOM的显示和隐藏。")]),e._v(" "),_("h2",{attrs:{id:"_9-组件中的data为什么是一个函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-组件中的data为什么是一个函数"}},[e._v("#")]),e._v(" 9.组件中的data为什么是一个函数？")]),e._v(" "),_("p",[e._v("一个组件被复用多次的话，也就会创建多个实例。本质上，"),_("code",[e._v("这些实例用的都是同一个构造函数")]),e._v("。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。")]),e._v(" "),_("h2",{attrs:{id:"_10-说一下v-model的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-说一下v-model的原理"}},[e._v("#")]),e._v(" 10.说一下v-model的原理")]),e._v(" "),_("p",[_("code",[e._v("v-model")]),e._v("本质就是一个语法糖，可以看成是"),_("code",[e._v("value + input")]),e._v("方法的语法糖。 可以通过model属性的"),_("code",[e._v("prop")]),e._v("和"),_("code",[e._v("event")]),e._v("属性来进行自定义。原生的v-model，会根据标签的不同生成不同的事件和属性。")]),e._v(" "),_("h2",{attrs:{id:"_11-vue事件绑定原理说一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-vue事件绑定原理说一下"}},[e._v("#")]),e._v(" 11.Vue事件绑定原理说一下")]),e._v(" "),_("p",[e._v("原生事件绑定是通过"),_("code",[e._v("addEventListener")]),e._v("绑定给真实元素的，组件事件绑定是通过Vue自定义的"),_("code",[e._v("$on")]),e._v("实现的。")]),e._v(" "),_("h2",{attrs:{id:"_12-vue模版编译原理知道吗-能简单说一下吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-vue模版编译原理知道吗-能简单说一下吗"}},[e._v("#")]),e._v(" 12.Vue模版编译原理知道吗，能简单说一下吗？")]),e._v(" "),_("p",[e._v("简单说，Vue的编译过程就是将"),_("code",[e._v("template")]),e._v("转化为"),_("code",[e._v("render")]),e._v("函数的过程。会经历以下阶段：")]),e._v(" "),_("ul",[_("li",[e._v("生成AST树")]),e._v(" "),_("li",[e._v("优化")]),e._v(" "),_("li",[e._v("codegen")])]),e._v(" "),_("p",[e._v("首先解析模版，生成"),_("code",[e._v("AST语法树")]),e._v("(一种用JavaScript对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。")]),e._v(" "),_("p",[e._v("Vue的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的DOM也不会变化。那么优化过程就是深度遍历AST树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以"),_("code",[e._v("跳过对它们的比对")]),e._v("，对运行时的模板起到很大的优化作用。")]),e._v(" "),_("p",[e._v("编译的最后一步是"),_("code",[e._v("将优化后的AST树转换为可执行的代码")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"_13-vue2-x和vue3-x渲染器的diff算法分别说一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-vue2-x和vue3-x渲染器的diff算法分别说一下"}},[e._v("#")]),e._v(" 13.Vue2.x和Vue3.x渲染器的diff算法分别说一下")]),e._v(" "),_("p",[e._v("简单来说，diff算法有以下过程")]),e._v(" "),_("ul",[_("li",[e._v("同级比较，再比较子节点")]),e._v(" "),_("li",[e._v("先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)")]),e._v(" "),_("li",[e._v("比较都有子节点的情况(核心diff)")]),e._v(" "),_("li",[e._v("递归比较子节点")])]),e._v(" "),_("p",[e._v("正常Diff两个树的时间复杂度是"),_("code",[e._v("O(n^3)")]),e._v("，但实际情况下我们很少会进行"),_("code",[e._v("跨层级的移动DOM")]),e._v("，所以Vue将Diff进行了优化，从"),_("code",[e._v("O(n^3) -> O(n)")]),e._v("，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。")]),e._v(" "),_("p",[e._v("Vue2的核心Diff算法采用了"),_("code",[e._v("双端比较")]),e._v("的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。")]),e._v(" "),_("p",[e._v("Vue3.x借鉴了 "),_("a",{attrs:{href:"https://github.com/localvoid/ivi",target:"_blank",rel:"noopener noreferrer"}},[e._v("ivi"),_("OutboundLink")],1),e._v("算法和 "),_("a",{attrs:{href:"https://github.com/infernojs/inferno",target:"_blank",rel:"noopener noreferrer"}},[e._v("inferno"),_("OutboundLink")],1),e._v("算法")]),e._v(" "),_("p",[e._v("在创建VNode时就确定其类型，以及在"),_("code",[e._v("mount/patch")]),e._v("的过程中采用"),_("code",[e._v("位运算")]),e._v("来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升。(实际的实现可以结合Vue3.x源码看。)")]),e._v(" "),_("p",[e._v("该算法中还运用了"),_("code",[e._v("动态规划")]),e._v("的思想求解最长递归子序列。")]),e._v(" "),_("p",[e._v("(看到这你还会发现，框架内无处不蕴藏着数据结构和算法的魅力)")]),e._v(" "),_("blockquote",[_("p",[e._v("❝")]),e._v(" "),_("p",[e._v("面试官：(可以可以，看来是个苗子，不过自我介绍属实有些无聊，下一题)")]),e._v(" "),_("p",[e._v("❞")])]),e._v(" "),_("h2",{attrs:{id:"_14-再说一下虚拟dom以及key属性的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-再说一下虚拟dom以及key属性的作用"}},[e._v("#")]),e._v(" 14.再说一下虚拟Dom以及key属性的作用")]),e._v(" "),_("p",[e._v("由于在浏览器中操作DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题。这就是虚拟Dom的"),_("code",[e._v("产生原因")]),e._v("。")]),e._v(" "),_("p",[e._v("Vue2的Virtual DOM借鉴了开源库"),_("code",[e._v("snabbdom")]),e._v("的实现。")]),e._v(" "),_("p",[_("code",[e._v("Virtual DOM本质就是用一个原生的JS对象去描述一个DOM节点。是对真实DOM的一层抽象。")]),e._v("(也就是源码中的VNode类，它定义在src/core/vdom/vnode.js中。)")]),e._v(" "),_("p",[e._v("VirtualDOM映射到真实DOM要经历VNode的create、diff、patch等阶段。")]),e._v(" "),_("p",[_("strong",[e._v("「key的作用是尽可能的复用 DOM 元素。」")])]),e._v(" "),_("p",[e._v("新旧 children 中的节点只有顺序是不同的时候，最佳的操作应该是通过移动元素的位置来达到更新的目的。")]),e._v(" "),_("p",[e._v("需要在新旧 children 的节点中保存映射关系，以便能够在旧 children 的节点中找到可复用的节点。key也就是children中节点的唯一标识。")]),e._v(" "),_("h2",{attrs:{id:"_15-keep-alive了解吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-keep-alive了解吗"}},[e._v("#")]),e._v(" 15.keep-alive了解吗")]),e._v(" "),_("p",[_("code",[e._v("keep-alive")]),e._v("可以实现组件缓存，当组件切换时不会对当前组件进行卸载。")]),e._v(" "),_("p",[e._v("常用的两个属性"),_("code",[e._v("include/exclude")]),e._v("，允许组件有条件的进行缓存。")]),e._v(" "),_("p",[e._v("两个生命周期"),_("code",[e._v("activated/deactivated")]),e._v("，用来得知当前组件是否处于活跃状态。")]),e._v(" "),_("p",[e._v("keep-alive的中还运用了"),_("code",[e._v("LRU(Least Recently Used)")]),e._v("算法。")]),e._v(" "),_("p",[e._v("（又是数据结构与算法，原来算法在前端也有这么多的应用）")]),e._v(" "),_("h2",{attrs:{id:"_16-vue中组件生命周期调用顺序说一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-vue中组件生命周期调用顺序说一下"}},[e._v("#")]),e._v(" 16.Vue中组件生命周期调用顺序说一下")]),e._v(" "),_("p",[e._v("组件的调用顺序都是"),_("code",[e._v("先父后子")]),e._v(",渲染完成的顺序是"),_("code",[e._v("先子后父")]),e._v("。")]),e._v(" "),_("p",[e._v("组件的销毁操作是"),_("code",[e._v("先父后子")]),e._v("，销毁完成的顺序是"),_("code",[e._v("先子后父")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"加载渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#加载渲染过程"}},[e._v("#")]),e._v(" 加载渲染过程")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h3",{attrs:{id:"子组件更新过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#子组件更新过程"}},[e._v("#")]),e._v(" 子组件更新过程")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("父beforeUpdate->子beforeUpdate->子updated->父updated\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h3",{attrs:{id:"父组件更新过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#父组件更新过程"}},[e._v("#")]),e._v(" 父组件更新过程")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("父 beforeUpdate -> 父 updated\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h3",{attrs:{id:"销毁过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#销毁过程"}},[e._v("#")]),e._v(" 销毁过程")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("父beforeDestroy->子beforeDestroy->子destroyed->父destroyed\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h2",{attrs:{id:"_17-vue2-x组件通信有哪些方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_17-vue2-x组件通信有哪些方式"}},[e._v("#")]),e._v(" 17.Vue2.x组件通信有哪些方式？")]),e._v(" "),_("p",[e._v("父子组件通信")]),e._v(" "),_("p",[e._v("父->子"),_("code",[e._v("props")]),e._v("，子->父 "),_("code",[e._v("$on、$emit")])]),e._v(" "),_("p",[e._v("获取父子组件实例 "),_("code",[e._v("$parent、$children")])]),e._v(" "),_("p",[_("code",[e._v("Ref")]),e._v(" 获取实例的方式调用组件的属性或者方法")]),e._v(" "),_("p",[_("code",[e._v("Provide、inject")]),e._v(" 官方不推荐使用，但是写组件库时很常用")]),e._v(" "),_("p",[e._v("兄弟组件通信")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("Event Bus` 实现跨组件通信 `Vue.prototype.$bus = new Vue\nVuex\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br")])]),_("p",[e._v("跨级组件通信")]),e._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("Vuex\n$attrs、$listeners\nProvide、inject\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br")])]),_("h2",{attrs:{id:"_18-ssr了解吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-ssr了解吗"}},[e._v("#")]),e._v(" 18.SSR了解吗？")]),e._v(" "),_("p",[e._v("SSR也就是服务端渲染，"),_("code",[e._v("也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端")]),e._v("。")]),e._v(" "),_("p",[e._v("SSR有着更好的SEO、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持"),_("code",[e._v("beforeCreate")]),e._v("和"),_("code",[e._v("created")]),e._v("两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境。还有就是服务器会有更大的负载需求。")]),e._v(" "),_("h2",{attrs:{id:"_19-你都做过哪些vue的性能优化-需要额外说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_19-你都做过哪些vue的性能优化-需要额外说明"}},[e._v("#")]),e._v(" 19.你都做过哪些Vue的性能优化？ - 需要额外说明")]),e._v(" "),_("h3",{attrs:{id:"编码阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编码阶段"}},[e._v("#")]),e._v(" 编码阶段")]),e._v(" "),_("ul",[_("li",[e._v("尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher")]),e._v(" "),_("li",[e._v("v-if和v-for不能连用")]),e._v(" "),_("li",[e._v("如果需要使用v-for给每项元素绑定事件时使用事件代理")]),e._v(" "),_("li",[e._v("SPA 页面采用keep-alive缓存组件")]),e._v(" "),_("li",[e._v("在更多的情况下，使用v-if替代v-show")]),e._v(" "),_("li",[e._v("key保证唯一")]),e._v(" "),_("li",[e._v("使用路由懒加载、异步组件")]),e._v(" "),_("li",[e._v("防抖、节流")]),e._v(" "),_("li",[e._v("第三方模块按需导入")]),e._v(" "),_("li",[e._v("长列表滚动到可视区域动态加载")]),e._v(" "),_("li",[e._v("图片懒加载")])]),e._v(" "),_("h3",{attrs:{id:"seo优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#seo优化"}},[e._v("#")]),e._v(" SEO优化")]),e._v(" "),_("ul",[_("li",[e._v("预渲染")]),e._v(" "),_("li",[e._v("服务端渲染SSR")])]),e._v(" "),_("h3",{attrs:{id:"打包优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#打包优化"}},[e._v("#")]),e._v(" 打包优化")]),e._v(" "),_("ul",[_("li",[e._v("压缩代码")]),e._v(" "),_("li",[e._v("Tree Shaking/Scope Hoisting")]),e._v(" "),_("li",[e._v("使用cdn加载第三方模块")]),e._v(" "),_("li",[e._v("多线程打包happypack")]),e._v(" "),_("li",[e._v("splitChunks抽离公共文件")]),e._v(" "),_("li",[e._v("sourceMap优化")])]),e._v(" "),_("h3",{attrs:{id:"用户体验"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户体验"}},[e._v("#")]),e._v(" 用户体验")]),e._v(" "),_("ul",[_("li",[e._v("骨架屏")]),e._v(" "),_("li",[e._v("PWA")])]),e._v(" "),_("p",[e._v("还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。")]),e._v(" "),_("h2",{attrs:{id:"_20-hash路由和history路由实现原理说一下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_20-hash路由和history路由实现原理说一下"}},[e._v("#")]),e._v(" 20.hash路由和history路由实现原理说一下")]),e._v(" "),_("p",[_("code",[e._v("location.hash")]),e._v("的值实际就是URL中"),_("code",[e._v("#")]),e._v("后面的东西。")]),e._v(" "),_("p",[e._v("history实际采用了HTML5中提供的API来实现，主要有"),_("code",[e._v("history.pushState()")]),e._v("和"),_("code",[e._v("history.replaceState()")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"_21-slot是什么-有什么作用-原理是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_21-slot是什么-有什么作用-原理是什么"}},[e._v("#")]),e._v(" 21. slot是什么？有什么作用？原理是什么？")]),e._v(" "),_("p",[e._v("slot又名插槽，是Vue的内容分发机制，组件内部的模板引擎使用slot元素作为承载分发内容的出口。插槽slot是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。")]),e._v(" "),_("p",[e._v("slot又分三类，默认插槽，具名插槽和作用域插槽。")]),e._v(" "),_("ul",[_("li",[e._v("默认插槽：又名匿名查抄，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。")]),e._v(" "),_("li",[e._v("具名插槽：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。")]),e._v(" "),_("li",[e._v("作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。")])]),e._v(" "),_("p",[e._v("实现原理：当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在"),_("code",[e._v("vm.$slot")]),e._v("中，默认插槽为"),_("code",[e._v("vm.$slot.default")]),e._v("，具名插槽为"),_("code",[e._v("vm.$slot.xxx")]),e._v("，xxx 为插槽名，当组件执行渲染函数时候，遇到slot标签，使用"),_("code",[e._v("$slot")]),e._v("中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。")]),e._v(" "),_("h2",{attrs:{id:"_22-介绍一下vue中的diff算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_22-介绍一下vue中的diff算法"}},[e._v("#")]),e._v(" 22. 介绍一下Vue中的Diff算法")]),e._v(" "),_("p",[e._v("在新老虚拟DOM对比时")]),e._v(" "),_("ul",[_("li",[e._v("首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换")]),e._v(" "),_("li",[e._v("如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)")]),e._v(" "),_("li",[e._v("比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作（diff核心）。")]),e._v(" "),_("li",[e._v("匹配时，找到相同的子节点，递归比较子节点")])]),e._v(" "),_("p",[e._v("在diff中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从"),_("code",[e._v("O(n^3)")]),e._v("降低值"),_("code",[e._v("O(n)")]),e._v("，也就是说，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。")]),e._v(" "),_("h2",{attrs:{id:"_23-说说vue2-0和vue3-0有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_23-说说vue2-0和vue3-0有什么区别"}},[e._v("#")]),e._v(" 23. 说说Vue2.0和Vue3.0有什么区别")]),e._v(" "),_("ol",[_("li",[e._v("重构响应式系统，使用Proxy替换Object.defineProperty，使用Proxy优势：")])]),e._v(" "),_("ul",[_("li",[e._v("可直接监听数组类型的数据变化")]),e._v(" "),_("li",[e._v("监听的目标为对象本身，不需要像Object.defineProperty一样遍历每个属性，有一定的性能提升")]),e._v(" "),_("li",[e._v("可拦截apply、ownKeys、has等13种方法，而Object.defineProperty不行")]),e._v(" "),_("li",[e._v("直接实现对象属性的新增/删除")])]),e._v(" "),_("ol",[_("li",[e._v("新增Composition API，更好的逻辑复用和代码组织")]),e._v(" "),_("li",[e._v("重构 Virtual DOM")])]),e._v(" "),_("ul",[_("li",[e._v("模板编译时的优化，将一些静态节点编译成常量")]),e._v(" "),_("li",[e._v("slot优化，将slot编译为lazy函数，将slot的渲染的决定权交给子组件")]),e._v(" "),_("li",[e._v("模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）")])]),e._v(" "),_("ol",[_("li",[e._v("代码结构调整，更便于Tree shaking，使得体积更小")]),e._v(" "),_("li",[e._v("使用Typescript替换Flow")])]),e._v(" "),_("h2",{attrs:{id:"_24-为什么要新增composition-api-它能解决什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_24-为什么要新增composition-api-它能解决什么问题"}},[e._v("#")]),e._v(" 24. 为什么要新增Composition API，它能解决什么问题")]),e._v(" "),_("p",[e._v("Vue2.0中，随着功能的增加，组件变得越来越复杂，越来越难维护，而难以维护的根本原因是Vue的API设计迫使开发者使用watch，computed，methods选项组织代码，而不是实际的业务逻辑。")]),e._v(" "),_("p",[e._v("另外Vue2.0缺少一种较为简洁的低成本的机制来完成逻辑复用，虽然可以minxis完成逻辑复用，但是当mixin变多的时候，会使得难以找到对应的data、computed或者method来源于哪个mixin，使得类型推断难以进行。")]),e._v(" "),_("p",[e._v("所以Composition API的出现，主要是也是为了解决Option API带来的问题，第一个是代码组织问题，Compostion API可以让开发者根据业务逻辑组织自己的代码，让代码具备更好的可读性和可扩展性，也就是说当下一个开发者接触这一段不是他自己写的代码时，他可以更好的利用代码的组织反推出实际的业务逻辑，或者根据业务逻辑更好的理解代码。")]),e._v(" "),_("p",[e._v("第二个是实现代码的逻辑提取与复用，当然mixin也可以实现逻辑提取与复用，但是像前面所说的，多个mixin作用在同一个组件时，很难看出property是来源于哪个mixin，来源不清楚，另外，多个mixin的property存在变量命名冲突的风险。而Composition API刚好解决了这两个问题。")])])}),[],!1,null,null,null);v.default=a.exports}}]);
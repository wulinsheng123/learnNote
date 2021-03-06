import ToyVue from "./instance/instance.js";

// const helloWorld = {
//   data: {
//       count: 0,
//       items:[1,2,3,0,5],
//       flag: true
//   },
//   props:['message'],
//   template: `
//       <div>
//           array: {{items}}
//           <div v-if="flag">watch count as v-if flag</div>
//           <div v-for="item in items">
//             <p>{{item}}</p>
//           </div>
//           <button @click="addCount">addCount & clickTimes:{{count}}</button>
//           <div style="color: red">parent message: {{countMessage}}</div>
//           <slot name="head"></slot>
//           <slot></slot>
//       </div>
//   `,
//   watch:{
//     count: function (newMes, oldMes) {
//         this.flag = !this.flag
//     }
//   },
//   computed:{
//     countMessage: function () {
//       return this.message + this.count
//     }
//   },
//   methods:{
//       addCount(){
//         this.count += 1
//         this.$emit('select',this.count)
//         this.items.push(this.count)
//       }
//   }
// }

// new YourVue({
//   el: '#app',
// components:{ helloWorld },
//   data:{
//     message:'parent message',
//     html: '<p>p标签</p>'
//   },
//   template: `
//     <div>
//       <hello-world :message="message" @select="parentHandler">
//           <p slot="head">slot head</p>
//           <p>slot default</p>
//           <p>slot default2</p>
//           <p slot="foot">slot foot</p>
//       </hello-world>
//       <button @click="change">change parent message</button>
//       <input v-model="message"/>
//       <div v-text="html"></div>
//       <div v-html="html"></div>
//     </div>
//   `,
//   methods:{
//     change(){
//       this.message += 'change'
//     },
//     parentHandler(value){
//       console.log('parentHandler', value)
//     }
//   }
// })

new ToyVue({
  el: "#app",
  data: {
    count: 0,
    message: "message",
  },
  template: `
      <div>
          <div>{{count}}</div>
          <button @click="addCount">addCount</button>
          <h4>{{message}}</h4>
          <button @click="decCount">decCount</button>
      </div>
  `,
  methods: {
    addCount() {
      const count = this.count + 1;
      this.setState({
        count,
      });
    },
    decCount() {
      const count = this.count - 1;
      this.setState({
        count,
      });
    },
  },
});

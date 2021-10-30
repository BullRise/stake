(this.webpackJsonpApeLab_Staking=this.webpackJsonpApeLab_Staking||[]).push([[0],{214:function(e,t,n){},228:function(e,t){},230:function(e,t){},232:function(e,t){},236:function(e,t){},263:function(e,t){},265:function(e,t){},274:function(e,t){},276:function(e,t){},286:function(e,t){},288:function(e,t){},406:function(e,t){},408:function(e,t){},415:function(e,t){},416:function(e,t){},434:function(e,t){},507:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){},510:function(e,t,n){},511:function(e,t,n){},512:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var a=n(10),s=n.n(a),i=n(205),r=n.n(i),o=n(4),c=n.n(o),u=n(13),l=n(14),p=(n(214),n(22)),d=n.n(p),b="0xc658c0725a081Fc3571046De7208365a9A9C28a2",y=[{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amountSent",type:"uint256"}],name:"OnDistribute",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnReinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnStake",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnUnstake",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[],name:"distribute",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"staker",type:"address"}],name:"dividendsOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"profitPerShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_startTime",type:"uint256"}],name:"setStartTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"stake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"stakeValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"stakeValueAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"stakerPayouts",outputs:[{internalType:"int256",name:"",type:"int256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"startTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalDistributions",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalStaked",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalStakedAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalStakers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"unstake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],w="0x54283eb77CC33182c06B311248c48C73AdF4E2eF",m=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"ethAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"SwapedTokenForEth",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isSwapEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isTaxActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isTaxless",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minTokenBeforeSwap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"setMinTokenBeforeSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"}],name:"setPairAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_stakingPool",type:"address"}],name:"setStakingPool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_value",type:"bool"}],name:"setSwapEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_value",type:"bool"}],name:"setTaxActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_taxFee",type:"uint256"}],name:"setTaxFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"_value",type:"bool"}],name:"setTaxless",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakingPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFeeTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalEthDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],f=n(1);var h=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(null),o=Object(l.a)(r,2),p=(o[0],o[1],Object(a.useState)()),w=Object(l.a)(p,2),m=(w[0],w[1],Object(a.useState)(0)),h=Object(l.a)(m,2),j=(h[0],h[1],Object(a.useState)(0)),x=Object(l.a)(j,2),v=(x[0],x[1],function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,T();case 15:s=t.sent,i(s[0]),e=s[0],null,window.ethereum.on("accountsChanged",(function(t){i(t[0]),e=t[0],O(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),g(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}()),O=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.balanceOf(e).call();case 6:s=t.sent,console.log("accountDetails",s),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(),setInterval((function(){v()}),1e3)}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{class:"navigation-bar",children:[Object(f.jsx)("h1",{class:"heading-primary",children:"Ape Lab"}),Object(f.jsxs)("div",{class:"navigation-bar__wallet-box",children:[Object(f.jsx)("span",{className:"wallet0",class:"navigation-bar__wallet-box-text",children:Object(f.jsx)("i",{class:"fas fa-wallet"})}),Object(f.jsx)("span",{className:"wallet text-truncate",class:"navigation-bar__wallet-box-text--small",children:s})]})]})})};n(507),n(108);var j=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=(n[0],n[1]),i=Object(a.useState)(null),r=Object(l.a)(i,2),o=(r[0],r[1],Object(a.useState)()),p=Object(l.a)(o,2),h=(p[0],p[1],Object(a.useState)(0)),j=Object(l.a)(h,2),x=(j[0],j[1],Object(a.useState)(0)),v=Object(l.a)(x,2),O=v[0],T=v[1],g=Object(a.useState)(0),k=Object(l.a)(g,2),M=k[0],S=k[1],_=Object(a.useState)(0),C=Object(l.a)(_,2),A=C[0],E=C[1],N=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,F();case 15:i=t.sent,s(i[0]),e=i[0],null,window.ethereum.on("accountsChanged",(function(t){s(t[0]),e=t[0],D(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),P(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.stakeValue(e).call();case 6:return s=t.sent,console.log("stakeValue",s),i=n.utils.fromWei(s),T(i),t.next=12,a.methods.totalDistributions().call();case 12:return s=t.sent,console.log("totalDistributions",s),i=n.utils.fromWei(s),E(i),a=new n.eth.Contract(m,w),t.next=19,a.methods.balanceOf(e).call();case 19:s=t.sent,console.log("balanceOf",s),i=n.utils.fromWei(s),S(i),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(0),console.log("error",t.t0);case 28:case"end":return t.stop()}}),t,null,[[0,25]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){N(),setInterval((function(){N()}),1e3)}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{class:"main-boxes-container",children:[Object(f.jsxs)("div",{class:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Staked"}),Object(f.jsx)("h6",{class:"heading-6",children:O})]}),Object(f.jsxs)("div",{className:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Wallet"}),Object(f.jsx)("h6",{class:"heading-6",children:M})]}),Object(f.jsxs)("div",{className:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Total Distributed"}),Object(f.jsx)("h6",{class:"heading-6",children:A})]})]})})};n(508);var x=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"sidebar sidebar-res",children:[Object(f.jsxs)("div",{class:"sidebar__top",children:[Object(f.jsx)("img",{class:"sidebar__logo",src:"https://i.ibb.co/QpBJVr5/ape-lab-logo.png",alt:"Ape Lab"}),Object(f.jsx)("div",{className:"sidebar__menu",children:Object(f.jsxs)("a",{class:"sidebar__link",href:"http://",children:[Object(f.jsx)("i",{class:"fas fa-coins sidebar__link--icon"}),"Stake"]})})]}),Object(f.jsxs)("div",{className:"sidebar__social sidebar__social--desktop",children:[Object(f.jsx)("a",{class:"sidebar__social-link",href:"https://t.me/apelabofficial",children:Object(f.jsx)("i",{class:"fab fa-telegram-plane sidebar__social-link--icon"})}),Object(f.jsx)("a",{class:"sidebar__social-link",href:"https://twitter.com/ApelabOfficial",children:Object(f.jsx)("i",{class:"fab fa-twitter sidebar__social-link--icon"})})]})]})})};n(509);var v=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=(n[0],n[1]),i=Object(a.useState)(null),r=Object(l.a)(i,2),o=(r[0],r[1],Object(a.useState)()),p=Object(l.a)(o,2),h=(p[0],p[1],Object(a.useState)(0)),j=Object(l.a)(h,2),x=(j[0],j[1],Object(a.useState)(0)),v=Object(l.a)(x,2),O=v[0],T=v[1],g=Object(a.useState)(0),k=Object(l.a)(g,2),M=k[0],S=k[1],_=Object(a.useState)(0),C=Object(l.a)(_,2),A=C[0],E=C[1],N=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,F();case 15:i=t.sent,s(i[0]),e=i[0],null,window.ethereum.on("accountsChanged",(function(t){s(t[0]),e=t[0],D(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),P(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.totalStaked().call();case 6:return s=t.sent,console.log("accountDetails",s),i=n.utils.fromWei(s),S(i),t.next=12,a.methods.totalStakers().call();case 12:return s=t.sent,console.log("accountDetails",s),T(s),a=new n.eth.Contract(m,w),t.next=18,a.methods.totalSupply().call();case 18:s=t.sent,console.log("totalSupply",s),i=n.utils.fromWei(s),E(i),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.log("error",t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){N(),setInterval((function(){N()}),1e3)}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{class:"main-boxes-container",children:[Object(f.jsxs)("div",{class:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Total Stakers"}),Object(f.jsx)("h6",{class:"heading-6",children:O})]}),Object(f.jsxs)("div",{className:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Total Staked"}),Object(f.jsx)("h6",{class:"heading-6",children:M})]}),Object(f.jsxs)("div",{className:"main-box",children:[Object(f.jsx)("h4",{class:"heading-4",children:"Total Supply"}),Object(f.jsx)("h6",{class:"heading-6",children:A})]})]})})};n(510),n(511);var O=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(null),o=Object(l.a)(r,2),p=(o[0],o[1],Object(a.useState)()),h=Object(l.a)(p,2),j=(h[0],h[1],Object(a.useState)(0)),x=Object(l.a)(j,2),v=(x[0],x[1],Object(a.useState)(0)),O=Object(l.a)(v,2),T=O[0],g=O[1],k=Object(a.useState)(0),M=Object(l.a)(k,2),S=M[0],_=M[1],C=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,E();case 15:s=t.sent,i(s[0]),e=s[0],null,window.ethereum.on("accountsChanged",(function(t){i(t[0]),e=t[0],A(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),N(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.dividendsOf(e).call();case 6:return s=t.sent,console.log("stakeValue",s),_(s),t.next=11,a.methods.totalDistributions().call();case 11:return s=t.sent,console.log("totalDistributions",s),a=new n.eth.Contract(m,w),t.next=16,a.methods.balanceOf(e).call();case 16:s=t.sent,console.log("balanceOf",s),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log("error",t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=new t.eth.Contract(y,b),a=new t.eth.Contract(m,w),i=T.toString()+"000000000000000000",e.next=7,a.methods.approve(b,i).send({from:s});case 7:return e.next=9,n.methods.stake(i).send({from:s});case 9:r=e.sent,console.log("accountDetails",r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=T.toString()+"000000000000000000",a=new t.eth.Contract(y,b),e.next=6,a.methods.unstake(n).send({from:s});case 6:i=e.sent,console.log("accountDetails",i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=new t.eth.Contract(y,b),e.next=5,n.methods.withdraw(T).send({from:s});case 5:a=e.sent,console.log("accountDetails",a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C(),setInterval((function(){C()}),1e4)}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{class:"main-boxes-container--full-width",children:Object(f.jsxs)("div",{class:"main-box",children:[Object(f.jsxs)("div",{className:"withdraw__container",children:[Object(f.jsxs)("h5",{class:"heading-5",children:["Rewards: ",Object(f.jsxs)("span",{class:"heading-5--light",children:[S," BNB"]})]}),Object(f.jsx)("button",{class:"btns btns--primary",onClick:P,children:"Withdraw"})]}),Object(f.jsxs)("div",{className:"input-container",children:[Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("h5",{className:"heading-3",children:"There will come 2 Transactions after each other, please wait for both to confirm."}),Object(f.jsx)("input",{className:"input-field__input",type:"text",name:"",id:"",onChange:function(e){g(e.target.value)}})]}),Object(f.jsxs)("div",{className:"input__bottom",children:[Object(f.jsx)("button",{className:"btns btns--secondary",onClick:D,children:"APPROVE/STAKE"}),Object(f.jsx)("button",{className:"btns btns--secondary",onClick:F,children:"UNSTAKE"})]})]})]})}),Object(f.jsxs)("div",{className:"social-mobile",children:[Object(f.jsx)("a",{class:"social-mobile__social-link",href:"https://t.me/ApeLabOfficial",children:Object(f.jsx)("i",{class:"fab fa-telegram-plane social-mobile__social-link--icon"})}),Object(f.jsx)("a",{class:"social-mobile__social-link",href:"https://twitter.com/ApelabOfficial",children:Object(f.jsx)("i",{class:"fab fa-twitter social-mobile__social-link--icon"})})]})]})};n(512);var T=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{class:"main-wrapper",children:[Object(f.jsx)(x,{}),Object(f.jsxs)("div",{class:"main-section",children:[Object(f.jsx)(h,{}),Object(f.jsxs)("div",{class:"main-section-content",children:[Object(f.jsx)(j,{}),Object(f.jsx)(v,{}),Object(f.jsx)(O,{})]})]})]})})};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[513,1,2]]]);
//# sourceMappingURL=main.885d907e.chunk.js.map
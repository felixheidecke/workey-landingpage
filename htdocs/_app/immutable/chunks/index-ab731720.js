function T(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(q)}function I(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ot(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function L(t){return Object.keys(t).length===0}function ut(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,s){if(c){const l=B(n,e,i,s);t.p(l,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function dt(t){return t==null?"":t}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:K(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<s.length&&l[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(l[r],a)}}function Q(t,n){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function mt(){return v(" ")}function pt(){return v("")}function V(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function yt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:V(t,i,n[i])}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){Y(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(n))}function gt(t,n,e){return Z(t,n,e,U)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function xt(t){return tt(t," ")}function bt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function A(){if(!m)throw new Error("Function called outside component initialization");return m}function wt(t){A().$$.on_mount.push(t)}function Et(t){A().$$.after_update.push(t)}function jt(t,n){return A().$$.context.set(t,n),n}const d=[],M=[],b=[],O=[],D=Promise.resolve();let j=!1;function z(){j||(j=!0,D.then(F))}function kt(){return z(),D}function k(t){b.push(t)}const E=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),nt(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;O.length;)O.pop()();j=!1,E.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const $=new Set;let _;function vt(){_={r:0,c:[],p:_}}function At(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&($.delete(t),t.i(n))}function Nt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function St(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Ct(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||k(()=>{const r=s.map(q).filter(I);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(k)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Tt(t,n,e,i,c,s,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:T,not_equal:c,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,y,...N)=>{const S=N.length?N[0]:y;return u.ctx&&c(u.ctx[f],u.ctx[f]=S)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](S),a&&ct(t,f)),y}):[],u.update(),a=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const f=X(n.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),F()}h(r)}class qt{$destroy(){rt(this,1),this.$destroy=T}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!L(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{St as A,Ct as B,rt as C,H as D,kt as E,ut as F,ft as G,at as H,st as I,Q as J,_t as K,dt as L,yt as M,ot as N,qt as S,mt as a,ht as b,xt as c,At as d,pt as e,et as f,vt as g,R as h,Tt as i,jt as j,Et as k,U as l,gt as m,T as n,wt as o,X as p,V as q,$t as r,lt as s,Nt as t,v as u,tt as v,bt as w,Mt as x,Ot as y,it as z};

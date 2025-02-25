"use strict";var We=Object.create;var M=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Be=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty;var Ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ke=(e,t)=>{for(var n in t)M(e,n,{get:t[n],enumerable:!0})},te=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Oe(t))!Qe.call(e,o)&&o!==n&&M(e,o,{get:()=>t[o],enumerable:!(r=Me(t,o))||r.enumerable});return e};var c=(e,t,n)=>(n=e!=null?We(Be(e)):{},te(t||!e||!e.__esModule?M(n,"default",{value:e,enumerable:!0}):n,e)),Ze=e=>te(M({},"__esModule",{value:!0}),e);var i=Ue((yt,ae)=>{var y=ae.exports={},A,x;function z(){throw new Error("setTimeout has not been defined")}function q(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?A=setTimeout:A=z}catch{A=z}try{typeof clearTimeout=="function"?x=clearTimeout:x=q}catch{x=q}})();function ne(e){if(A===setTimeout)return setTimeout(e,0);if((A===z||!A)&&setTimeout)return A=setTimeout,setTimeout(e,0);try{return A(e,0)}catch{try{return A.call(null,e,0)}catch{return A.call(this,e,0)}}}function Fe(e){if(x===clearTimeout)return clearTimeout(e);if((x===q||!x)&&clearTimeout)return x=clearTimeout,clearTimeout(e);try{return x(e)}catch{try{return x.call(null,e)}catch{return x.call(this,e)}}}var P=[],N=!1,E,O=-1;function ze(){!N||!E||(N=!1,E.length?P=E.concat(P):O=-1,P.length&&re())}function re(){if(!N){var e=ne(ze);N=!0;for(var t=P.length;t;){for(E=P,P=[];++O<t;)E&&E[O].run();O=-1,t=P.length}E=null,N=!1,Fe(e)}}y.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];P.push(new oe(e,t)),P.length===1&&!N&&ne(re)};function oe(e,t){this.fun=e,this.array=t}oe.prototype.run=function(){this.fun.apply(null,this.array)};y.title="browser";y.browser=!0;y.env={};y.argv=[];y.version="";y.versions={};function b(){}y.on=b;y.addListener=b;y.once=b;y.off=b;y.removeListener=b;y.removeAllListeners=b;y.emit=b;y.prependListener=b;y.prependOnceListener=b;y.listeners=function(e){return[]};y.binding=function(e){throw new Error("process.binding is not supported")};y.cwd=function(){return"/"};y.chdir=function(e){throw new Error("process.chdir is not supported")};y.umask=function(){return 0}});var lt={};ke(lt,{default:()=>ct});module.exports=Ze(lt);var En=c(i(),1),Ge=require("buffer");var xt=c(i(),1);var gt=c(i(),1),d={module:"Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM",scheduler:"_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",mu:"fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",src:{asset:"XYz8buLR5LQdhOOzWuCt9kBjoXHMowouWpXcGm9wdEE",collection:"aHN0YxA7Th1OQdtgv0slWv9LMrvYukvNgWdkotJsML0",collectionActivity:"k8K8WIJb5kXOVvZRFXF5GIZW-7b2NtaTOd6G-E5MF0k",profile:"WBhJpPafkykqZZgTr7TAsz48RKG4vbOEAH4rZ3JxIQ8",zone:"M9G2B9Uvk8VK1pxloESeT4XScguRKSzLyd4as1HFOJ8"},collectionRegistry:"TFWDmf8a3_nw43GCm_CuYlYoylHAjCcFGbgHfDaGcsg",profileRegistry:"SNy4m-DrqxWl01YqGM4sxI8qCni-58re8uuJLvZPypY"},se={"application/json":{type:"application/json",serialize:e=>JSON.stringify(e)}},T={arweave:"arweave.net",goldsky:"arweave-search.goldsky.com"};var p={keys:{access:"Access-Fee",ans110:{title:"Title",description:"Description",topic:"Topic:*",type:"Type",implements:"Implements",license:"License"},assetType:"Asset-Type",banner:"Banner",bootloader:"Bootloader",bootloaderInit:"On-Boot",collectionId:"Collection-Id",collectionName:"Collection-Name",commericalUse:"Commercial-Use",contentType:"Content-Type",creator:"Creator",currency:"Currency",dataModelTraining:"Data-Model-Training",dataProtocol:"Data-Protocol",dateCreated:"Date-Created",derivations:"Derivations",description:"Description",displayName:"Display-Name",handle:"Handle",implements:"Implements",initialOwner:"Initial-Owner",license:"License",name:"Name",paymentAddress:"Payment-Address",paymentMode:"Payment-Mode",profileCreator:"Profile-Creator",profileIndex:"Profile-Index",protocolName:"Protocol-Name",renderWith:"Render-With",thumbnail:"Thumbnail",title:"Title",topic:"Topic",type:"Type",zoneType:"Zone-Type"},values:{document:"Document"}},ie={node1:"https://up.arweave.net",node2:"https://turbo.ardrive.io",batchSize:1,chunkSize:75e5,dispatchUploadSize:100*1024};var vt=c(i(),1);var Tt=c(i(),1);function R(e){return e?/^[a-z0-9_-]{43}$/i.test(e):!1}function B(e,t){for(let n=0;n<e.length;n++)if(e[n]&&e[n].name===t)return e[n].value;return null}function ce(e){let t=e.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);return t?t[1]:null}function le(e){return e.split(",")[1]}function pe(e){let t;if(Buffer.isBuffer(e))t=e.length;else if(typeof e=="string")t=Buffer.byteLength(e,"utf-8");else throw new Error("Input must be a string or a Buffer");return t}function J(e){let t;return t=e.replace(/\[|\]/g,""),`[[${t}]]`}function G(e){let t;return t=e.replace(/\[|\]/g,""),t}var g=(...e)=>{console.log("[@permaweb/libs]",...e)};function qe(e){return e.replace(/^[a-z]/,t=>t.toUpperCase())}function L(e){return Array.isArray(e)?e.map(L):e&&typeof e=="object"?Object.entries(e).reduce((t,[n,r])=>{let o=qe(n);return t[o]=R(r)?r:L(r),t},{}):e}function Je(e){return e.charAt(0).toLowerCase()+e.slice(1)}function D(e){return Array.isArray(e)?e.map(D):e&&typeof e=="object"?Object.entries(e).reduce((t,[n,r])=>{let o=Je(n);return t[o]=R(r)?r:D(r),t},{}):e}function w(e,t){let n=e.charAt(0).toUpperCase()+e.slice(1);return{name:`${p.keys.bootloader}-${n}`,value:t}}var je="https://arweave.net";function $(e){return`${je}/${e}`}var At=c(i(),1);var Ut=c(i(),1);var Wt=c(i(),1);var Et=c(i(),1);var j={p1:"P1",end:"END"},V={default:100};async function h(e){let t=e.paginator?e.paginator:V.default,n=[],r=0,o=null;if(e.ids&&!e.ids.length)return{data:n,count:r,nextCursor:o,previousCursor:null};try{let a=He(e),s=await Ye({gateway:e.gateway??T.goldsky,query:_e(a)});return s?.data?.transactions?.edges?.length?(n=[...s.data.transactions.edges],r=s.data.transactions.count??0,n.length<t||!s.data.transactions.pageInfo.hasNextPage?o=j.end:o=n[n.length-1].cursor,{data:n,count:r,nextCursor:o,previousCursor:null}):{data:n,count:r,nextCursor:o,previousCursor:null}}catch(a){return console.error(a),{data:n,count:r,nextCursor:o,previousCursor:null}}}async function ue(e,t){let n=1,r=await h(e);if(r&&r.data.length){let o=r.data;for(t&&t(`Count: ${r.count}`),t&&t(`Pages to fetch: ${Math.ceil(r.count/(e.paginator??V.default))}`),t&&t(`Page ${n} fetched`);r.nextCursor&&r.nextCursor!==j.end;)n+=1,t&&t(`Fetching page ${n}...`),r=await h({...e,cursor:r.nextCursor}),r&&r.data.length&&(o=o.concat(r.data));return t&&t("All pages fetched!"),o}else t&&t("No data found");return null}function _e(e){let t={query:`query { ${e} }`};return JSON.stringify(t)}function He(e){let t=e.paginator?e.paginator:V.default,n=e.ids?JSON.stringify(e.ids):null,r=null;e.minBlock!==void 0&&e.minBlock!==null&&(r={},r.min=e.minBlock);let o=r?JSON.stringify(r).replace(/"([^"]+)":/g,"$1:"):null,a=e.tags?JSON.stringify(e.tags).replace(/"(name)":/g,"$1:").replace(/"(values)":/g,"$1:").replace(/"match"/g,"match").replace(/"FUZZY_OR"/g,"FUZZY_OR"):null,s=e.owners?JSON.stringify(e.owners):null,u=e.recipients?JSON.stringify(e.recipients):null,l=e.cursor&&e.cursor!==j.end?`"${e.cursor}"`:null,m=`first: ${t}`,f="",k="data { size type } owner { address } block { height timestamp }",Z="",ee="";switch(e.gateway??T.goldsky){case T.arweave:break;case T.goldsky:l||(f="count"),u&&(ee=`recipients: ${u}`);break}let F=`
		transactions(
				ids: ${n},
				tags: ${a},
				${m}
				owners: ${s},
				${ee},
				block: ${o},
				after: ${l},
				${Z}
				
			){
			${f}
				pageInfo {
					hasNextPage
				}
				edges {
					cursor
					node {
						id
						tags {
							name 
							value 
						}
						${k}
					}
				}
		}`;return e.queryKey&&(F=`${e.queryKey}: ${F}`),F}async function Ye(e){try{return await(await fetch(`https://${e.gateway}/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:e.query})).json()}catch(t){throw t}}var Ke=T.goldsky,Xe=100;async function ye(e,t){let n=[{name:"Authority",value:d.mu}];t.tags&&t.tags.length>0&&t.tags.forEach(r=>n.push(r));try{let r=await e.ao.spawn({module:t.module,scheduler:t.scheduler,signer:e.signer,tags:n,data:t.data});return g(`Process ID: ${r}`),r}catch(r){throw new Error(r.message??"Error spawning process")}}function de(e){return async t=>await C(e,t)}async function C(e,t){try{let n=[{name:"Action",value:t.action}];t.tags&&n.push(...t.tags);let r=t.useRawData?t.data:JSON.stringify(t.data);return await e.ao.message({process:t.processId,signer:e.signer,tags:n,data:r})}catch(n){throw new Error(n)}}function ge(e){return async t=>await v(e,t)}async function v(e,t){try{let n=[{name:"Action",value:t.action}];t.tags&&n.push(...t.tags);let r;if(typeof t.data=="object")r=JSON.stringify(t.data||{});else if(typeof t.data=="string"){try{JSON.parse(t.data)}catch(a){throw console.error(a),new Error("Invalid JSON data")}r=t.data}let o=await e.ao.dryrun({process:t.processId,tags:n,data:r});if(o.Messages&&o.Messages.length){if(o.Messages[0].Data)return JSON.parse(o.Messages[0].Data);if(o.Messages[0].Tags)return o.Messages[0].Tags.reduce((a,s)=>(a[s.name]=s.value,a),{})}}catch(n){throw new Error(n.message??"Error dryrunning process")}}async function et(e,t){try{let{Messages:n}=await e.ao.result({message:t.messageId,process:t.processId});if(n&&n.length){let r={};return n.forEach(o=>{let a=B(o.Tags,"Action")||t.action,s=null,u=o.Data;if(u)try{s=JSON.parse(u)}catch{s=u}let l=B(o.Tags,"Status"),m=B(o.Tags,"Message");r[a]={id:t.messageId,status:l,message:m,data:s}}),r}else return null}catch(n){console.error(n)}}async function me(e,t){let n=null;if(t.evalSrc?n=t.evalSrc:t.evalTxId&&(n=await tt(t.evalTxId)),n)try{let r=await C(e,{processId:t.processId,action:"Eval",data:n,tags:t.evalTags||null,useRawData:!0});return g(`Eval: ${r}`),await et(e,{processId:t.processId,messageId:r,action:"Eval"})}catch(r){throw new Error(r.message??"Error sending process eval")}return null}function fe(e){return async(t,n)=>{try{let r={module:t.module||d.module,scheduler:t.scheduler||d.scheduler};t.data&&(r.data=t.data),t.tags&&(r.tags=t.tags),n&&n("Spawning process...");let o=await ye(e,r);if(n&&n("Retrieving process..."),await Te(o,n),t.evalTxId||t.evalSrc){n&&n("Process retrieved!"),n&&n("Sending eval...");try{await me(e,{processId:o,evalTxId:t.evalTxId||null,evalSrc:t.evalSrc||null,evalTags:t.evalTags})&&n&&n("Eval complete")}catch(a){throw new Error(a.message??"Error creating process")}}return o}catch(r){throw new Error(r.message??"Error creating process")}}}async function S(e,t,n){try{let r={module:t.module||d.module,scheduler:t.scheduler||d.scheduler};t.data&&(r.data=t.data),t.tags&&(r.tags=t.tags),n&&n("Spawning process...");let o=await ye(e,r);if(n&&n("Retrieving process..."),await Te(o,n),t.evalTxId||t.evalSrc){n&&n("Process retrieved!"),n&&n("Sending eval...");try{await me(e,{processId:o,evalTxId:t.evalTxId||null,evalSrc:t.evalSrc||null,evalTags:t.evalTags})&&n&&n("Eval complete")}catch(a){throw new Error(a.message??"Error creating process")}}return o}catch(r){throw new Error(r.message??"Error creating process")}}async function Te(e,t){let n=0;for(;n<Xe;){await new Promise(o=>setTimeout(o,2e3));let r=await h({gateway:Ke,ids:[e]});if(r?.data?.length){let o=r.data[0].node.id;return g(`Process found: ${o} (Try ${n+1})`),o}else g(`Process not found: ${e} (Try ${n+1})`),n++}throw new Error("Process not found, please try again")}async function tt(e){try{return await(await fetch($(e))).text()}catch(t){throw new Error(t)}}var Qt=c(i(),1);function he(e){return async t=>{if(R(t))return t;if(!e.arweave)throw new Error("Must initialize with Arweave in order to create transactions");try{return await we(e,{data:t})}catch(n){throw new Error(n.message??"Error resolving transaction")}}}async function I(e,t){if(R(t))return t;if(!e.arweave)throw new Error("Must initialize with Arweave in order to create transactions");try{return await we(e,{data:t})}catch(n){throw new Error(n.message??"Error resolving transaction")}}async function we(e,t){let n=null,r=null;try{typeof t.data=="string"&&t.data.startsWith("data:")&&(n=Buffer.from(le(t.data),"base64"),r=ce(t.data))}catch(o){throw new Error(o)}if(n&&r){let o=pe(n);if(g(`Content upload size: ${o}`),o<Number(ie.dispatchUploadSize)){let a=await e.arweave.createTransaction({data:n},"use_wallet");return a.addTag(p.keys.contentType,r),t.tags&&t.tags.length>0&&t.tags.forEach(u=>a.addTag(u.name,u.value)),(await global.window.arweaveWallet.dispatch(a)).id}else throw new Error("Data exceeds max upload limit")}else throw new Error("Error preparing transaction data")}var Dn=c(i(),1);var _t=c(i(),1);function Q(e){return async(t,n)=>{let r=ot(t);if(r)throw new Error(r);let o=se[t.contentType]?.serialize(t.data)??t.data,a=rt(t);try{return await S(e,{tags:a,data:o},n?u=>n(u):void 0)}catch(s){throw new Error(s.message??"Error creating asset")}}}async function _(e,t,n){try{let r=D(await v(e,{processId:t,action:"Info"}));if(n?.useGateway){let o=await h({gateway:T.goldsky,ids:[t],tags:null,owners:null,cursor:null});return{...o?.data?.[0]?U(o.data[0]):{},...r}}return{id:t,...r}}catch(r){throw new Error(r.message||"Error fetching atomic asset")}}function ve(e){return async(t,n)=>await _(e,t,n)}async function Ae(e){try{let t=await h({gateway:T.arweave,ids:e??null,tags:null,owners:null,cursor:null});return t&&t.data.length?t.data.map(n=>U(n)):null}catch(t){throw new Error(t)}}function U(e){let t={id:e.node.id,owner:e.node.owner.address};for(let n of e.node.tags){let r=n.name,a=(r.startsWith(`${p.keys.bootloader}-`)?r.slice(`${p.keys.bootloader}-`.length):r).split("-").map((u,l)=>l===0?u.toLowerCase():u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()).join(""),s;try{s=JSON.parse(n.value)}catch{s=n.value.toString()}t[a]=s}return t}function rt(e){let t=[{name:p.keys.bootloaderInit,value:e.src??d.src.asset},{name:p.keys.creator,value:e.creator},{name:p.keys.assetType,value:e.assetType},{name:p.keys.contentType,value:e.contentType},{name:p.keys.implements,value:"ANS-110"},{name:p.keys.dateCreated,value:new Date().getTime().toString()},w("Name",e.name),w("Description",e.description),w("Topics",JSON.stringify(e.topics)),w("Ticker","ATOMIC"),w("Denomination",e.denomination?.toString()??"1"),w("TotalSupply",e.supply?.toString()??"1"),w("Transferable",e.transferable?.toString()??"true"),w("Creator",e.creator)];if(e.metadata)for(let n in e.metadata)t.push(w(L(n),e.metadata[n].toString()));return e.tags&&e.tags.forEach(n=>t.push(n)),t}function ot(e){if(typeof e!="object"||e===null)return"The provided arguments are invalid or empty.";let t=["name","description","topics","creator","data","contentType","assetType"];for(let n of t)if(!(n in e))return`Missing field '${n}'`;return typeof e.name!="string"||e.name.trim()===""?"Name is required":typeof e.description!="string"?"The description must be a valid string":!Array.isArray(e.topics)||e.topics.length===0?"Topics are required":typeof e.creator!="string"||e.creator.trim()===""?"Creator is required":e.data===void 0||e.data===null?"Data field is required":typeof e.contentType!="string"||e.contentType.trim()===""?"Content type must be a non-empty string":typeof e.assetType!="string"||e.assetType.trim()===""?"Type must be a non-empty string":"supply"in e&&(typeof e.supply!="number"||e.supply<=0)?"Supply must be a positive number":"denomination"in e&&(typeof e.denomination!="number"||e.denomination<=0)?"Denomination must be a positive number":"transferable"in e&&typeof e.transferable!="boolean"?"Transferable must be a boolean value":"metadata"in e&&typeof e.metadata!="object"?"Metadata must be an object":"tags"in e&&(!Array.isArray(e.tags)||e.tags.some(n=>typeof n!="object"))?"Tags must be an array of objects":"src"in e&&typeof e.src!="string"?"Source must be a valid string":null}var nn=c(i(),1);var at="eXCtpVbcd_jZ0dmU2PZ8focaKxBGECBQ8wMib7sIVPo",W="lJovHqM9hwNjHV5JoY9NGWtt0WD-5D4gOqNL2VWW5jk";function xe(e){return async(t,n)=>{if(!e.signer)throw new Error("No signer provided");let r=new Date().getTime().toString(),o=[{name:p.keys.contentType,value:"application/json"},{name:p.keys.creator,value:t.creator},{name:p.keys.ans110.title,value:G(t.title)},{name:p.keys.ans110.description,value:G(t.description)},{name:p.keys.ans110.type,value:p.values.document},{name:p.keys.dateCreated,value:r},{name:p.keys.name,value:G(t.title)},{name:"Action",value:"Add-Collection"}],a=null,s=null;try{a=t.banner?await I(e,t.thumbnail):W,s=t.banner?await I(e,t.banner):at,t.thumbnail&&o.push({name:p.keys.thumbnail,value:a}),t.banner&&o.push({name:p.keys.banner,value:s})}catch(m){console.error(m)}let u=await fetch($(d.src.collection));if(!u.ok)throw new Error("Unable to fetch process src");let l=await u.text();l=l.replace(/'<NAME>'/g,J(t.title)),l=l.replace(/'<DESCRIPTION>'/g,J(t.description)),l=l.replace(/<CREATOR>/g,t.creator),l=l.replace(/<THUMBNAIL>/g,a||W),l=l.replace(/<BANNER>/g,s||W),l=l.replace(/<DATECREATED>/g,r),l=l.replace(/<LASTUPDATE>/g,r);try{let m=await S(e,{tags:o},n?f=>n(f):void 0);if(g("Sending eval message to collection..."),n&&n("Sending eval message to collection..."),await e.ao.message({process:m,signer:e.signer,tags:[{name:"Action",value:"Eval"}],data:l}),!t.skipRegistry){g("Sending collection to registry..."),n&&n("Sending collection to registry...");let f=[{name:"Action",value:"Add-Collection"},{name:"CollectionId",value:m},{name:"Name",value:G(t.title)},{name:"Creator",value:t.creator},{name:"DateCreated",value:r}];s&&f.push({name:"Banner",value:s}),a&&f.push({name:"Thumbnail",value:a}),await e.ao.message({process:d.collectionRegistry,signer:e.signer,tags:f})}if(!t.skipActivity){g("Creating collection activity process..."),n&&n("Creating collection activity process...");let f=[{name:"CollectionId",value:m},{name:"DateCreated",value:r},{name:"On-Boot",value:d.src.collectionActivity}],k=await S(e,{tags:f},n?Z=>n(Z):void 0);g("Adding activity to collection process..."),n&&n("Adding activity to collection process..."),await e.ao.message({process:m,signer:e.signer,tags:[{name:"Action",value:"Eval"}],data:`ActivityProcess = '${k}'`})}return m}catch(m){throw new Error(m.message??"Error creating collection")}}}function De(e){return async t=>await C(e,{processId:t.creator,action:"Run-Action",tags:[{name:"ForwardTo",value:t.collectionId},{name:"ForwardAction",value:"Update-Assets"}],data:{Target:t.collectionId,Action:"Update-Assets",Input:JSON.stringify({AssetIds:t.assetIds,UpdateType:t.updateType})}})}function Ce(e){return async t=>{let n=await v(e,{processId:t,action:"Info"});return{...{id:t,title:n.Name,description:n.Description,creator:n.Creator,dateCreated:n.DateCreated,thumbnail:n.Thumbnail??W,banner:n.Banner??W},assetIds:n.Assets}}}function Pe(e){return async t=>{let n=t.creator?"Get-Collections-By-User":"Get-Collections",r=await v(e,{processId:d.collectionRegistry,action:n,tags:t.creator?[{name:"Creator",value:t.creator}]:null});return r&&r.Collections&&r.Collections.length?r.Collections.map(a=>({id:a.Id,title:a.Name.replace(/\[|\]/g,""),description:a.Description,creator:a.Creator,dateCreated:a.DateCreated,banner:a.Banner,thumbnail:a.Thumbnail})):null}}var ln=c(i(),1);function be(e){let t=Q(e);return async(n,r)=>{let o=n.tags?n.tags:[];o.push({name:"Data-Source",value:n.parentId}),o.push({name:"Root-Source",value:n.rootId??n.parentId});let a={name:`Comment on ${n.parentId}`,description:`Comment on ${n.parentId}`,topics:["comment"],creator:n.creator,data:n.content,contentType:"text/plain",assetType:"comment",tags:o};return t(a,r)}}function Se(e){return async t=>{try{let n=await _(e,t,{useGateway:!0}),r=n?.dataSource,o=n?.rootSource;if(!r||!o)throw new Error("dataSource and rootSource must be present on a comment");return{content:await Ee(t),parentId:r,rootId:o}}catch(n){throw new Error(n.message??"Error getting comment")}}}function Ie(e){return async t=>{if(!t.parentId&&!t.rootId)throw new Error("Must provide either parentId or rootId");let n=[];t.parentId&&n.push({name:"Data-Source",values:[t.parentId??""]}),t.rootId&&n.push({name:"Root-Source",values:[t.rootId??""]});let r=await h({gateway:T.goldsky,ids:null,tags:n,owners:null,cursor:null}),o=[];r&&r.data.length&&(o=r.data.map(s=>U(s)));let a=[];for(let s of o){let u=s?.dataSource,l=s?.rootSource;if(!u||!l)throw new Error("dataSource and rootSource must be present on a comment");a.push({id:s.id,content:await Ee(s.id),parentId:u,rootId:l})}return a}}async function Ee(e){try{return await(await fetch($(e))).text()}catch(t){throw new Error(t.message??"Error getting comment data")}}var xn=c(i(),1);var gn=c(i(),1);function H(e){return async(t,n)=>{try{let r=[{name:p.keys.bootloaderInit,value:d.src.zone}];return t.tags&&t.tags.length&&t.tags.forEach(a=>r.push(a)),await S(e,{tags:r},n?a=>n(a):void 0)}catch(r){throw new Error(r.message??"Error creating zone")}}}function Y(e){return async(t,n)=>{try{let r=Object.entries(t).map(([a,s])=>({key:a,value:s}));return await C(e,{processId:n,action:"Zone-Update",data:r})}catch(r){throw new Error(r)}}}function Ne(e){return async(t,n)=>{try{return await C(e,{processId:n,action:"Zone-Append",tags:[{name:"Path",value:t.path}],data:t.data})}catch(r){throw new Error(r)}}}function K(e){return async t=>{try{let n=await v(e,{processId:t,action:"Info"});return D(n)}catch(n){throw new Error(n)}}}function Le(e){return async(t,n)=>{try{if(!e.signer)throw new Error("No signer provided");let o=[{name:"Date-Created",value:new Date().getTime().toString()},{name:"Action",value:"Create-Profile"}],a=null,s=null;try{t.thumbnail&&(a=await I(e,t.thumbnail)),t.banner&&(s=await I(e,t.banner))}catch(f){console.error(f)}let u=await S(e,{tags:o,evalTxId:d.src.profile},f=>g(f)),l={UserName:t.userName,DisplayName:t.displayName,Description:t.description};a&&(l.ProfileImage=a),s&&(l.CoverImage=s),g("Updating profile..."),n&&n("Updating profile...");let m=await C(e,{processId:u,action:"Update-Profile",data:l});return g(`Profile update: ${m}`),u}catch(r){throw new Error(r.message??"Error creating profile")}}}function Re(e){return async(t,n,r)=>{if(n){let o={UserName:t.userName,DisplayName:t.displayName,Description:t.description};if(t.thumbnail)try{o.Thumbnail=await I(e,t.thumbnail)}catch(a){r&&r(`Failed to resolve thumbnail: ${a.message}`)}if(t.banner)try{o.Banner=await I(e,t.banner)}catch(a){r&&r(`Failed to resolve banner: ${a.message}`)}try{g("Updating profile..."),r&&r("Updating profile...");let a=await C(e,{processId:n,action:"Update-Profile",data:o});return g(`Profile update: ${a}`),a}catch(a){throw new Error(a.message??"Error updating profile")}}else throw new Error("No profile provided")}}function X(e){return async t=>{try{let n=await v(e,{processId:t,action:"Info"}),{Profile:r={},...o}=n,a={...o,...r};return{id:t,...D(a)}}catch(n){throw new Error(n.message??"Error fetching profile")}}}function $e(e){let t=X(e);return async n=>{try{let r=await v(e,{processId:d.profileRegistry,action:"Get-Profiles-By-Delegate",data:{Address:n}}),o;if(r&&r.length>0&&r[0].ProfileId)return o=r[0].ProfileId,await t(o)}catch(r){throw new Error(r.message??"Error fetching profile")}}}globalThis.Buffer||(globalThis.Buffer=Ge.Buffer);function it(e){return{createZone:H(e),updateZone:Y(e),addToZone:Ne(e),getZone:K(e),createProfile:Le(e),updateProfile:Re(e),getProfileById:X(e),getProfileByWalletAddress:$e(e),createAtomicAsset:Q(e),getAtomicAsset:ve(e),getAtomicAssets:Ae,createComment:be(e),getComment:Se(e),getComments:Ie(e),createCollection:xe(e),updateCollectionAssets:De(e),getCollection:Ce(e),getCollections:Pe(e),resolveTransaction:he(e),getGQLData:h,getAggregatedGQLData:ue,createProcess:fe(e),readProcess:ge(e),sendMessage:de(e),mapFromProcessCase:D,mapToProcessCase:L}}var ct={init:it};
//# sourceMappingURL=index.cjs.map

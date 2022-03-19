(()=>{"use strict";var t={885:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getIframeSrcFromScriptAttributes=e.setIframeSrcFromScriptAttributes=e.affiliateScript=e.affiliateScriptAttributes=e.getIframe=e.IframeHashPath=e.baseURL=e.allScriptAttributes=e.AlephScriptId=e.AlephIframeId=e.silence=void 0;const r=n(681),o=n(572);function i(t){const e=document.getElementById(t);if(!e)throw new Error(`No Iframe found with Id: ${t}`);return e}function c(){return(0,o.getElementAttributes)(e.affiliateScript,e.allScriptAttributes)}function a(){return t=c(),(0,o.urlWithQueryData)(e.baseURL,t)+e.IframeHashPath;var t}e.silence=!0,e.AlephIframeId="AlephIframe",e.AlephScriptId="AlephLoader",e.allScriptAttributes=["chainId","address","decimals","symbol","name","fees","logo","slippage"],e.baseURL=["","localhost:8080"].includes(window.location.host)?"http://localhost:8080":"https://alephdao.com/",e.IframeHashPath="#/AlephSwap",e.getIframe=i,e.affiliateScriptAttributes=c,e.affiliateScript=document.getElementById(e.AlephScriptId),e.setIframeSrcFromScriptAttributes=function(){null!==e.silence&&void 0!==e.silence?e.silence:(0,r.CL)("Updating Iframe from Script element attributes");const t=i(e.AlephIframeId);t.src=a(),(0,r.CL)(`New Iframe URL : ${t.src}`)},e.getIframeSrcFromScriptAttributes=a},877:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.copyToClipboard=void 0,e.copyToClipboard=function(t){navigator.clipboard?navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(t){console.error("Async: Could not copy text: ",t)})):function(t){const e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{const t=document.execCommand("copy")?"success":"unsuccessful";console.log("Fallback: Copying text command was "+t)}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}(t)}},572:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getURLParam=e.hasURLParam=e.allURLParams=e.urlWithQueryData=e.getElementAttributes=e.addElementAfter=e.setMultipleAttributes=e.getElementId=e.getElementHtml=void 0;const r=n(681);function o(t,e){for(const n in e)void 0!==e[n]&&t.setAttribute(n,e[n])}function i(){let t=window.location.search;if(""===t){const e=window.location.hash;""!==e&&-1!==e.indexOf("?")&&(r.debug&&(0,r.CL)("Found affiliate in hashed URL"),t=e.substring(e.indexOf("?")))}return new URLSearchParams(t)}e.getElementHtml=function(t){const e=document.createElement("div");e.appendChild(t.cloneNode(!0));const n=e.innerHTML;return e.remove(),n},e.getElementId=function(t){const e=t.id;return"string"==typeof e?e:null},e.setMultipleAttributes=o,e.addElementAfter=function(t,e,n,r){const i=document.createElement(t);return null!=e&&o(i,e),null!=n&&(i.innerHTML=n),function(t,e){e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling)}(i,r),i},e.getElementAttributes=function(t,e){const n={};return e.forEach((function(e){const r=t.getAttribute(e);null!==r&&(n[e]=r)})),n},e.urlWithQueryData=function(t,e){return t+"?"+function(t){const e=[];for(const n in t)e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}(e)},e.allURLParams=i,e.hasURLParam=function(t){return i().has(t)},e.getURLParam=function(t){return i().get(t)}},163:(t,e,n)=>{e.A=void 0;const r=n(681),o=n(877),i=n(572),c=n(885),a="AlephWebflow",l="aleph_create",s="aleph_copy";e.A=document.getElementById(a);const u=["aleph_symbol","aleph_chainId","aleph_logo","aleph_address"],d=[l,s].concat(u);function f(t,e){const n=document.getElementById(t);if(!n)throw new Error(`setButtonOnClick: Button with id "${t}" not found`);n.onclick=e}function p(t,e){const n=(0,c.affiliateScriptAttributes)();(0,r.CD)({attributes:n});const o=function(t){const e=new RegExp("^aleph_","g");return t.replace(e,"")}(e);if((0,r.CD)({attributeName:o}),!c.allScriptAttributes.includes(o))throw new Error(`Attribute not in allScriptAttributes : ${o}`);if(!n.hasOwnProperty(o))throw new Error(`Attribute did not have name : ${o}`);n[o],c.affiliateScript.setAttribute(o,String(t)),(0,c.setIframeSrcFromScriptAttributes)()}let m=!1;document.hasOwnProperty("currentScript")?((0,r.CW)("Did not have property currentScript, probably IE, loading"),m=!0):document.currentScript&&(0,i.getElementId)(document.currentScript)===a?m=!0:(0,r.CW)("Script not loaded : AlephWebflow"),m&&window.addEventListener("load",(t=>{(0,r.CL)("AlephWebflow: script loaded"),(0,r.checkAllElementsPresent)(d,!1),u.forEach((t=>{(0,r.CL)(`Setting action for input  ${t}`);try{!function(t,e,n){const r=document.getElementById(t);if(!r)throw new Error(`setInputOnInput: Button with id "${t}" not found`);r.oninput=0===e?n(r.value,t):function(){!function(t,e){let n;return function(){clearTimeout(n),n=setTimeout(t,e)}}((function(){n(r.value,t)}),e)()}}(t,425,p)}catch(t){(0,r.CW)(t)}})),f(l,(()=>(0,c.setIframeSrcFromScriptAttributes)())),f(s,(()=>(0,o.copyToClipboard)((0,i.getElementHtml)(c.affiliateScript))))})),(0,r.CL)("Webflow: 0.1.7")},681:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.checkAllElementsPresent=e.isValidETHAddress=e.CD=e.debug=e.CW=e.CE=e.CL=void 0,e.CL=console.log,e.CE=console.error,e.CW=console.warn,e.debug=!0,e.CD=function(t,n){if("object"!=typeof t)throw new Error("DV: does not work for individual vars, instead pass them like {a:a}.");void 0===n&&(n=e.CL);for(const n in t){let r=`(${typeof t[n]}):`;"object"==typeof t[n]&&(r+="\n"),Array.isArray(t[n])&&(r=`(array ${t[n].length}):\n`),(0,e.CL)(` - ${n} ${r}`,t[n])}},e.isValidETHAddress=function(t){return"string"==typeof t&&""!==t&&!!t.match(/^0x[a-fA-F0-9]{40}$/)},e.checkAllElementsPresent=function(t,n){t.forEach((t=>{if(!document.getElementById(t)){const r=`checkAllElementsPresent: HTML element with id "${t}" not found`;if(!0===n)throw new Error(r);(0,e.CW)(r)}}))}}},e={};!function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(163)})();
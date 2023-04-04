/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
const t=document.querySelectorAll('[data-list="make-list"]');document.addEventListener("click",(t=>{const e=t.target.closest("[data-toggle]");e?(e.hasAttribute("data-state","active")?e.removeAttribute("data-state"):e.setAttribute("data-state","active"),t.stopPropagation()):document.querySelectorAll("[data-toggle]").forEach((e=>{(t.target!==e&&e.matches('[data-toggle~="pop"]')||e.matches('[data-toggle~="tooltip"]'))&&e.removeAttribute("data-state")}))})),t.forEach((t=>{const e=[],a=t.querySelector('[data-list="todo-list"]'),o=t.querySelector('[data-button="add-item"]'),l=t.querySelector("input");o.addEventListener("click",(()=>{e.push(l.value),l.value="",c()}));const c=()=>{a.innerHTML="";for(let t=0;t<e.length;t++){let o=document.createElement("li");o.appendChild(document.createTextNode(e[t]));let l=document.createElement("button");l.innerHTML="Delete",l.onclick=function(){var a;a=t,e.splice(a,1),c()},o.appendChild(l),a.appendChild(o)}}}));
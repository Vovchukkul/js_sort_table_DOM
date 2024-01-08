var e=document.querySelector("table"),t=e.rows[0],r=Array.from(e.rows).slice(1,13);t.addEventListener("click",function(t){var a=t.target.closest("th");if(a){var l=a.cellIndex;r.sort(function(e,t){var r,a,c=e.cells[l].textContent.trim(),o=t.cells[l].textContent.trim();return(2===l?(r=parseFloat(c),a=parseFloat(o)):3===l&&(r=c.slice(1).replace(",",""),a=o.slice(1).replace(",","")),isNaN(r)||isNaN(a))?c.localeCompare(o):r-a}),r.forEach(function(t){return e.tBodies[0].appendChild(t)})}});//# sourceMappingURL=index.ba48d0dd.js.map

//# sourceMappingURL=index.ba48d0dd.js.map

// this is poorly written
setTimeout((function () {var a = document.createElement("iframe"); body.style.height = "100%"; body.style.margin = "0px"; body.style.padding = "0px"; body.style.border = "none"; a.style.width = "100%"; a.style.height = "100%"; a.style.border = "none"; a.style.margin = "0px"; a.style.padding = "0px"; a.style.display = "block"; a.style.overflowX = "hidden"; a.src = prompt("What URL do you want to unblock?"); document.body.appendChild(a);}), 5000)

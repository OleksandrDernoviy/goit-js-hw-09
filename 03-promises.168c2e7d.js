!function(){function e(e,t){var n={position:e,delay:t},o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e(n):r(n)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.currentTarget.delay.value),o=Number(t.currentTarget.step.value),r=Number(t.currentTarget.amount.value),c=1;c<=r;c+=1)e(c,n).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),n+=o;t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.168c2e7d.js.map

var link = index.querySelector(".connection-form");
			var popup = index.querySelector(".write-us");
			var close = popup.querySelector(".write-us-close");
			var login = popup.querySelector("[name=name]");
			var form = popup.querySelector("form");
			var mail = popup.querySelector("[name=mail]");
			var sms = popup.querySelector("[name=discrabe]");
			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("write-us-show");
				login.focus();
			});
			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("write-us-show");
				
			});
			form.addEventListener("submit", function(event) {
				if (!login.value || !mail.value || !sms.value) {
					event.preventDefault();
				}
			});
			var link = document.querySelectorAll(".buy");
			var popup = document.querySelector(".basket");
			var close = popup.querySelector(".basket-close");
			for (var i=0; i<link.length;i++) {
				link[i].addEventListener("click", function(event) {
					event.preventDefault();
					popup.classList.add("basket-show");
				});
			};
			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("basket-show");
			});
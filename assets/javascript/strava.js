$(document).ready(() => {
	let y = $(this).scrollTop();
		if (y === 0 ) {
			$('.side-nav, .home').hide();
		}
	// Search bar area
	$('.search-bar').on('submit', function(e){
		e.preventDefault()

		//replace search opitons with a data dump of objects with various keywords that point to a place on the web OR on my portfolio
		//==========================================
				/* code here */
		// -------------------------------------------
		let searchOptions = ['work-section', 'blog-section', 'contact-section', ' result 4', 'result 5', 'result 6', 'result 7'];
		let results = [];

		let input = $('.main-input').val()
		 if (input){
			for(let i = 0; i < 6; i++){
				let option = $(`<div>`)
				
				option.html(`<a href='#' class='h6 text-light'>${searchOptions[i]}</a> - <span class='font-italic'>Description</span>`)

				$(".search-return").append(option)

			}
		 }
		results.push(input);
		$('.main-input').val('');
	})

	// Add smooth scrolling to all links
	$(".scroll").on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function () {
				window.location.hash = hash;
			});
		}
	});

	// show side nav afterscrolled past main nav
	$(document).scroll(function() {
		let y = $(this).scrollTop();
		if (y > 505) {
		  $('.side-nav, .home').fadeIn();
		} else {
		  $('.side-nav, .home').fadeOut();
		}
	  });

	// Blogger API grab
	let queryUrl = `https://www.googleapis.com/blogger/v3/blogs/3943554857418853370/posts?key=AIzaSyA9RAPlHjpSqJPYQx5z80rBVNWaRK4M3us`

	function getBlogPosts() {
		let posts = [];
		
		$.ajax({
			url: queryUrl,
			method: 'GET'
		}).then(res => {
			for (let i = 0; i < 4; i++) {
				
				posts.push(res.items[i])
				let pubDate = moment(posts[i].published).format("MMM Do YYYY");
				let blogCard = $('<div class="card p-2 mb-3 rounded-0" id="blog-card">')
				blogCard.html(`
                <h5 class="text-center" id="blog-title"><a class="text-dark" href="${posts[i].url}">${posts[i].title}</a></h5>
                <h6 class="text-center"><small>Written by <span class='font-weight-bold'>${posts[i].author.displayName}</span> <span class='text-secondary font-italic'>on ${pubDate}</span></small></h6>
                <p id="blog-content">${posts[i].content}</p>
                </div>`
				);

				$('.blog-posts').append(blogCard);
				console.log(posts[i])
			};
		})
	}
	getBlogPosts();
})
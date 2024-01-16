$(document).ready(() => {
	let y = $(this).scrollTop();
	if (y === 0) {
		$('.side-nav, .home').hide();
	}

	// Smooth scrolling
	$(".scroll").on('click', function (event) {
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

	// Show side nav on scroll
	$(document).scroll(function () {
		let y = $(this).scrollTop();
		if (y > 200) {
			$('.side-nav, .home').fadeIn();
		} else {
			$('.side-nav, .home').fadeOut();
		}
	});

	function getBlogPosts() {
		let queryUrl = `https://www.googleapis.com/blogger/v3/blogs/3943554857418853370/posts?key=AIzaSyA9RAPlHjpSqJPYQx5z80rBVNWaRK4M3us`
		let posts = [];

		$.ajax({
			url: queryUrl,
			method: 'GET'
		}).then(res => {
			$('.bcount').append(res.items.length);
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
			};
		})
	}
	getBlogPosts();
})
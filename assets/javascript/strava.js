$(document).ready(() => {
	// Add smooth scrolling to all links
	$(".scroll").on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}
	});

	// Blogger grab
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
				let blogCard = $('<div class="card p-2" id="blog-card">')
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
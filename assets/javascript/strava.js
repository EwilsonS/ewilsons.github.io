$(document).ready(() => {
	let y = $(this).scrollTop();
	if (y === 0) {
		$('.side-nav, .home').hide();
	}

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
	
	// Search bar area
	$('.search-bar').on('submit', function (e) {
		e.preventDefault()
		// Clear results pane before new search
		$('.search-return').empty();

		// Constructor to create new serch index 
		function IndexedItem(keyword, link, description, metaArr) {
			this.keyword = keyword;
			this.link = link;
			this.description = description
			this.metaArr = metaArr;
		}

		let allIndexed = [];
		let searched = [];

		allIndexed.resume = new IndexedItem('resume', 'https://drive.google.com/file/d/1RfZFrvjRWxgDYelFOrw_sL7sy4TmQrbd/view', 'View resume on Google Docs', ['','resume', 'work', 'history', 'experience', 'contact']);
		allIndexed.projects = new IndexedItem('projects', 'https://ewilsons.github.io/#works-section', 'Projects listed on this site', ['react', 'projects', 'php', 'ajax', 'node', 'javascript']);
		allIndexed.blog = new IndexedItem('blog', '#blog-section', "Evan's Blog", ['blog', 'write', 'post', 'blogger', 'article', 'user', 'auth', 'coding', 'micro', 'delight', 'git']);
		allIndexed.github = new IndexedItem('github', 'https://github.com/EwilsonS', 'View Evan\'s github profile', ['github', 'javascript', 'react', 'php', 'handlebar', 'mvc'] )

		// Store seach input to variable 'input'
		let input = ($('.main-input').val().toLowerCase()).trim();

		for (let i = 0; i < (Object.keys(allIndexed).length < 6 ? Object.keys(allIndexed).length : 6); i++) {

			// Iterate through allIndexed array store to variabe 'data'
			let data = Object.values(allIndexed)[i];

			// Setup for loop to iterte through metaArr within data 
			for (let j = 0; j < data.metaArr.length; j++) {
				if (input === data.metaArr[j]) {

					// Objct.values digs into the allIndexed item and returns one obeject and pushes it into the searched array
					searched.push(Object.values(allIndexed)[i])
					
					let google = `https://www.google.com/search?safe=off&q=${input}&spell=1&sa=X&ved=0ahUKEwinv-OntNjfAhUDLK0KHVlaBhcQBQgrKAA&biw=1600&bih=758`;

					let option = $(`<div>`)

					option.html(`<a href='${searched[0].link}' target='_blank' class='h6 text-white'>${searched[0].keyword}</a> - <span class='font-italic'>${searched[0].description}</span>`) ? option.html(`<a href='${searched[0].link}' target='_blank' class='h6 text-white'>${searched[0].keyword}</a> - <span class='font-italic'>${searched[0].description}</span>`) : $(".search-return").html(`<a href='${google}' target='_blank' class='h6 text-white'>search google for ${input}</a> - <span class='font-italic'>zzzzzzzzzzzz</span>`)

					$(".search-return").append(option)
				}
				//  else if(input !== data.metaArr[j]){
				// 	let google = `https://www.google.com/search?safe=off&q=${input}&spell=1&sa=X&ved=0ahUKEwinv-OntNjfAhUDLK0KHVlaBhcQBQgrKAA&biw=1600&bih=758`;

				// 	console.log(google)

				// 	let option2 = $(`<div>`)

					// $(".search-return").html(`<a href='${google}' target='_blank' class='h6 text-white'>search google for ${input}</a> - <span class='font-italic'>zzzzzzzzzzzz</span>`)
				// 	// $(".search-return").append(option2)

				// }
			}
		}
		$('.main-input').val('');


	})


	// show side nav afterscrolled past main nav
	$(document).scroll(function () {
		let y = $(this).scrollTop();
		if (y > 505) {
			$('.side-nav, .home').fadeIn();
		} else {
			$('.side-nav, .home').fadeOut();
		}
	});

	// Blog
	function getBlogPosts() {
		// Blogger API grab
		let queryUrl = `https://www.googleapis.com/blogger/v3/blogs/3943554857418853370/posts?key=AIzaSyA9RAPlHjpSqJPYQx5z80rBVNWaRK4M3us`

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
				// console.log(posts[i])
			};
		})
	}
	getBlogPosts();
})
$(document).ready(() => {

    // blogger api AIzaSyCdyvbqztCDHXmLkxyy8w_ANC9LEnOfAgo
    const apiKey = 'AIzaSyCdyvbqztCDHXmLkxyy8w_ANC9LEnOfAgo';
    const blogId = '3943554857418853370'
    let queryUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`

    function getBlogPosts() {
        let posts = [];

        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then(res => {
            for (let i = 0; i < res.items.length; i++) {

                posts.push(res.items[i])
                let blogCard = $('<div class="card p-2" id="blog-card">') 
                blogCard.html(`
                <h5 class="text-center" id="blog-title"><a class="text-dark" href="${posts[i].url}">${posts[i].title}</a>
                <br><small>${posts[i].published}</small></h5>
                <p id="blog-content">${posts[i].content}</p>
                </div>`
                );

                $('.blog-posts').append(blogCard);
                    console.log(posts[0])
            };
           
        })
    }
    getBlogPosts();
})
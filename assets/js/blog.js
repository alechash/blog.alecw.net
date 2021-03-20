var articlesJSON

fetch('/blog.json')
    .then(res => res.json())
    .then((out) => {
        const articles = out[0].articles

        articlesJSON = articles

        loadArticles(articles)
    }).catch(err => console.error(err));

document.querySelectorAll('.blog_code').forEach(block => {
    // then highlight each
    hljs.highlightBlock(block);
});

window.onscroll = function () {
    scroller()
};

// Get the header
var header = document.getElementById("blog_title");
var fakeHeader = document.getElementById("fake_title");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroller() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        fakeHeader.style.height = '0px'
    } else {
        header.classList.remove("sticky");
        fakeHeader.style.height = '0px'
    }
}

function loadArticles(articles) {
    var html = ''

    for (i = 0; i < articles.length; i++) {
        var pinnedHTML = ''
        if (articles[i].pinned == true) {
            pinnedHTML = `
                    <span class="blog_preview_pinned">
                        Pinned 📌
                    </span>`
        }

        var photoHTML = ''
        if (articles[i].photo != null) {
            photoHTML = `
                    <img class="blog_preview_image" src="/photos/${articles[i].photo}">`
        } else {
            photoHTML = `
                    <img class="blog_preview_image" src="/photos/non.png">`
        }

        var tagsHTML = ''
        for (j = 0; j < articles[i].tags.length; j++) {
            tagsHTML = tagsHTML + `
                        <span class="blog_preview_tag">#${articles[i].tags[j]}</span>
            `
        }

        html = html + `
            <div class="post_preview" onclick="loadPost(${i})">
                <h3 class="blog_preview_title">
                    ${photoHTML}
                    <span class="blog_preview_title_span">
                    ${articles[i].title}
                    </span><br>
                    <span class="blog_preview_date">
                        ${articles[i].date}
                    </span>
                    ${pinnedHTML}<br>
                    <span class="blog_preview_tags">
                    ${tagsHTML}
                    </span>
                </h3>
            </div>`
    }

    document.getElementById('post_previews').innerHTML = html
}

function loadPost(index) {
    document.getElementById('post_previews').classList.add('hidden')
    document.getElementById('posts').classList.add('hidden')
    document.getElementById('blog').classList.remove('hidden')
    document.getElementById('back_button').classList.remove('hidden')

    var article = articlesJSON[index]
    var body = article.body
    var tags = article.tags

    document.getElementById('blog_title').innerText = article.title
    document.getElementById('blog_date').innerText = article.date
    if (article.photo != null) {
        document.getElementById('blog_image').classList.remove('hidden')
        document.getElementById('blog_image').setAttribute('src', `/photos/${article.photo}`)
    } else {
        document.getElementById('blog_image').classList.add('hidden')
    }

    var bodyHTML = ''
    for (i = 0; i < body.length; i++) {
        if (body[i].startsWith('header:')) {
            bodyHTML = bodyHTML + `<h1 class="blog_heading">${body[i].replace('header:', '')}</h1>`
        } else if (body[i].startsWith('widget:email')) {
            bodyHTML = bodyHTML +
                `
                <div class="blog_widget_email">
                    <h1 class="blog_heading">Get notified about new posts</h1>
                    <div id="mc_embed_signup">
                        <form
                            action="https://alecw.us7.list-manage.com/subscribe/post?u=90a98fc71fb460cf3977cddfa&amp;id=6eb40130f5"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                            class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">

                                <div class="mc-field-group">
                                    <label for="mce-EMAIL" class="odin">Email Address <span class="asterisk">*</span>
                                    </label>
                                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                                </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                        name="b_90a98fc71fb460cf3977cddfa_6eb40130f5" tabindex="-1" value=""></div>
                                <div class="pod-outer">
                                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe"
                                            id="mc-embedded-subscribe" class="button pod"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>`
        } else if (body[i].startsWith('subhead:')) {
            bodyHTML = bodyHTML + `<h3 class="blog_subheading">${body[i].replace('subhead:', '')}</h3>`

        } else if (body[i].startsWith('singlecode:')) {
            bodyHTML = bodyHTML + `
                <div class="blog_code">${body[i].replace('singlecode:', '')}
                </div>`

        } else if (body[i].startsWith('list:')) {
            const listIndex = Number(body[i].replace('list:', ''))

            const list = article.lists[listIndex].list

            var listHTML = `<ul class="blog_list">`

            for (j = 0; j < list.length; j++) {
                listHTML = listHTML + `
                    <li class="wide-text align-left lighter">
                        <p>${list[j]}</p>
                    </li>`
            }

            listHTML = listHTML + `</ul>`

            bodyHTML = bodyHTML + listHTML
        } else {
            var goodParagraph = body[i].replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2' target='_blank'>$1</a>").replace(/`([^`]+)`/g, '<code>$1</code>')

            bodyHTML = bodyHTML + `<p class="blog_text wide-text align-left lighter">${goodParagraph}</p>`
        }

    }

    document.getElementById('blog_body').innerHTML = bodyHTML

    var tagHTML = ``
    for (i = 0; i < tags.length; i++) {
        tagHTML = tagHTML + `
                <span class="pod">${tags[i]}</span>
                `
    }

    document.getElementById('tag_list').innerHTML = tagHTML

    document.querySelectorAll('.blog_code').forEach(block => {
        // then highlight each
        hljs.highlightBlock(block);
    });
}

function home() {
    document.getElementById('post_previews').classList.remove('hidden')
    document.getElementById('posts').classList.remove('hidden')
    document.getElementById('blog').classList.add('hidden')
    document.getElementById('back_button').classList.add('hidden')
}
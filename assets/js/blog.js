var articlesJSON
var collectionJSON

fetch('/blog.json')
    .then(res => res.json())
    .then((out) => {
        const articles = out[0].articles
        const collections = out[0].collections

        articlesJSON = articles
        collectionJSON = collections

        loadArticles(articles)
        loadFromQuery(articles)
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

function loadCollections() {
    collections = collectionJSON

    // alert(collections)

    var html = ''

    for (i = 0; i < collections.length; i++) {
        var linkHtml = ''
        var collection = collectionJSON[i]

        for (j = 0; j < collection.articles.length; j++) {
            for (k = 0; k < articlesJSON.length; k++) {
                if (articlesJSON[k].id == collection.articles[j]) {
                    linkHtml = linkHtml + `
                    <br><a href="/?articleId=${articlesJSON[k].id}" class="no_a">${articlesJSON[k].title}</a>
                    `
                }
            }
        }

        html = html + `
        <div>
            <h2 class="collection_preview_title">#${i+1}: ${collections[i].name}</h2>
            <div class="collection_preview_list">
            ${linkHtml}
            </div>
        </div>`
    }

    document.getElementById('collection_preview').innerHTML = html
}

function loadArticles(articles) {
    loadCollections()

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
                <span class="blog_preview_image_container">
                    <img class="blog_preview_image" src="/photos/${articles[i].photo}">
                </span>`
        } else {
            photoHTML = `
                <span class="blog_preview_image_container">
                    <img class="blog_preview_image" src="/photos/non.png">
                </span>`
        }

        var tagsHTML = ''
        for (j = 0; j < articles[i].tags.length; j++) {
            tagsHTML = tagsHTML + `
                        <span class="blog_preview_tag">#${articles[i].tags[j]}</span>
            `
        }

        html = html + `
            <div class="post_preview">
                <h3 class="blog_preview_title">
                    ${photoHTML}
                    <a class="blog_preview_title_span no_a" href="/?articleId=${articles[i].id}">
                    ${articles[i].title}
                    </a><br>
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

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function loadFromQuery(articles) {
    const id = getParameterByName('articleId');

    for (i = 0; i < articles.length; i++) {
        if (articles[i].id.toString() == id) {
            loadPost(i)
        }
    }
}

function loadPost(index) {
    document.getElementById('post_previews').classList.add('hidden')
    document.getElementById('posts').classList.add('hidden')
    document.getElementById('blog').classList.remove('hidden')
    document.getElementById('back_button').classList.remove('hidden')

    var article = articlesJSON[index]
    var body = article.body
    var tags = article.tags

    document.getElementById('blog_share').setAttribute('data-clipboard-text', 'https://blog.alecw.net/?articleId=' + article.id)

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
        } else if (body[i].startsWith('widget:')) {
            var widgetName = body[i].replace('widget:', '')

            if (widgetName == 'email') {
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
            } else if (widgetName == 'seperator') {
                bodyHTML = bodyHTML + `<div class="center-text">• • •</div>`
            }
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
        } else if (body[i].startsWith('code:')) {
            const codeIndex = Number(body[i].replace('code:', ''))

            const code = article.codes[codeIndex].code

            var codeHTML = `<div class="blog_code">`

            for (j = 0; j < code.length; j++) {
                codeHTML = codeHTML + `${code[j].replace(/ /g, '&nbsp;')}
                `
            }

            codeHTML = codeHTML + `
            </div>`

            bodyHTML = bodyHTML + codeHTML
        } else if (body[i].startsWith('photo:')) {
            const photoIndex = Number(body[i].replace('photo:', ''))


            bodyHTML = bodyHTML + `<img class="blog_image" src="/photos/${article.photos[photoIndex].fileName}">`
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

    new ClipboardJS('.clipped', {
        target: function (trigger) {
            alert("Copied to clipboard!")
            return trigger.nextElementSibling;
        }
    });
}

function home() {
    document.getElementById('post_previews').classList.remove('hidden')
    document.getElementById('posts').classList.remove('hidden')
    document.getElementById('blog').classList.add('hidden')
    document.getElementById('back_button').classList.add('hidden')
}
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    
    if(!validateForm(siteName, siteURL)){
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteURL 
    }

    //

    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //clear form
    document.getElementById('myForm').reset();

    //Re-Fetch bookmarks
    fetchBookmarks();

    // Prevent form from submitting
    e.preventDefault();
}

//Delete Bookmark
function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(var i=0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i, 1);
        }
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //Re-Fetch bookmarks
    fetchBookmarks();
}


//Fetch Bookmarks
function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML = '';
    for (var i=0 ; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="webwell row">'+
                                      '<h3>'+name+
                                      ' <a class="btn btn-primary ms-5" target="_blank" href="'+url+'">visit</a> '+
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> '+
                                      '</h3>'+
                                      '</div>';
    }
}


function validateForm(siteName, siteURL) {
    if(!siteName || !siteURL){
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteURL.match(regex)){
        alert(`please use a valid URL as "https://twitter.com"`);
        return false;
    }

    return true;
}

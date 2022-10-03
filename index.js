let searchBar = document.getElementById('search-bar')




function search() {
    let str = "";
    let val = searchBar.value;
    // console.log(val)
    let n = 0;

    while (n < val.length) {
        if (val[n] == ' ')
            str += '+'
        else
            str += val[n];

        n = n + 1;
    }
    // console.log(str)
    window.open("https://www.youtube.com/results?search_query=" + str);

}
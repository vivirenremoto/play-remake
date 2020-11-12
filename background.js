if (document.location.href.indexOf('/store/search') > -1) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://vivirenremoto.github.io/play-remake/play_remake.css?v=' + Date.now();
    link.media = 'all';
    head.appendChild(link);
}
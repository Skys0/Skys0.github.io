const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	  autoplay: false, //关闭自动播放
    audio: [
	{
        name: 'Blue Dragon',
        artist: '澤野弘之',
        url: 'http://music.163.com/song/media/outer/url?id=501829.mp3',
        cover: '',
        lrc: '',
    }, 
	]
});


const bgm = uni.createInnerAudioContext();
bgm.src = './static/music.mp3'
bgm.loop = true;  //循环播放
// bgm.autoplay=true;  //自动播放
bgm.sessionCategory = 'soloAmbient'; //在后台时不播放，如有其他播放，会暂停其他播放（但在移动端h5中 后台不播放失效）（其他属性自行百度）
bgm.volume = 0.4  //音量
var music = {
	//mute 表示是否是静音，，默认静音
	playBgm({
		mute = true
	}) {
		if (!bgm) return;
		if (mute) {
			bgm.pause()
		} else {
			bgm.play()
		}
 
		bgm.onPause(() => {})
		bgm.onPlay(() => {})
		bgm.onError((res) => {})
	}
}
module.exports = music
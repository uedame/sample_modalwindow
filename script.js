document.querySelectorAll(".videos video").forEach((video) => {

	video.onclick = () => {
		// クリックしたら.modalクラスタグのstyleをnone → blockに変更（.modalクラスタグが手前に表示される）
		document.querySelector(".modal").style.display = "block";
		// それぞれの動画のvideoタグのsrc属性を取得
		document.querySelector(".modal video").src = video.getAttribute("src");
		document.querySelector(".modal video").play();
	}

});


const span = document.querySelector(".modal span").onclick = () => {
	// styleをblock → noneに変更
	document.querySelector(".modal").style.display = "none";
	document.querySelector(".modal video").pause();
};


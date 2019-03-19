"use strict";

$(() => {
	var video = $('#custom-video')[0];
 	var playButton = $('.video-play-btn');
 	var pauseButton = $('.video-pause-btn');
 	var fullScreenButton = $('.full-screen-btn')[0];
 	var windowScreenButton = $('.window-screen-btn')[0];
 	var volumeSlider = $('#volume-slider')[0];
 	var seekBar = $('#seek-bar')[0];

 	video.onloadedmetadata = function () {
 		var totalMin = Math.floor(video.duration / 60);
 		totalMin = totalMin < 10 ? '0' + totalMin : totalMin;
 		$('#total-min').text(totalMin);
 		var totalSec = Math.floor(video.duration % 60);
 		totalSec = totalSec < 10 ? '0' + totalSec : totalSec;
 		$('#total-sec').text(totalSec);
 	};

	$(volumeSlider).on('change', function(event) {
		var sound = volumeSlider.value / 100;
		video.volume = sound;
	});

	$(seekBar).on('change', function(event) {
		var time = video.duration * (seekBar.value / 100);
 		video.currentTime = time;
	});

	$(video).on('timeupdate', function(event){
		seekBar.value = this.currentTime * (100 / this.duration);
		var currentMin = Math.floor(this.currentTime / 60);
 		currentMin = currentMin < 10 ? '0' + currentMin : currentMin;
 		$('#current-min').text(currentMin);
 		var currentSec = Math.floor(this.currentTime % 60);
 		currentSec = currentSec < 10 ? '0' + currentSec : currentSec;
 		$('#current-sec').text(currentSec);
 		if(this.currentTime === this.duration) {
 			seekBar.value = 0;
 			video.currentTime = 0;
 			$(pauseButton).addClass('hide-video-btn');
 			$(playButton).removeClass('hide-video-btn');
 			$('.video-deco').removeClass('hide-video-deco');
 			};
	});

 	function togglePlay () {
 		video.paused == false ? video.pause() : video.play();
	};

 	$(playButton).on('click', function (event) {
 		event.preventDefault();
 		togglePlay ();
 		$(pauseButton).removeClass('hide-video-btn');
 		$(playButton).addClass('hide-video-btn');
 		$('.video-deco').addClass('hide-video-deco');
 	});

 	$(pauseButton).on('click', function (event) {
 		event.preventDefault();
 		togglePlay ();
 		$(playButton).removeClass('hide-video-btn');
 		$(pauseButton).addClass('hide-video-btn');
 	});

 	$(fullScreenButton).on('click', function (event) {
 		event.preventDefault();
 		video.requestFullscreen();
 	});

});
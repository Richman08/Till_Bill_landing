"use strict";

$(() => {
var indexSlideLooksGalleries = 0;

var latestLooksGallery = [
 		{
 			'imgUrl': './assets/img/latest-looks-man-1.png',
 			'altImg': 'man',
 			'avatarUrl': './assets/img/avatar-jane.png',
 			'stylistName': 'Jane'
 		},
 		{
 			'imgUrl': './assets/img/latest-looks-woman-1.png',
 			'altImg': 'woman',
 			'avatarUrl': './assets/img/avatar-zoi.png',
 			'stylistName': 'Zoi'
 		},
 		{
 			'imgUrl': './assets/img/latest-looks-man-2.png',
 			'altImg': 'man',
 			'avatarUrl': './assets/img/avatar-anna.png',
 			'stylistName': 'Anna'
 		},
 	];

 	function createLatestLooksGallerySLide () {
 		$('#latest-looks-gallery-wraper').replaceWith(`
 				<div id="latest-looks-gallery-wraper">
 					<img src="${latestLooksGallery[indexSlideLooksGalleries].imgUrl}" alt="${latestLooksGallery[indexSlideLooksGalleries].altImg}">
 					<div class="stylist-info">
						<div class="made-by">
							<img src="${latestLooksGallery[indexSlideLooksGalleries].avatarUrl}" alt="stylists avatar">
							<div class="name-rate">
								<p>Made by ${latestLooksGallery[indexSlideLooksGalleries].stylistName}</p>
								<div class="star-rating">
									<ul>
										<li>
											<a class="icon-star-empty" title="1 star"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="2 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="3 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="4 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="5 stars"></a>
										</li>
									</ul>
								</div>
							</div>	
						</div>	
					</div>
 				</div>
 			`)
 	};
 	createLatestLooksGallerySLide ();

 	var nextSlideLatestLooks = $('#latest-looks-arrow-right').on('click', function (event) {
 		event.preventDefault();
 		indexSlideLooksGalleries < latestLooksGallery.length-1 ? indexSlideLooksGalleries ++ : indexSlideLooksGalleries = 0;
 		createLatestLooksGallerySLide ()
 	});

 	var prevSlideLatestLooks = $('#latest-looks-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		indexSlideLooksGalleries > 0 ? indexSlideLooksGalleries -- : indexSlideLooksGalleries = latestLooksGallery.length-1;
 		createLatestLooksGallerySLide ()
 	});

 	var bestLooksGallery = [
 		{
 			'imgUrl': './assets/img/best-rated-looks-coat-1.png',
 			'altImg': 'coat',
 			'avatarUrl': './assets/img/avatar-zoi.png',
 			'stylistName': 'Zoi'
 		},
 		{
 			'imgUrl': './assets/img/best-rated-looks-blue-shirt-1.png',
 			'altImg': 'blue shirt',
 			'avatarUrl': './assets/img/avatar-anna.png',
 			'stylistName': 'Anna'
 		},
 		{
 			'imgUrl': './assets/img/best-rated-looks-red-dress-1.png',
 			'altImg': 'red dress',
 			'avatarUrl': './assets/img/avatar-jane.png',
 			'stylistName': 'Jane'
 		},
 	];

 	function createBestLooksGallerySLide () {
 		$('#best-looks-gallery-wraper').replaceWith(`
 				<div id="best-looks-gallery-wraper">
 					<img src="${bestLooksGallery[indexSlideLooksGalleries].imgUrl}" alt="${bestLooksGallery[indexSlideLooksGalleries].altImg}">
 					<div class="stylist-info">
						<div class="made-by">
							<img src="${bestLooksGallery[indexSlideLooksGalleries].avatarUrl}" alt="stylists avatar">
							<div class="name-rate">
								<p>Made by ${bestLooksGallery[indexSlideLooksGalleries].stylistName}</p>
								<div class="star-rating">
									<ul>
										<li>
											<a class="icon-star-empty" title="1 star"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="2 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="3 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="4 stars"></a>
										</li>
										<li>
											<a class="icon-star-empty" title="5 stars"></a>
										</li>
									</ul>
								</div>
							</div>	
						</div>	
					</div>
 				</div>
 			`)
 	};
 	createBestLooksGallerySLide ();

 	var nextSlideBestLooks = $('#best-looks-arrow-right').on('click', function (event) {
 		event.preventDefault();
 		indexSlideLooksGalleries < bestLooksGallery.length-1 ? indexSlideLooksGalleries ++ : indexSlideLooksGalleries = 0;
 		createBestLooksGallerySLide ()
 	});

 	var prevSlideBestLooks = $('#best-looks-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		indexSlideLooksGalleries > 0 ? indexSlideLooksGalleries -- : indexSlideLooksGalleries = bestLooksGallery.length-1;
 		createBestLooksGallerySLide ()
 	});
});
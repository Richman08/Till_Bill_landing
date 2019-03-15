"use strict";

$(() => {

	function sayHello () {
		$('#main-logo').on('click', function() {
			alert('Hello');
		});
	};
	sayHello();
	
	function showHideSearchInput () {
		$('#icon-search').on('click', function (){
			$('#input-search').toggle('slow')
		});
		
		$('#input-search').keyup(function(event){
			if(event.keyCode == 13) {
				$(this).css({'display':'none', 'transition':'.5s'})  /*убрать инлайновые стили, заменить на классы*/
			};
		});
	};
	showHideSearchInput();	

	var mainBannerCarousel = [
		{
			'avatarUrl': './assets/img/avatar-jane.png',
			'stylistName': 'Jane',
			'product': [
							{
								'price': '$500',
								'title':  'Trousers' 
							},
							{
								'price': '$1350',
								'title':  'Jacket' 
							},
							{
								'price': '$900',
								'title':  'Shoes' 
							},
							{
								'price': '$230',
								'title':  'Shirt' 
							}
						],
			'mainImgUrl': './assets/img/man-slide-1.png',
		},
		{
			'avatarUrl': './assets/img/avatar-zoi.png',
			'stylistName': 'Zoi',
			'product': [
							{
								'price': '$1200',
								'title':  'Jacket' 
							},
							{
								'price': '$300',
								'title':  'Shorts' 
							},
							{
								'price': '$200',
								'title':  'Doll' 
							},
							{
								'price': '$1555',
								'title':  'Robot' 
							}
						],
			'mainImgUrl': './assets/img/woman-slide-2.png',
		},
		{
			'avatarUrl': './assets/img/avatar-anna.png',
			'stylistName': 'Anna',
			'product': [
							{
								'price': '$100',
								'title':  'Skirt' 
							},
							{
								'price': '$666',
								'title':  'Coat' 
							},
							{
								'price': '$50',
								'title':  'Sox' 
							},
							{
								'price': '$945',
								'title':  'Bag' 
							}
						],
			'mainImgUrl': './assets/img/woman-slide-3.png',
		}
	];

	var indexSlide = 0;

	function createMainBannerGallerySlide () {
		$('#slider-wraper').replaceWith(`
					<div class="slider-wraper" id="slider-wraper">
						<div class="main-banner-slider-block">
							<div class="main-banner-description">
								<div class="main-banner-greeting">
									<p>Thank you, John for using our TaxFree4U service!</p>
									<img src="./assets/img/divider.png" alt="divider">
									<p>Here’s some items you might like</p>
									<a href="https://play.google.com/store">See all my looks</a>
								</div>
								<div class="main-banner-decoration">
									<div class="big-rhombus">
										<div class="stylist-review">
											<img src=${mainBannerCarousel[indexSlide].avatarUrl} alt="Jane">
											<img src="./assets/img/row-1.png" alt="row">
											<p>Made by ${mainBannerCarousel[indexSlide].stylistName}</p>
											<div class="star-rating">
												<ul>
													<li>
														<span href="#" class="icon-star-empty" title="1 star"></span>
													</li>
													<li>
														<span href="#" class="icon-star-empty" title="2 stars"></span>
													</li>
													<li>
														<span href="#" class="icon-star-empty" title="3 stars"></span>
													</li>
													<li>
														<span href="#" class="icon-star-empty" title="4 stars"></span>
													</li>
													<li>
														<span href="#" class="icon-star-empty" title="5 stars"></span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="list-small-rhombuses">
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>${mainBannerCarousel[indexSlide].product[0].price}</p>
												<div class="divider"></div>
												<p>${mainBannerCarousel[indexSlide].product[0].title}</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>${mainBannerCarousel[indexSlide].product[1].price}</p>
												<div class="divider"></div>
												<p>${mainBannerCarousel[indexSlide].product[1].title}</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>${mainBannerCarousel[indexSlide].product[2].price}</p>
												<div class="divider"></div>
												<p>${mainBannerCarousel[indexSlide].product[2].title}</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>${mainBannerCarousel[indexSlide].product[3].price}</p>
												<div class="divider"></div>
												<p>${mainBannerCarousel[indexSlide].product[3].title}</p>
											</div>
										</div>
									</div>
								</div>			
							</div>
							<div class="main-banner-img">
								<img src="${mainBannerCarousel[indexSlide].mainImgUrl}" alt="man">
							</div>
						</div>
					</div>
					`)
	};
	createMainBannerGallerySlide();

	function createMainBannerGallerySelector () {
		for (var i = 0; i < mainBannerCarousel.length; i++) {
			$('#carousel-selectors ul').append(`
				<li>
					<a href='#'>
						<i class="fas fa-circle"></i>
					</a>
				</li>
			`);
		};
	};
	createMainBannerGallerySelector();

	function addClass () {
		$('#carousel-selectors li').eq([indexSlide]).addClass('current-selector');
	};
	addClass();

	var autoplayMainBannerGallery = {
		handle: 0,
		start: () => {
			this.handle = setTimeout (function tick () {
							indexSlide < mainBannerCarousel.length-1 ? indexSlide ++ : indexSlide = 0;
							createMainBannerGallerySlide();
							$('#carousel-selectors li').removeClass('current-selector');
							addClass();
							this.handle = setTimeout(tick, 1500);
						}, 1500);
		},
		stop: () => clearTimeout(this.handle)
	};
	autoplayMainBannerGallery.start();

	var nextSlideBanner = $('#main-banner-arrow-right').on('click', function (event) {
		event.preventDefault();
		autoplayMainBannerGallery.stop();
		indexSlide < mainBannerCarousel.length-1 ? indexSlide ++ : indexSlide = 0;
		createMainBannerGallerySlide();
		$('#carousel-selectors li').removeClass('current-selector');
		addClass();
	});

	var prevSlideBanner = $('#main-banner-arrow-left').on('click', function (event) {
		event.preventDefault();
		autoplayMainBannerGallery.stop();
		indexSlide > 0 ? indexSlide -- : indexSlide = mainBannerCarousel.length-1;
		createMainBannerGallerySlide();
		$('#carousel-selectors li').removeClass('current-selector');
		addClass();
	});

	$('#carousel-selectors li').on('click', function (event) {
		event.preventDefault();
		autoplayMainBannerGallery.stop();
		$('#carousel-selectors li').removeClass('current-selector');
		indexSlide = $(this).index();
		addClass();
		createMainBannerGallerySlide();
	});

	$('body').on('keydown', function (event) {
		var codeMainGallery = event.keyCode;
		if(codeMainGallery === 39) nextSlideBanner.trigger('click');
		if(codeMainGallery === 37) prevSlideBanner.trigger('click');
	});

	var recomendationGallery = [
		{
			'mainImgUrl': './assets/img/stylistLindsayPearce.png',
			'stylistName': 'Lindsay Pearce',
			'description': "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s",
			'contactStylistUrl': 'https://www.instagram.com/kateyoung/' 
		},
		{
			'mainImgUrl': './assets/img/stylistZoiCampbel.png',
			'stylistName': 'Zoi Campbel',
			'description': "Kate Young’s key customer list is truly impressive: fashionable advice comes to her from everyone you meet on the covers of fashion glossy - Selena Gomez, Sienna Miller, Natalie Portman and other iconic styles. And Dakota Johnson - the actress who played the main role in the film 50 shades of gray - and generally got on the list of the most stylishly dressed stars of 2015 according to the fashionable portal Fashionista.",
			'contactStylistUrl': 'https://www.instagram.com/micaela/' 
		},
		{
			'mainImgUrl': './assets/img/stylistAnnaYoung.png',
			'stylistName': 'Anna Young',
			'description': "Former fashion editor of The New York Times magazine, and now personal stylist Elizabeth Stewart works with Cate Blanchett, Julia Roberts, Geneoyari Jones, Amanda Seyfried, Viola Davis. Instagram Elizabeth is very lively: in it, she is divided not only staged photos of stars, but also friendly pictures taken on the camera phone in the mode here and now.",
			'contactStylistUrl': 'https://www.instagram.com/elizabethstewart1/' 
		}
	];

	function createRecomendationGallerySlide () {
		$('#recomedationGalleryWrapper').replaceWith(`
				<div class="recomedationGalleryWrapper" id="recomedationGalleryWrapper">
					<div class="stylist-img">
						<img src="${recomendationGallery[indexSlide].mainImgUrl}" alt="stylistLindsayPearce">	
					</div>
					<div class="recomended-stylists">
						<div class="title">
							<h2>recomended-stylists</h2>
							<img src="./assets/img/divider-gray.png">	
						</div>
						<div class="stylist">
							<div class="name-stylist">
								<p>${recomendationGallery[indexSlide].stylistName}</p>
							</div>
							<div class="info-stylist">
								<div class="rate-stylist">
									<p>Stylist Bloger</p>
									<div class="star-rating">
										<ul>
											<li>
												<span class="icon-star-empty" title="1 star"></span>
											</li>
											<li>
												<span class="icon-star-empty" title="2 stars"></span>
											</li>
											<li>
												<span class="icon-star-empty" title="3 stars"></span>
											</li>
											<li>
												<span class="icon-star-empty" title="4 stars"></span>
											</li>
											<li>
												<span class="icon-star-empty" title="5 stars"></span>
											</li>
										</ul>
									</div>
								</div>
								<div class="description">
									<p>${recomendationGallery[indexSlide].description}</p>
								</div>
								<div class="contact-stylist">
									<a href="${recomendationGallery[indexSlide].contactStylistUrl}">Contact with ${recomendationGallery[indexSlide].stylistName}</a>
								</div>
							</div>
						</div>	
					</div>
				</div>
			`)
	};
	createRecomendationGallerySlide ();
 	
 	// var autoplayRecomendationGallery = {
 	// 	handle: 0,
 	// 	start: () => {
 	// 		// this.stop();
 	// 		this.handle = setTimeout (function tick () {
		// 	 				indexSlide < recomendationGallery.length-1 ? indexSlide ++ : indexSlide = 0;
		// 	 				createRecomendationGallerySlide();
		// 	 				this.handle = setTimeout (tick, 1500);
		// 	 			}, 1500);
 	// 	},
 	// 	stop: () => clearTimeout(this.handle)
 	// };

 	$(window).scroll(function (event) {
		if ($(window).scrollTop() > 120) {
			autoplayMainBannerGallery.stop();
			// autoplayRecomendationGallery.start();
		} 
		if ($(window).scrollTop() === 0) {
			// autoplayRecomendationGallery.stop();
			autoplayMainBannerGallery.start();
		}
		// if ($(window).scrollTop() > 250) {
		// 	autoplayRecomendationGallery.stop();
		// }
	});

 	var nextSlideRecomendation = $('#recomendation-arrow-right').on('click', function (event) {
 		event.preventDefault();
 		autoplayRecomendationGallery.stop();
 		indexSlide < recomendationGallery.length-1 ? indexSlide ++ : indexSlide = 0;
 		createRecomendationGallerySlide ()
 	});

 	var prevSlideRecomendation = $('#recomendation-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		autoplayRecomendationGallery.stop();
 		indexSlide > 0 ? indexSlide -- : indexSlide = recomendationGallery.length-1;
 		createRecomendationGallerySlide ()
 	});

	var video = $('#custom-video')[0];
 	var playButton = $('.video-play-btn');
 	var pauseButton = $('.video-pause-btn');
 	var fullScreenButton = $('#full-screen-btn')[0];
 	var windowScreenButton = $('#window-screen-btn');
 	var seekBar = $('#seek-bar')[0];


	$(seekBar).on('change', function(event) {
		var time = video.duration * (seekBar.value / 100);
 		video.currentTime = time;
	});

	$(video).on('timeupdate', function(event){
		seekBar.value = video.currentTime 
	})

 	function videoPlayPause () {
 		video.paused == false ? video.pause() : video.play();
	};

 	$(playButton).on('click', function (event) {
 		event.preventDefault();
 		videoPlayPause ();
 		$(pauseButton).removeClass('hide-video-btn');
 		$(playButton).addClass('hide-video-btn');
 		$('.video-deco').addClass('hide-video-deco');
 	});

 	$(pauseButton).on('click', function (event) {
 		event.preventDefault();
 		videoPlayPause ();
 		$(playButton).removeClass('hide-video-btn');
 		$(pauseButton).addClass('hide-video-btn');
 	});

 	$(fullScreenButton).on('click', function (event) {
 		event.preventDefault();
 		video.requestFullscreen();
 	});




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
 					<img src="${latestLooksGallery[indexSlide].imgUrl}" alt="${latestLooksGallery[indexSlide].altImg}">
 					<div class="stylist-info">
						<div class="made-by">
							<img src="${latestLooksGallery[indexSlide].avatarUrl}" alt="stylists avatar">
							<div class="name-rate">
								<p>Made by ${latestLooksGallery[indexSlide].stylistName}</p>
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
 		indexSlide < latestLooksGallery.length-1 ? indexSlide ++ : indexSlide = 0;
 		createLatestLooksGallerySLide ()
 	});

 	var prevSlideLatestLooks = $('#latest-looks-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		indexSlide > 0 ? indexSlide -- : indexSlide = latestLooksGallery.length-1;
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
 					<img src="${bestLooksGallery[indexSlide].imgUrl}" alt="${bestLooksGallery[indexSlide].altImg}">
 					<div class="stylist-info">
						<div class="made-by">
							<img src="${bestLooksGallery[indexSlide].avatarUrl}" alt="stylists avatar">
							<div class="name-rate">
								<p>Made by ${bestLooksGallery[indexSlide].stylistName}</p>
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
 		indexSlide < bestLooksGallery.length-1 ? indexSlide ++ : indexSlide = 0;
 		createBestLooksGallerySLide ()
 	});

 	var prevSlideBestLooks = $('#best-looks-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		indexSlide > 0 ? indexSlide -- : indexSlide = bestLooksGallery.length-1;
 		createBestLooksGallerySLide ()
 	});

 	var indexColor = 0;

 	var productGallery = [
 		{
 			'productBlockFirst': [
	 								{
	 									'productImg': [
					 									{
					 										'clothesColor': './assets/img/classic-gray-tshirt.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/classic-red-tshirt.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/classic-blue-tshirt.png'
					 									}
				 									  ],
	 								},
									{	
										'productPrice': '$250',
										'productName': 'Classic t-shirt'
							 		}
 								],
	 		'productBlockSecond': {
						 			'productImg': './assets/img/brown-bag.png',
									'productPrice': '$500',
									'productName': 'Filson Small Duffell Bag'
						 		},
			'productBlockThird': {
						 			'productImg': './assets/img/watch-marine-grand-deck.png',
									'productPrice': '$1000',
									'productName': 'Marine Grand Deck 6300-300/GD'
						 		},
 		},
 		{
 			'productBlockFirst': [
	 								{
	 									'productImg': [
					 									{
					 										'clothesColor': './assets/img/lingerie-gray.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/lingerie-red.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/lingerie-blue.png'
					 									}
				 									  ],
	 								},
									{	
										'productPrice': '$360',
										'productName': 'Lace lingerie'
							 		}
 								],
	 		'productBlockSecond': {
						 			'productImg': './assets/img/baby-flash-clothes.png',
									'productPrice': '$90',
									'productName': 'Baby flash clothes'
						 		},
			'productBlockThird': {
						 			'productImg': './assets/img/tors-hummer.png',
									'productPrice': '$9999',
									'productName': 'Tor hummer'
						 		},
 		},
 		{
 			'productBlockFirst': [
	 								{
	 									'productImg': [
					 									{
					 										'clothesColor': './assets/img/best-rated-looks-gray-dress-1.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/best-rated-looks-red-dress-1.png'
					 									},
					 									{
					 										'clothesColor': './assets/img/best-rated-looks-blue-dress-1.png'
					 									}
				 									  ],
	 								},
									{	
										'productPrice': '$1499',
										'productName': 'Summer dress'
							 		}
 								],
	 		'productBlockSecond': {
						 			'productImg': './assets/img/robot.png',
									'productPrice': '$910',
									'productName': 'Silver robot'
						 		},
			'productBlockThird': {
						 			'productImg': './assets/img/best-rated-looks-blue-shirt-1.png',
									'productPrice': '$310',
									'productName': 'Man summer shirt'
						 		},
 		},
 	];

 	function createProductGallerySlide () {
 		$('#product-gallery-wraper').replaceWith(`
 				<div id="product-gallery-wraper">
					<div class="product-block">
						<div class="product-item">
							<div class="status-of-product">
								<p>new</p>
							</div>
							<div class="product-color" id="product-color">
								<ul>
								</ul>
							</div>
							<div class="product-image" id='product-image'>
								<img src="${productGallery[indexSlide].productBlockFirst[0].productImg[0].clothesColor}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlide].productBlockFirst[1].productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlide].productBlockFirst[1].productName}</p>
								<div class="action-icons">
									<ul>
										<li>
											<a href="#"><i class="far fa-heart"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-shopping-basket"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-share-alt"></i></a>
										</li>
									</ul>		
								</div>
							</div>
						</div>
					</div>
					<div class="product-block">
						<div class="product-item">
							<div class="status-of-product">
								<p>new</p>
							</div>
							<div class="product-image">
								<img src="${productGallery[indexSlide].productBlockSecond.productImg}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlide].productBlockSecond.productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlide].productBlockSecond.productName}</p>
								<div class="action-icons">
									<ul>
										<li>
											<a href="#"><i class="far fa-heart"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-shopping-basket"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-share-alt"></i></a>
										</li>
									</ul>		
								</div>
							</div>
							<div class="action-icons">
								<div class="icon">
									<i class="far fa-heart"></i>
								</div>
								<div class="icon">
									<i class="fas fa-shopping-basket"></i>
								</div>
								<div class="icon">
									<i class="fas fa-share-alt"></i>
								</div>		
							</div>
						</div>
					</div>
					<div class="product-block">
						<div class="product-item">
							<div class="status-of-product">
								<p>new</p>
							</div>
							<div class="product-image">
								<img src="${productGallery[indexSlide].productBlockThird.productImg}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlide].productBlockThird.productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlide].productBlockThird.productName}</p>
								<div class="action-icons">
									<ul>
										<li>
											<a href="#"><i class="far fa-heart"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-shopping-basket"></i></a>
										</li>
										<li>
											<a href="#"><i class="fas fa-share-alt"></i></a>
										</li>
									</ul>		
								</div>
							</div>
						</div>
					</div>			
				</div>
 			`);
 	};
 	createProductGallerySlide ();

 	function createColorSelector () {
 		for (var i = 0; i < productGallery[indexSlide].productBlockFirst[0].productImg.length; i++) {
			$('#product-color ul').append(`
								 			<li>
												<i class="fas fa-square-full figure"></i>
											</li>
							 			`)
		};
 	};
 	createColorSelector ();

 	function createProductGallerySelector () {
 		for (var i = 0; i < productGallery.length; i++) {
			$('#product-listing-selectors ul').append(`
				<li>
					<a href='#'>
						<i class="fas fa-circle"></i>
					</a>
				</li>
			`);
		};
 	};
 	createProductGallerySelector ();

 	function changeClothesColor () {
 		$('#product-image').replaceWith(`
								<div class="product-image" id='product-image'>
									<img src="${productGallery[indexSlide].productBlockFirst[0].productImg[indexColor].clothesColor}">
								</div>
 										`)
 	};
 	changeClothesColor ();

 	function addClassProductGallerySelector () {
		$('#product-listing-selectors li').eq([indexSlide]).addClass('current-selector');
	};
	addClassProductGallerySelector ();

	function addClassColorSelector () {
		$('#product-color li').eq([indexColor]).addClass('current-color-selector');
	};
	addClassColorSelector ();

	function listenChangeProductColor() {
		$('#product-color li').on('mouseover', function (event) {
			$('#product-color li').removeClass('current-color-selector');
			indexColor = $(this).index();
			addClassColorSelector ();
			changeClothesColor ();
		});
	};
	listenChangeProductColor();

	var nextSlideProductGallery = $('#product-arrow-right').on('click', function (event) {
		event.preventDefault();
		indexSlide < productGallery.length-1 ? indexSlide ++ : indexSlide = 0;
		createProductGallerySlide ();
		createColorSelector ();
		$('#product-listing-selectors li').removeClass('current-selector');
		addClassProductGallerySelector ();
		listenChangeProductColor();
	});

	var prevSlideProductGallery = $('#product-arrow-left').on('click', function (event) {
		event.preventDefault();
		indexSlide > 0 ? indexSlide -- : indexSlide = productGallery.length-1;
		createProductGallerySlide ();
		createColorSelector ();
		$('#product-listing-selectors li').removeClass('current-selector');
		addClassProductGallerySelector ();
		listenChangeProductColor();
	});

	$('#product-listing-selectors li').on('click', function (event) {
		event.preventDefault();
		$('#product-listing-selectors li').removeClass('current-selector');
		indexSlide = $(this).index();
		addClassProductGallerySelector ();
		createProductGallerySlide();
		createColorSelector ();
		listenChangeProductColor();
	});
	
});


"use strict";

$(() => {
	
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

	$(window).scroll(function (event) {
		if ($(window).scrollTop() > 120) {autoplayMainBannerGallery.stop();}
		if ($(window).scrollTop() === 0) {autoplayMainBannerGallery.start();}
	});

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
});


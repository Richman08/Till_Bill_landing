"use strict";

$(() => {

	// function sayHello () {
	// 	$('#main-logo').on('click', function() {
	// 		alert('Сука работает!! )))');
	// 	});
	// };
	// sayHello();
	
	// function showHideSearchInput () {
	// 	$('#icon-search').on('click', function (){
	// 		$('#input-search').toggle('slow')
	// 	});
		
	// 	$('#input-search').keyup(function(event){
	// 		if(event.keyCode == 13) {
	// 			$(this).css({'display':'none', 'transition':'.5s'})
	// 		};
	// 	});
	// };
	// showHideSearchInput();	
		


	// function playCarousel () {
	// 	$('#main-banner-arrow-right').on('click', function (event) {
	// 		event.preventDefault();
	// 		var currentSlide = $('.main-banner-slider-block.current-slide');
	// 		var currentSlideIndex = $('.main-banner-slider-block.current-slide').index();
	// 		var nextSlideIndex = currentSlideIndex + 1;
	// 		var nextSlide = $('.main-banner-slider-block').eq(nextSlideIndex);

	// 		var currentSelector = $('.selector.current-selector');
	// 		var currentSelectorIndex = $('.selector.current-selector').index();
	// 		var nextSelectorIndex = currentSelectorIndex + 1;
	// 		var nextSelector = $('.selector').eq(nextSelectorIndex);

	// 		currentSlide.removeClass('current-slide');
	// 		currentSelector.removeClass('current-selector');

	// 		if(nextSlideIndex == ($('.main-banner-slider-block:last').index()+1)) {
	// 			$('.main-banner-slider-block').eq(0).addClass('current-slide');				
	// 		} else {
	// 			nextSlide.addClass('current-slide');
	// 		};

	// 		if(nextSelectorIndex == ($('.selector:last').index()+1)) {
	// 			$('.selector').eq(0).addClass('current-selector');			
	// 		} else {
	// 			nextSelector.addClass('current-selector');
	// 		};
	// 	});
		
	// 	$('#main-banner-arrow-left').on('click', function (event) {
	// 		event.preventDefault();
	// 		var currentSlide = $('.main-banner-slider-block.current-slide');
	// 		var currentSlideIndex = $('.main-banner-slider-block.current-slide').index();
	// 		var prevSlideIndex = currentSlideIndex - 1;
	// 		var prevSlide = $('.main-banner-slider-block').eq(prevSlideIndex);

	// 		var currentSelector = $('.selector.current-selector');
	// 		var currentSelectorIndex = $('.selector.current-selector').index();
	// 		var prevSelectorIndex = currentSelectorIndex - 1;
	// 		var prevSelector = $('.selector').eq(prevSelectorIndex);

	// 		currentSlide.removeClass('current-slide');
	// 		prevSlide.addClass('current-slide');
	// 		currentSelector.removeClass('current-selector');
	// 		prevSelector.addClass('current-selector');
	// 	})
	// };
	// playCarousel()


	var carousel = [
		{
			'avatar': {'url': './assets/img/avatar-jane.png'},
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
			'mainImg': {'url': './assets/img/man-slide-1.png'},
		},
		{
			'avatar': {'url': './assets/img/avatar-zoi.png'},
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
			'mainImg': {'url': './assets/img/woman-slide-2.png'},
		},
		{
			'avatar': {'url': './assets/img/avatar-anna.png'},
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
			'mainImg': {'url': './assets/img/woman-slide-3.png'},
		},
	];

	// var indexSlide = 0;

	// $('#slider-wraper').append("\
	// 					<div class="main-banner-slider-block">\
	// 						<div class="main-banner-description">\
	// 							<div class="main-banner-greeting">\
	// 								<p>Thank you, John for using our TaxFree4U service!</p>\
	// 								<img src="./assets/img/divider.png">\
	// 								<p>Here’s some items you might like</p>\
	// 								<a href="#">See all my looks</a>\
	// 							</div>\
	// 							<div class="main-banner-decoration">\
	// 								<div class="big-rhombus">\
	// 									<div class="stylist-review">\
	// 										<img src="./assets/img/avatar-jane.png" alt="Jane">\
	// 										<img src="./assets/img/row-1.png" alt="row">\
	// 										<p>Made by Jany</p>\
	// 										<div class="star-rating">\
	// 											<ul>\
	// 												<li>\
	// 													<span href="#" class="icon-star-empty" title="1 star"></span>\
	// 												</li>\
	// 												<li>\
	// 													<span href="#" class="icon-star-empty" title="2 stars"></span>\
	// 												</li>\
	// 												<li>\
	// 													<span href="#" class="icon-star-empty" title="3 stars"></span>\
	// 												</li>\
	// 												<li>\
	// 													<span href="#" class="icon-star-empty" title="4 stars"></span>\
	// 												</li>\
	// 												<li>\
	// 													<span href="#" class="icon-star-empty" title="5 stars"></span>\
	// 												</li>\
	// 											</ul>\
	// 										</div>\
	// 									</div>\
	// 								</div>\
	// 								<div class="list-small-rhombuses">\
	// 									<div class="small-rhombus-with-price">\
	// 										<div class="price">\
	// 											<p>$500</p>\
	// 											<div class="divider"></div>\
	// 											<p>Trousers</p>\
	// 										</div>\
	// 									</div>\
	// 									<div class="small-rhombus-with-price">\
	// 										<div class="price">\
	// 											<p>$1350</p>\
	// 											<div class="divider"></div>\
	// 											<p>Jacket</p>\
	// 										</div>\
	// 									</div>\
	// 									<div class="small-rhombus-with-price">\
	// 										<div class="price">\
	// 											<p>$900</p>\
	// 											<div class="divider"></div>\
	// 											<p>Shoes</p>\
	// 										</div>\
	// 									</div>\
	// 									<div class="small-rhombus-with-price">\
	// 										<div class="price">\
	// 											<p>$230</p>\
	// 											<div class="divider"></div>\
	// 											<p>Shirt</p>\
	// 										</div>\
	// 									</div>\
	// 								</div>\
	// 							</div>\					
	// 						</div>\
	// 						<div class="main-banner-img">\
	// 							<img src="./assets/img/man-slide-1.png" alt="man">\
	// 						</div>\
	// 					</div>\
	// 				")

	$('#slider-wraper').append("
						<div class="main-banner-slider-block">
							<div class="main-banner-description">
								<div class="main-banner-greeting">
									<p>Thank you, John for using our TaxFree4U service!</p>
									<img src="./assets/img/divider.png">
									<p>Here’s some items you might like</p>
									<a href="#">See all my looks</a>
								</div>
								<div class="main-banner-decoration">
									<div class="big-rhombus">
										<div class="stylist-review">
											<img src="./assets/img/avatar-jane.png" alt="Jane">
											<img src="./assets/img/row-1.png" alt="row">
											<p>Made by Jany</p>
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
												<p>$500</p>
												<div class="divider"></div>
												<p>Trousers</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>$1350</p>
												<div class="divider"></div>
												<p>Jacket</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>$900</p>
												<div class="divider"></div>
												<p>Shoes</p>
											</div>
										</div>
										<div class="small-rhombus-with-price">
											<div class="price">
												<p>$230</p>
												<div class="divider"></div>
												<p>Shirt</p>
											</div>
										</div>
									</div>
								</div>			
							</div>
							<div class="main-banner-img">
								<img src="./assets/img/man-slide-1.png" alt="man">
							</div>
						</div>
					")






});


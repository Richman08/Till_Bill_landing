"use strict";

$(() => {

var indexSlideProductGallery = 0;
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
								<img src="${productGallery[indexSlideProductGallery].productBlockFirst[0].productImg[0].clothesColor}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlideProductGallery].productBlockFirst[1].productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlideProductGallery].productBlockFirst[1].productName}</p>
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
								<img src="${productGallery[indexSlideProductGallery].productBlockSecond.productImg}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlideProductGallery].productBlockSecond.productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlideProductGallery].productBlockSecond.productName}</p>
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
								<img src="${productGallery[indexSlideProductGallery].productBlockThird.productImg}">
							</div>
						</div>
						<div class="product-info">
							<div class="product-price">
								<p>${productGallery[indexSlideProductGallery].productBlockThird.productPrice}</p>
							</div>
							<div class="product-name">
								<p>${productGallery[indexSlideProductGallery].productBlockThird.productName}</p>
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
 		for (var i = 0; i < productGallery[indexSlideProductGallery].productBlockFirst[0].productImg.length; i++) {
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
									<img src="${productGallery[indexSlideProductGallery].productBlockFirst[0].productImg[indexColor].clothesColor}">
								</div>
 										`)
 	};
 	changeClothesColor ();

 	function addClassProductGallerySelector () {
		$('#product-listing-selectors li').eq([indexSlideProductGallery]).addClass('current-selector');
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
		indexSlideProductGallery < productGallery.length-1 ? indexSlideProductGallery ++ : indexSlideProductGallery = 0;
		createProductGallerySlide ();
		createColorSelector ();
		$('#product-listing-selectors li').removeClass('current-selector');
		addClassProductGallerySelector ();
		listenChangeProductColor();
	});

	var prevSlideProductGallery = $('#product-arrow-left').on('click', function (event) {
		event.preventDefault();
		indexSlideProductGallery > 0 ? indexSlideProductGallery -- : indexSlideProductGallery = productGallery.length-1;
		createProductGallerySlide ();
		createColorSelector ();
		$('#product-listing-selectors li').removeClass('current-selector');
		addClassProductGallerySelector ();
		listenChangeProductColor();
	});

	$('#product-listing-selectors li').on('click', function (event) {
		event.preventDefault();
		$('#product-listing-selectors li').removeClass('current-selector');
		indexSlideProductGallery = $(this).index();
		addClassProductGallerySelector ();
		createProductGallerySlide();
		createColorSelector ();
		listenChangeProductColor();
	});
});
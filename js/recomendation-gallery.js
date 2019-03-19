"use strict";

$(() => {

	var indexSlideRecomendationGallery = 0;

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
						<img src="${recomendationGallery[indexSlideRecomendationGallery].mainImgUrl}" alt="stylistLindsayPearce">	
					</div>
					<div class="recomended-stylists">
						<div class="title">
							<h2>recomended-stylists</h2>
							<img src="./assets/img/divider-gray.png">	
						</div>
						<div class="stylist">
							<div class="name-stylist">
								<p>${recomendationGallery[indexSlideRecomendationGallery].stylistName}</p>
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
									<p>${recomendationGallery[indexSlideRecomendationGallery].description}</p>
								</div>
								<div class="contact-stylist">
									<a href="${recomendationGallery[indexSlideRecomendationGallery].contactStylistUrl}">Contact with ${recomendationGallery[indexSlideRecomendationGallery].stylistName}</a>
								</div>
							</div>
						</div>	
					</div>
				</div>
			`)
	};
	createRecomendationGallerySlide ();

 	var nextSlideRecomendation = $('#recomendation-arrow-right').on('click', function (event) {
 		event.preventDefault();
 		indexSlideRecomendationGallery < recomendationGallery.length-1 ? indexSlideRecomendationGallery ++ : indexSlideRecomendationGallery= 0;
 		createRecomendationGallerySlide ()
 	});

 	var prevSlideRecomendation = $('#recomendation-arrow-left').on('click', function (event) {
 		event.preventDefault();
 		indexSlideRecomendationGallery > 0 ? indexSlideRecomendationGallery -- : indexSlideRecomendationGallery = recomendationGallery.length-1;
 		createRecomendationGallerySlide ()
 	});
});

const jsonData = [
    {
        "products": [
            {
                "productId": "01",
                "name": "Aperol 750mL",
                "price": "54,23",
                "image": "https://i.imgur.com/DtS2Bgy.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": true,
                "classico": false,
            },
            {
                "productId": "02",
                "name": "Bitter Campari 900mL",
                "price": "48,51",
                "image": "https://i.imgur.com/tvC8ObR.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": true,
            },
            {
                "productId": "03",
                "name": "Bitter Negroni Campari 500mL",
                "price": "134,00",
                "image": "https://i.imgur.com/IdsY7PX.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": true,
            },
            {
                "productId": "04",
                "name": "Cinzano Pro Spritz 750mL",
                "price": "48,50",
                "image": "https://i.imgur.com/8yll07A.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": false,
            },
            {
                "productId": "05",
                "name": "Combo Aperol Spritz",
                "price": "106,80",
                "image": "https://i.imgur.com/sgzX5On.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": false,
            },
            {
                "productId": "06",
                "name": "Gin london dry bulldog 750mL",
                "price": "149,90",
                "image": "https://i.imgur.com/Zub5NYx.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": true,
            },
            {
                "productId": "07",
                "name": "Vermute Cinzano Rosso 1000mL",
                "price": "32,68",
                "image": "https://i.imgur.com/cTsy62f.jpg",
                "redirect_link": "#",
                "oferta": true,
                "destaque": false,
                "classico": true,
            },
            {
                "productId": "08",
                "name": "Whisky Wild Turkey Original 1000mL",
                "price": "194,90",
                "image": "https://i.imgur.com/irt4HD6.jpg",
                "redirectLink": "#",
                "oferta": true,
                "destaque": false,
                "classico": false,
            }
        ]
    }, {
        "assets": [
            {
                "assetId": "01",
                "name": "hero_banner",
                "type": "image",
                "content": "https://i.imgur.com/Zl713AI.jpg"
            },
            {
                "assetId": "02",
                "name": "banner_aperol_desktop",
                "type": "image",
                "content": "https://i.imgur.com/ABRTsXd.jpg"
            },
            {
                "assetId": "03",
                "name": "banner_campari_negroni_desktops",
                "type": "image",
                "content": "https://i.imgur.com/1MrGGhC.jpg"
            },
            {
                "assetId": "04",
                "name": "destaque_negrone",
                "type": "image",
                "content": "https://imgur.com/la3Fhlj"
            }
        ]
    }];

// #TODO: essas constantes serem um único objeto ?
const emOferta = jsonData[0].products.filter(function (e) {
    return e.oferta == true;
});

const emDestaque = jsonData[0].products.filter(function (e) {
    return e.destaque == true;
});

const emClassico = jsonData[0].products.filter(function (e) {
    return e.classico == true;
});

const productTemplate = `
    <div v-for="product in products" :key="product.productId" class="col col-3 product__card">
        <div class="product__card__main">
            <img class="product__card__main-image" :src="product.image" />
            <h3 class="product__card__main-name">{{product.name}}</h3>
        </div>
        <div class="product__card__info">
            <div class="product__card__info-price">
                <p class="product__card__info-price-text">A partir de</p>
                <h2 class="product__card__info-price-price"><span>R$</span>{{product.price}}</h2>
            </div>
            <button class="button product__card__info-button" type="button">Ver Ofertas</button>
        </div>
    </div>
`;

Vue.component('hero-banner', {
    template: `
    <header>
        <img class="header__heroBanner" :src="image"
            alt="Banner: A originalidade dos clássicos na sua casa">
    </header>
    `,
    data() {
        return {
            image: './assets/img/hero_banner.jpg'
        }
    }
});

Vue.component('emphasis', {
    template: `
    <div class="row duasMetades__content">
    <iframe class="col col-8 intro__content-video" :src=video
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="col"></div>
    ${productTemplate}
</div>
    `,
    data() {
        return {
            products: emDestaque,
            video: 'https://www.youtube.com/embed/Kz6WnrHOuv0'
        }
    }
})

Vue.component('classics', {
    template: `
        <div class="row" id="products">
            ${productTemplate}
        </div>
    `,
    data() {
        return {
            products: emClassico
        }
    }
});

Vue.component('offers', {
    template: `
        <div class="row" id="products">
            ${productTemplate}
        </div>
    `,
    data() {
        return {
            products: emOferta
        }
    }

})

var app = new Vue({
    el: '#app',
});
<template>
    <section class="details-container">
        <picture>
            <source media="(min-width: 1000px)" 
                :srcset="require(`./../assets/${pageFileName}/desktop/image-hero.jpg`)">    
            <source media="(min-width: 700px)" 
                    :srcset="require(`./../assets/${pageFileName}/tablet/image-hero.jpg`)">
            <img :src="require(`./../assets/${pageFileName}/mobile/image-hero.jpg`)"  
                    alt=""
                    class="details-img">
        </picture>
        <div class="white-div"></div>
        <div class="page-details">
            <h2 class="large-heading">{{ largeHeading}}</h2>
            <div class="line"></div>
            <h2>{{ subheading }}</h2>
            <p class="description">{{ description }}</p>
        </div>
    </section>
</template>

<script>        
export default {
    name: 'Details',
    props: [ 'largeHeading','subheading', 'description', 'pageFileName']
}
</script>

<style scoped>
    .page-details {
        padding: 0 1.5rem 3rem;
    }

    .details-img {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .white-div { 
        background-color: #fff;
        height: 3rem;
        width: 80%;
        position: relative;
        bottom: 3rem;
    }

    .line,
    .large-heading {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .details-desktop {
            display: none;
        }

        .details-img {
            height: 350px;
            object-fit: cover;
        }

        .details-container {
            position: relative;
        }

        .line{
            display: block;
        }

        .page-details {
           padding: 3rem 4rem 3rem; 
        }
    }

    @media screen and (min-width: 700px) {
        .large-heading,
        .details-tablet  {
            display: block;
        }

        .details-img {
            height: 700px;
        }

        .white-div {
            display: none;
        }

        .details-container {
            padding: 0 4rem;
        }

        .page-details {
            padding: 0 3rem;
            position: absolute;
            background-color: #fff;
            top: 17rem;
            height: 28rem;
            width: 75%;
            right: 0;
        }

        .large-heading {
            position: relative;
            bottom: 3rem;
            left: 2rem;
            font-size: 6.2rem;
        }
    }

    @media screen and (min-width: 1000px) {
        .details-img  {
            display: block;
            width: 55%;
            height: 700px;
            object-fit: cover;
        }

        .details-container {
            padding: 0 6rem;
        }

        .page-details {
            padding: 0 5rem;
            top: 15rem;
            height: 29rem;
            width: 60%;
            right: 0;
        }

        .large-heading {
            left: -3rem;
            font-size: 7.5rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .details-container {
            padding: 0 10rem;
        }

        .page-details {
            padding: 0 5rem;
            top: 13rem;
            height: 31rem;
            width: 51%;
            right: 63px;
        }

        .large-heading {
            font-size: 9rem;
            left: -6rem;
        }
    }
</style>
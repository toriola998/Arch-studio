<template>
    <section class="details-container">
        <!--<div class="details-img-wrap">-->
            <!---SHOW IMAGE ONLY ON MOBILE DEVICES-->
            <img :src="require(`./../assets/${pageFileName}/mobile/image-hero.jpg`)" 
                alt="" class="details-img details-mobile"/>

            <!---SHOW IMAGE ONLY ON TABLET DEVICES-->
            <img :src="require(`./../assets/${pageFileName}/tablet/image-hero.jpg`)" 
                alt="" class="details-img details-tablet"/>

            <!---SHOW IMAGE ONLY ON DESKTOP DEVICES-->
            <img :src="require(`./../assets/${pageFileName}/desktop/image-hero.jpg`)"
            alt="" class="details-img details-desktop"/>
        <!--</div>--> 
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
    .large-heading,
    .details-tablet,
    .details-desktop {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .details-desktop {
            display: none;
        }

        .details-mobile {
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

        .details-tablet {
            height: 700px;
        }

        .details-mobile,
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
        .details-desktop  {
            display: block;
            width: 55%;
            height: 700px;
            object-fit: cover;
        }

        .details-container {
            padding: 0 6rem;
        }

        .details-mobile,
        .details-tablet  {
            display: none;
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
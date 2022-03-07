<template>
    <div class="details-container">
        <!--<div class="details-img-wrap">-->
            <!---SHOW IMAGE ONLY ON MOBILE DEVICES-->
            <img src="./../assets/about/mobile/image-hero.jpg" 
                alt="" class="details-img details-mobile"/>

            <!---SHOW IMAGE ONLY ON TABLET DEVICES-->
            <img src="./../assets/about/tablet/image-hero.jpg" 
                alt="" class="details-img details-tablet"/>

            <!---SHOW IMAGE ONLY ON DESKTOP DEVICES-->
            <img src="./../assets/about/desktop/image-hero.jpg" 
            alt="" class="details-img details-desktop"/>
        <!--</div>-->

        <div class="page-details">
            <h2 class="large-heading">About</h2>
            <div class="line"></div>
            <div class="white-div"></div>
            <h2>{{ heading }}</h2>
            <p class="description">{{ description }}</p>
        </div>
    </div>
</template>

<script>        
export default {
    name: 'Details',
    props: ['heading', 'description']
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
        .details-desktop,
        .white-div {
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

         .details-img-wrap {
            padding: 0 4rem;
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

        .details-mobile {
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
</style>
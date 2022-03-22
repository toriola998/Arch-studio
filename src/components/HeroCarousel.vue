<template>
    <div class="header">
        <div class="mobile-hero-section">
            <div class="home flex">
                <div>
                    <h1>Project <br> Paramour</h1>
                    <p class="note">Project made for an art museum near Southwest London. 
                    Project Paramour is a statement of bold, modern architecture.</p>
                    <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                </div>
            </div>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">01</button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">02</button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">03</button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4">04</button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./../assets/home/desktop/image-hero-paramour.jpg" class="d-block w-100" alt="Image of the Paramour Project">
                    <div class="carousel-caption d-none d-md-block">
                        <div>
                            <h1>Project <br> Paramour</h1>
                            <p class="note">Project made for an art museum near Southwest London. 
                            Project Paramour is a statement of bold, modern architecture.</p>
                            <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="./../assets/home/desktop/image-hero-seraph.jpg" class="d-block w-100" alt="Image of the Seraph Station Project">
                    <div class="carousel-caption d-none d-md-block">
                        <div>
                            <h1>Seraph <br> Station</h1>
                            <p class="note"> The Seraph Station project challenged us to design a unique 
                                station that would transport people through time. The result is a fresh and 
                                futuristic model inspired by space stations.
                            </p>
                            <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                        </div>
                    </div> 
                </div>

                <div class="carousel-item">
                    <img src="./../assets/home/desktop/image-hero-federal.jpg" class="d-block w-100" alt="Image of the Federal II Tower Project">
                    <div class="carousel-caption d-none d-md-block">
                        <div>
                            <h1>Federal II <br> Tower</h1>
                            <p class="note"> A sequel theme project for a tower originally built in the 1800s. We achieved
                            this with a striking look of brutal minimalism with modern touches.</p>
                            <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="./../assets/home/desktop/image-hero-trinity.jpg" class="d-block w-100" alt="Image of the Trinity Bank Tower">
                    <div class="carousel-caption d-none d-md-block">
                        <div>
                            <h1>Trinity Bank<br> Tower</h1>
                            <p class="note">Trinity Bank challenged us to make a concept for a 84 story building
                            located in the middle of a city with a high earthquake frequency. For this project
                            we used curves to blend design and stability to meet our objectives.</p>
                            <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import CtaButton from './CtaButton.vue'
export default {
    components: {
        CtaButton
    }
}
</script>

<style scoped>
    #carouselExampleCaptions{
        display: none;
    }

    .home {
        background-image: url('./../assets/home/mobile/image-hero-paramour.svg');
        justify-content: center; 
    }

    h1, 
    .note {
        color: #fff;
    }

    h1 {
        font-size: 2.8rem;
        line-height: 1.1;
    }

    .note {
        font-weight: 400;
        margin: 1rem 0 3rem;
        line-height: 1.6;
        font-size: .9rem;
    }

    @media screen and (min-width: 700px) {
        .home {
            background-image: url('./../assets/home/tablet/image-hero-paramour.png');
            height: 700px;
        }

        .home > div {
            width: 70% ;
        }

        h1 {
            font-size: 3rem;
        }
    }

    @media screen and (min-width: 1000px) {
         .header {
            padding: 0 6rem;
        }

       .mobile-hero-section {   /**HIDE MOBILE HERO ON DESKTOP AND SHOW CAROUSEL */
           display: none;
       }

       .note {
            margin: 1rem 0 1rem;
            line-height: 1.9;
            font-size: 1rem;
       }

    /****CAROUSEL STYLE STARTS ********** (HAD TO OVERRIDE SOME BOOTSTRAP STYLES) */
        #carouselExampleCaptions{
            display: block;
        }

        .carousel-caption {
            left: 40%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: unset;
            color: #fff;
            text-align: unset;
            width: 45%;
        }

        .carousel-indicators {
            bottom: -18px;
            right: auto;
            left: auto;
            margin-left: -4.3rem;
        }

        .carousel-indicators button {
            font-size: .9rem;
            font-weight: 700;
            text-indent: inherit;
            height: 70px;
            width: 70px;
            margin: auto;
            opacity: inherit;
            outline: 0;
            border: 0;
        }

        .carousel-indicators button:hover {
            background-color: #EEEFF4;
            color: #7D828F;
        }

        .carousel-indicators button.active {
            background-color: black;
            color: #fff;
        }
    /****CAROUSEL STYLE  ENDS ******** (HAD TO OVERRIDE SOME BOOTSTRAP STYLES) */
    }

    @media screen and (min-width: 1200px) {
        .header {
            padding: 0 10rem;
        }

        #home > div {
            width: 50% ;
        }

        h1 {
            font-size: 4rem;
        }

         .note {
            margin: 1rem 0 3rem;
       }
    }
</style>
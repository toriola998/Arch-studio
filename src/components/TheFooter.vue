<template>
    <footer role="content-info">
        <section class="footer-container">
            <div class="footer-inner">
                <div class="logo-bg flex">
                    <router-link to="/">
                        <img src="./../assets/footer-logo.svg" width="58" height="24"
                             alt="Arch Studio - Home">
                    </router-link>
                </div>

                <nav class="links flex">
                    <ul>
                        <li>
                            <router-link to="/portfolio">Portfolio</router-link>
                        </li>
                        <li>
                            <router-link to="/about-us">About us</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <CtaButton to="/portfolio" btnContent="See our portfolio" class="footer-btn"/>
        </section>
     </footer>
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
    .footer-container {
        background-color: #EEEFF4;
        padding-bottom: 3rem;
    }

    .logo-bg {
        background-color: #1B1D23;
        justify-content: center;
        width: 8rem;
        height: 8rem;
        margin: auto;
        position: relative;
        bottom: 3rem;
    }

    .links {
        justify-content: center;
    }

    li {
        margin-bottom: 2rem;
    }

    .footer-btn {
        width: 80%;
        margin: auto ;
    }

    @media screen and (min-width: 520px) {
        .footer-btn {
            width: 50%; 
        } 
    }

    @media screen and (min-width: 670px) {
        footer {
            position: relative;
        }

        .footer-container {
            padding-bottom: unset;
            background-color: initial;
        }

        .footer-inner {
            background-color: #EEEFF4;
            width: 85%;
        }

       .footer-inner,
        footer ul {
            display: flex;
        }

        .logo-bg {
            position: initial;
            bottom: 0;
            margin: unset;
        }

        .footer-btn {
            width: 32%; 
            position: absolute;
            z-index: 99999;
            right: 0;
            top: 2rem;
        } 
        
        footer li {
            margin: 0 .5rem;
        }

        .links {
            padding-left: 2rem;
        }
    }

     @media screen and (min-width: 1000px) {
        .footer-container {
            padding: 0 6rem;
        }

         .footer-btn {
            width: 23%; 
            z-index: 99999;
            right: 6rem;
        }

        footer li {
            margin: 0 1.3rem;
        }

        footer li a:hover {
            color: #979797;
        }

        .links {
            padding-left: 2.5rem ;
        }
     }

    @media screen and (min-width: 1200px) {
        .footer-container {
            padding: 0 10rem;
        }

         .footer-btn {
            width: 18%; 
            z-index: 99999;
            right: 10rem;
        }
    }
</style>
<template>
    <footer>
        <div class="footer-inner">
            <div class="logo-bg flex">
                <router-link to="/">
                    <img src="./../assets/footer-logo.svg" alt="logo">
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
        <CallToActionButton btnContent="See our portfolio" class="footer-btn"/>
     </footer>
</template>

<script>
import CallToActionButton from './CallToActionButton.vue'
export default {
    components: {
        CallToActionButton
    }
}
</script>

<style scoped>
    footer {
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
            padding-bottom: unset;
            background-color: initial;
        }

        .footer-inner {
            background-color: #EEEFF4;
            width: 85%;
        }

        footer,
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
            margin-top: 2rem;
        } 
        
        footer li {
            margin: 0 .5rem;
        }
    }

     @media screen and (min-width: 1000px) {
        footer {
            padding: 0 4rem;
        }

         .footer-btn {
            width: 23%; 
            z-index: 99999;
            right: 4rem;
        }

          footer li {
            margin: 0 1.3rem;
        }

        .links {
            padding-left: 2.5rem ;
        }
     }

    @media screen and (min-width: 1200px) {
        footer {
            padding: 0 10rem;
        }

         .footer-btn {
            width: 18%; 
            z-index: 99999;
            right: 10rem;
        }
    }
</style>
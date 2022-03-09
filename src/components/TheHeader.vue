<template>
    <div class="flex nav-top">
        <router-link to="/">
            <img src="./../assets/logo.svg" alt="logo" class="logo"/>
        </router-link>

        <img src="./../assets/icons/icon-close.svg" 
            alt="close-icon" 
            v-if="showNav"
            @click="showNav = !showNav"/>

        <img src="./../assets/icons/icon-hamburger.svg" 
            alt="hamburger-menu" 
            class="menu"
            v-if="!showNav"
            @click="showNav = !showNav"/>

        <div class="overlay" v-if="showNav"></div>
        <nav class="nav-bar" v-show="showNav">
            <ul>
                <li>
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="/about-us">About Us</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    data () {
        return {
            showNav: false,
        }
    },
}
</script>

<style scoped>
    .logo,
    menu {
        height: auto;
        width: auto;
    }

    .nav-top{
        height: 6rem;
        justify-content: space-between;
        padding: 0 1.5rem;
    }

    .nav-bar {
        background-color: #EEEFF4;
        position: absolute;
        right: 0;
        width: 80%;
        top: 5.5rem;
        z-index: 9999999;
        padding: 3rem 3rem 2rem 3rem;
    }
    
    .nav-bar li {
        padding-bottom: 2rem;
    }

    .overlay  {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 5.5rem;
        z-index: 9999999;
        min-height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media screen and (min-width: 520px) {
        .nav-top {
            padding: 0 4rem;
        }

        .nav-bar {
            width: 70%;
        }
    }

    
    @media screen and (min-width: 700px) {
        .menu {
            display: none;
        }

        .nav-top {
            height: 8rem;
        }

        .nav-bar {
            display: block !important;
            background-color: initial;
            width: initial;
            top: 0.5rem;
            right: 5rem;
        }

        .nav-bar ul {
            display: flex;
        }

        .nav-bar li {
            padding: 0 2rem;
        }
    }

    @media screen and (min-width: 1000px) {
        .nav-top {
            padding: 0 6rem;
        }

        .nav-bar {
            height: 10rem;
            right: 20rem;
        }

        .nav-bar li a:hover {
            color: #979797;
        }
    }

    @media screen and (min-width: 1200px) {
        .nav-bar {
            right: 35rem;
        }

        .nav-top {
            padding: 0 10rem;
        }
    }
</style>

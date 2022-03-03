<template>
    <footer>
        <div class="logo-bg flex">
            <img src="./../assets/footer-logo.svg" alt="logo">
        </div>

        <div class="links flex">
            <ul>
                <li>
                    <router-link to="">Portfolio</router-link>
                </li>
                <li>
                    <router-link to="">About us</router-link>
                </li>
                <li>
                    <router-link to="">Contact</router-link>
                </li>
            </ul>
        </div>
        <Button btnContent="See our portfolio" class="footer-btn"/>
     </footer>
</template>

<script>
import Button from './Button.vue'
export default {
    components: {
        Button
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
</style>
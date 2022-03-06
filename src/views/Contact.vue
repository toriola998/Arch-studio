<template>
    <Header />
    <section class="contact">
        <div class="line"></div>
        <h2>Contact<br> Details</h2>
        <ContactInfo headingTitle="Main Office" mail="Mail: archone@mail.com"
                    address="Address: 1892  Chenoweth Drive TN" phone="Phone: 123-456-3451" />

        <ContactInfo headingTitle="Office II" mail="Mail: archtwo@mail.com"
                    address="Address: 3399  Wines Lane TX" phone="Phone: 832-123-4321" />
    </section>
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import ContactInfo from './../components/ContactInfo.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'Contact',
    components: {
        Header,
        ContactInfo,
        Footer
    }
}
</script>

<style scoped>
    .contact {
        padding: 0 1.5rem 4rem;
    }

    
</style>
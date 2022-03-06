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

    <section>
        <img src="./../assets/contact/mobile/image-map.png" alt="map-to-our office" class="map"/>
    </section>

    <section class="contact-form">
        <h2>Connect<br> with us</h2>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message"></textarea>
            <button type="submit" class="flex"><img src="./../assets/icons/icon-arrow.svg" alt=""/></button> 
        </form>
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
    .contact,
    .contact-form {
        padding: 0 1.5rem 4rem;
    }

    .map {
        width: 100%;
        height: auto;
    }

    input,
    textarea,
    button {
        outline: none;
        border: none;
    }

    input,
    textarea {
        width: 100%;
        margin-top: 1.5rem;
        padding: 1rem 0 1rem 2rem;
        border-bottom: 1px solid #1B1D23; 
        font-family: 'Spartan', sans-serif;
    }

    textarea {
        margin-top: 3rem;
    }

    input::placeholder,
    textarea::placeholder {
        font-size: .9rem;
        font-weight: 700;
        color: #C8CCD8;
    }

    form button {
        background-color: #1B1D23;
        height: 3.8rem;
        width: 3.8rem;
        margin-left: auto;
        position: relative;
        top: -0.4rem;
        justify-content: center;
    }

</style>
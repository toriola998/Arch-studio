<template>
    <Header />
    <Details pageFileName="contact" 
        largeHeading="Contact"
        subheading="Tell us about your project"
        description="We’d love to hear more about your project. Please, leave a message 
        below or give us a call. We have two offices, one in Texas and one in Tennessee.
        If you find yourself nearby, come say hello!"
        />
    <section class="contact">
        <div class="line"></div>
        <div class="flex-contact">
            <h2>Contact <br> Details</h2>
            <ContactInfo headingTitle="Main Office" mail="Mail: archone@mail.com"
                        address="Address: 1892  Chenoweth Drive TN" phone="Phone: 123-456-3451" />
            <ContactInfo headingTitle="Office II" mail="Mail: archtwo@mail.com"
                        address="Address: 3399  Wines Lane TX" phone="Phone: 832-123-4321" />
        </div>
    </section>

    <section class="office-map">
        <img src="./../assets/contact/mobile/image-map.png" alt="map-to-our office" class="map mobile-map"/>
        <img src="./../assets/contact/tablet/image-map.png" alt="map-to-our office" class="map tablet-map"/>
        <img src="./../assets/contact/desktop/image-map.png" alt="map-to-our office" class="map desktop-map"/>
    </section>

    <section class="contact-form">
        <h2>Connect <br> with us</h2>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message"></textarea>
            <button type="submit" class="flex">
                <img src="./../assets/icons/icon-arrow.svg" alt=""/>
            </button> 
        </form>
    </section>
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import Details from './../components/Details.vue'
import ContactInfo from './../components/ContactInfo.vue'
import Footer from './../components/Footer.vue'

export default {
    name: 'Contact',
    components: {
        Header,
        Details,
        ContactInfo,
        Footer
    }
}
</script>

<style scoped>
    .contact {
        padding: 0 1.5rem 4rem;
    }

    .contact-form {
        padding: 4rem 1.5rem 7rem;
    }

    .map {
        width: 100%;
        height: auto;
    }

    input,
    textarea,
    button {
        outline: 0;
        border: 0;
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

    .tablet-map,
    .desktop-map {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .contact {
            padding: 0 4rem 4rem;
        }

        .contact-form {
            padding: 4rem 4rem 7rem;
        }

        .office-map {
            padding: 0 4rem;
        }

    } 
    @media screen and (min-width: 700px) {
        .contact-form {
            display: grid;
            grid-template-columns: auto auto;
        }

        .contact-form h2 {
            margin: 2rem 3rem 0 0;
        }

        .tablet-map {
            display: none;
        }

        .mobile-map,
        .desktop-map {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
        .flex-contact {
            display: grid;
            grid-template-columns: auto auto auto;
        }

        .desktop-map {
            display: block;
        }

        .tablet-map,
        .mobile-map {
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
         .contact {
            padding: 0 10rem 4rem;
        }

        .contact-form {
            padding: 4rem 10rem 7rem;
        }

        .office-map {
            padding: 0 10rem;
        }
    }
</style>
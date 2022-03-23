<template>
    <VerticalTitle pageTitle="CONTACT" />
    <TheHeader />
    <header>
        <Details pageFileName="contact" 
            largeHeading="Contact"
            subheading="Tell us about your project"
            description="We'd love to hear more about your project. Please, leave a message 
            below or give us a call. We have two offices, one in Texas and one in Tennessee.
            If you find yourself nearby, come say hello!"
            />
    </header>
    <main>
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
            <picture>
                <source media="(min-width: 1000px)" 
                    src="./../assets/contact/desktop/image-map.png">    
                <source media="(min-width: 700px)" 
                       src="./../assets/contact/tablet/image-map.png">
                <img src="./../assets/contact/mobile/image-map.png"
                     alt="Diagram of the map to our office"
                     class="map">
            </picture>
        </section>

        <section class="contact-form">
            <h2>Connect <br> with us</h2>
            <form @submit.prevent="submitForm()">
                <div class="flex input-wrap">
                    <input type="text" placeholder="Name" v-model="name"/>
                    <p class="error" v-if="nameError">Can't be empty</p>
                </div>

                <div class="flex input-wrap">
                    <input type="text" placeholder="Email" v-model="email"/>
                    <p class="error" v-if="emailError">Can't be empty</p> 
                    <p class="error" v-if="invalidEmailError">Invalid Email</p>
                </div>
                
                <div class="flex input-wrap" style="margin-top: 3rem">
                    <textarea type="text" placeholder="Message" v-model="message"></textarea>
                    <p class="error" v-if="messageError">Can't be empty</p>
                </div>
                
                <button type="submit" class="flex">
                    <img src="./../assets/icons/icon-arrow-white.svg" alt="Submit your form" style="height: 2rem"/>
                </button> 
            </form>
        </section>
    </main>
    <TheFooter />
</template>

<script>
import VerticalTitle from '../components/VerticalTitle.vue'
import TheHeader from '../components/TheHeader.vue'
import Details from './../components/Details.vue'
import ContactInfo from './../components/ContactInfo.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Contact',
    components: {
        VerticalTitle,
        TheHeader,
        Details,
        ContactInfo,
        TheFooter
    },
    data () {
        return {
            name: "",
            email: "",
            message: "",
            nameError: false,
            emailError: false,
            invalidEmailError: false,
            messageError: false,
        }
    }, 
    methods: {
        validEmail (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        submitForm () {
            /*******FORM VALIDATION FOR NAME INPUT FIELD */
            if(!this.name) { //if email field is empty
                this.nameError = true //show error message
            }else {
                this.nameError = false //remove error message if input field isn't empty
            }
            
            /*******FORM VALIDATION FOR EMAIL INPUT FIELD */
            if(!this.email) {  //if email field is empty
                this.emailError = true  //show "can't be empty"
            } else if (!this.validEmail(this.email)) {   //if it isn,t empty but its invalid
                    this.invalidEmailError = true  // show "invalid email"
                    this.emailError = false   //remove cant be empty since it's not empty, just invalid
            } else {
                this.emailError = false
                this.invalidEmailError = false
            }
            
            /*******FORM VALIDATION FOR MESSAGE TEXTAREA */
            if(!this.message) {
                this.messageError = true  //show error message
            }else {
                this.messageError = false
            }        
        }
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

    .input-wrap {
        margin-top: 1.5rem;
        border-bottom: 1px solid #1B1D23;  
    }

    input,
    textarea {
        font-family: 'Spartan', sans-serif;
        width: 100%;
        padding: 1rem 0 1rem 2rem;
    }

    input::placeholder,
    textarea::placeholder {
        font-size: .9rem;
        font-weight: 700;
        color: #C8CCD8;
    }

    .input-wrap:hover {
         border-bottom: 2.4px solid #1B1D23;
    }

    form button {
        background-color: #1B1D23;
        height: 3.8rem;
        width: 3.8rem;
        margin-left: auto;
        position: relative;
        top: 0;
        justify-content: center;
    }

    .error {
        color: #DF5656;
        font-size: .7rem;
        font-weight: 700;
        width: 140px;
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
        .contact {
            padding: 6rem 4rem 0rem 4rem;
        }

        .contact-form {
            display: grid;
            grid-template-columns: auto auto;
        }

        .contact-form h2 {
            margin: 2rem 3rem 0 0;
        }
    }

    @media screen and (min-width: 1000px) {
        .flex-contact {
            display: grid;
            grid-template-columns: auto auto auto;
        }

        .contact{
            padding: 8rem 6rem;
        }

        .contact-form {
            padding: 4rem 6rem 7rem;
        }

        .office-map {
            padding: 0 6rem;
        }

        .large-heading {
            left: -10rem !important;
        }
    }

    @media screen and (min-width: 1200px) {
        .contact {
            padding: 10rem;
        }

        .contact-form {
            padding: 4rem 10rem 7rem;
        }

        .office-map {
            padding: 0 10rem;
        }
    }
</style>
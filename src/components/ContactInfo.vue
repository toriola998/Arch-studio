<template>
    <div class="contact-info-wrap">
        <div>
            <p class="heading-p">{{ headingTitle }}</p>
            <div class="contact-info">
                <a href=""> {{ mail }}</a>
                <address> {{ address }}</address>
                <a href=""> {{ phone }}</a>
            </div>
        </div>
        <div class="flex">
            <p><strong>View on Map</strong></p>
            <img src="./../assets/icons/icon-arrow1.svg" alt="go-to-arrow"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactDetails',
    props: ['headingTitle', 'mail', 'address', 'phone']
}
</script>

<style scoped>
    .contact-info {
        margin: 1rem 0;
    }

    .contact-info a,
    .contact-info address{
        font-weight: 500;
        font-size: .9rem;
        font-style: normal;
        padding-bottom: .8rem;
        display: block;
        color: #60636D;
    }

    .heading-p {
        font-weight: 700;
    } 

    .contact-info-wrap {
        margin-top: 3.5rem ;
    }

    @media screen and (min-width: 700px) {
        .contact-info-wrap {
            display: flex;
            justify-content: space-between ;
        }
    }

    @media screen and (min-width: 1000px) {
        .contact-info-wrap {
            display: initial;
            margin-top: unset;
        }
    }
</style>
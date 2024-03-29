<template>
    <VerticalTitle pageTitle="ABOUT" />
    <TheHeader />
    <header>
        <Details 
            pageFileName="about" 
            largeHeading="About" 
            subheading="Your team of professionals"
            description="Our small team of world-class professionals will work with
                you every step of the way. Strong relationships are at the core of everything we do.
                This extends to the relationship our projects have with their surroundings." 
        />
    </header>

    <main>
        <section class="about" aria-labelledby="our-heritage">
            <div>
                <div class="line"></div>
                <h2 id="our-heritage">Our<br> Heritage</h2>
                <p class="description">Founded in 2007, we started as a trio of architects. Our complimentary skills and
                    relentless attention to detail turned Arch into one of the most sought after
                    boutique firms in the country.</p>
                <p class="description">Speciliazing in Urban Design allowed us to focus on creating exceptional structures
                    that live in harmony with their surroundings. We consider every detail from every
                    surrounding element to inform our designs.</p>
                <p class="description">Our small team of world-class professionals provides input on every project.</p>
            </div>
            <img src="./../assets/about/desktop/image-heritage.jpg" alt="" class="img-heritage" />
        </section>
        <section class="leaders-container" aria-labelledby="the-leaders">
            <h2 id="the-leaders">The<br> Leaders</h2>
            <div>
                <LeaderLayout 
                    v-for="(item, index) in leaders" 
                    :key="index" 
                    :avatarName="item.avatarName"
                    :personName="item.personName" 
                    :personRole="item.personRole" 
                />
            </div>
        </section>
    </main>
    <TheFooter />
</template>

<script>
import VerticalTitle from '../components/VerticalTitle.vue'
import TheHeader from '../components/TheHeader.vue'
import Details from './../components/Details.vue'
import LeaderLayout from './../components/LeaderLayout.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    name: 'About',
    components: {
        VerticalTitle,
        TheHeader,
        Details,
        LeaderLayout,
        TheFooter
    },
    data() {
        return {
            leaders: [
                {
                    avatarName: "avatar-jake",
                    personName: "Jake Richards",
                    personRole: "Chief Architect"
                },
                {
                    avatarName: "avatar-thompson",
                    personName: "Thompson Smith",
                    personRole: "Head of Finance"
                },
                {
                    avatarName: "avatar-jackson",
                    personName: "Jackson Rourke",
                    personRole: "Lead designer"
                },
                {
                    avatarName: "avatar-maria",
                    personName: "Maria Simpson",
                    personRole: "Senior Architect"
                }
            ]
        }
    }
}
</script>

<style scoped>
.about,
.leaders-container {
    padding: 0 1.5rem 5rem;
}

.leaders-container h2 {
    margin: 0 0 4rem 0;
}

.img-heritage {
    display: none;
}

@media screen and (min-width: 520px) {

    .about,
    .leaders-container {
        padding: 0 4rem 5rem;
    }
}

@media screen and (min-width: 700px) {
    .about {
        padding-top: 4rem;
    }

    .leaders-container>div {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

@media screen and (min-width: 1000px) {

    .about,
    .leaders-container {
        padding: 8rem 6rem 5rem;
    }

    .about {
        display: flex;
        justify-content: space-between;
    }

    .leaders-container {
        display: grid;
        grid-template-columns: auto auto;
    }

    .about>div {
        width: 50%;
        margin-right: 3rem;
    }

    .img-heritage {
        display: block;
        height: auto;
        width: 45%;
    }

    .leaders-container h2 {
        margin: 0 6rem 4rem 0;
    }
}

@media screen and (min-width: 1200px) {

    .about,
    .leaders-container {
        padding: 10rem 8rem 5rem;
    }

    .about>div {
        width: 45%;
    }

    .img-heritage {
        width: 45%;
    }
}
</style>

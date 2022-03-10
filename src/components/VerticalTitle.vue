<template>
    <div class="vertical-wrap">
        <div class="vertical-line"></div>
        <p class="page-title"> HOME</p>
    </div>
</template>

<script>
export default {
    name: 'VerticalTitle',
}
</script>

<style scoped>
    .vertical-wrap {
        display: none;
    }

    @media screen and (min-width: 700px) {
        .vertical-wrap {
            position: absolute;
            left: -3rem;
            display: flex;
            flex-direction: column;
        }

        .vertical-line,
        .page-title {
            transform: rotateX(90deg);
            -webkit-transform: rotate(90deg);
        }

        .vertical-line {
            background-color: #C8CCD8;
            height: 1px;
            width: 10rem;
        }

        .page-title {
            color: #C8CCD8;
            margin: 13rem 0 0 -0.5rem;
            font-size: 1rem;
            letter-spacing: 14px;
        }
    }

    @media screen and (min-width: 1000px) {
        .vertical-wrap {
            left: -2rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .vertical-wrap {
            left: 0rem;
        }

        .page-title {
            font-size: 1.3rem;
        }
    }
</style>
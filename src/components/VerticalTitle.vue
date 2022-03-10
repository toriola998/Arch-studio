<template>
    <div class="vertical-wrap">
        <div class="vertical-line"></div>
        <p class="page-title"> HOME</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .vertical-line {
        background-color: #C8CCD8;
        height: 1px;
        width: 10rem;
        transform: rotateX(90deg);
        -webkit-transform: rotate(90deg);
    }

    .vertical-wrap {
        position: absolute;
        left: -3rem;
        display: flex;
        flex-direction: column;
    }

    .page-title {
        color: #C8CCD8;
        transform: rotateX(90deg);
        -webkit-transform: rotate(90deg);
        margin-top: 13rem;
        margin-left: -0.5rem;
        font-size: 1rem;
        letter-spacing: 12px;
    }
</style>
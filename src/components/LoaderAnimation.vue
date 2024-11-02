<template>
    <div v-if="isloading" class="loader">
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    name: 'LoaderAnimation',
    data() {
        return {
            isloading: true
        };
    },
    mounted() {
        setTimeout(() => {
            this.isloading = false;
        }, 5000);
    }
};
</script>

<style scoped>
.loader{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    z-index: 9999;
}
.spinner{
    border: 16px solid #f3f3f3;
    border-top: 16px solid #d4af37;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}
@keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
</style>
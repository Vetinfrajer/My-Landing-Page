<template>
    <div v-if="isloading" class="loader">
        <div class="loader-content">
            <div class="matrix-bg">
                <span v-for="(h, i) in hexArray" :key="i" class="matrix-char">{{ h }}</span>
            </div>
            <div class="loading-text">
                <span v-for="(l, i) in loadingArray" :key="i" :style="{ animationDelay: (i * 0.12) + 's' }">{{ l }}</span>
            </div>
            <div class="super-spinner"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoaderAnimation',
    data() {
        return {
            isloading: true,
            loadingArray: 'Loading...'.split(''),
            hexArray: '4a 73 65 6d 20 62 c5 af 68 20 70 72 c3 a1 63 65 20 73 20 61 69'.split(' ')
        };
    },
    mounted() {
        setTimeout(() => {
            this.isloading = false;
        }, 4000);
    },
    methods: {
        randomChar() {
            const chars = '0123456789ABCDEF';
            return chars[Math.floor(Math.random() * chars.length)];
        }
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
    background: rgba(35,37,38,0.95);
    z-index: 9999;
    backdrop-filter: blur(12px);
    animation: loaderFadeOut 1.2s cubic-bezier(.25,.8,.25,1) 3.7s forwards;
}
@keyframes loaderFadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; pointer-events: none; }
}
.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.matrix-bg {
    display: flex;
    flex-wrap: wrap;
    width: 340px;
    margin-bottom: 32px;
    justify-content: center;
    align-items: center;
    filter: blur(0.5px) brightness(1.2);
}
.matrix-char {
    color: #5ecbff;
    font-family: 'Fira Mono', 'Consolas', monospace;
    font-size: 1.5rem;
    opacity: 0.7;
    margin: 0 4px 8px 4px;
    animation: matrixAnim 1.2s infinite alternate;
}
@keyframes matrixAnim {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
}
.loading-text {
    font-size: 2.2rem;
    font-weight: bold;
    color: #5ecbff;
    letter-spacing: 2px;
    margin-bottom: 36px;
    display: flex;
    gap: 0.1em;
    text-shadow: 0 0 24px #5ecbff, 0 0 48px #7b6cf6;
    font-family: 'Montserrat', 'Fira Mono', 'Consolas', monospace;
    user-select: none;
}
.loading-text span {
    display: inline-block;
    opacity: 0.7;
    transform: translateY(0);
    animation: loadingBounce 1.2s infinite alternate;
}
@keyframes loadingBounce {
    0% { opacity: 0.7; transform: translateY(0); }
    60% { opacity: 1; transform: translateY(-8px) scale(1.1); }
    100% { opacity: 0.7; transform: translateY(0); }
}
.super-spinner {
    border: 8px solid rgba(255,255,255,0.12);
    border-top: 8px solid #5ecbff;
    border-right: 8px solid #7b6cf6;
    border-bottom: 8px solid #a18cd1;
    border-left: 8px solid #fff;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    animation: spinGod 1.2s linear infinite, spinnerGlow 2s infinite alternate;
    box-shadow: 0 0 32px #5ecbff, 0 0 64px #7b6cf6;
}
@keyframes spinGod {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
@keyframes spinnerGlow {
    0% { box-shadow: 0 0 32px #5ecbff, 0 0 64px #7b6cf6; }
    100% { box-shadow: 0 0 64px #fff, 0 0 96px #a18cd1; }
}
</style>
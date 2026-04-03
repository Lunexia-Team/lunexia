<!-- Unity Game View component -->

<!-- HTML part -->
<template>
    <HeroSection>
        <h1>Start Your Adventure!</h1>
    </HeroSection>
    <div class="page">
        <div ref="container" class="unity-wrapper">
            <canvas id="unity-canvas" ref="unityCanvas" tabindex="-1"></canvas>
            <Transition name="fade">
                <div v-if="isLoading" class="unity-loading-overlay">
                    <div class="unity-loading-content">
                        <div class="unity-logo" :style="logoStyle"></div>
                        <div class="progress-container">
                            <div class="progress-empty" :style="progressEmptyStyle">
                                <div class="progress-full" :style="progressFullStyle"></div>
                            </div>
                            <span class="progress-text">{{ Math.round(progress) }}%</span>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<!-- JavaScript part -->
<script setup>
    import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import HeroSection from '../components/HeroSection.vue';

    const props = defineProps({
        slug: { type: String, default: '' }
    });

    const route = useRoute();
    const unityCanvas = ref(null);
    const container = ref(null);
    const isLoading = ref(true);
    const progress = ref(0);
    let unityInstance = null;
    let scriptTag = null;

    const folderName = computed(() => props.slug || route.params.slug);

    const getAssetPath = (fileName) => `/gameSource/${folderName.value}/TemplateData/${fileName}`;

    const logoStyle = computed(() => ({
        backgroundImage: `url('${getAssetPath('unity-logo-dark.png')}')`
    }));

    const progressEmptyStyle = computed(() => ({
        backgroundImage: `url('${getAssetPath('progress-bar-empty-dark.png')}')`
    }));

    const progressFullStyle = computed(() => ({
        width: `${progress.value}%`,
        backgroundImage: `url('${getAssetPath('progress-bar-full-dark.png')}')`
    }));

    const loadUnityGame = () => {
        if (!folderName.value) return;

        const buildUrl = `/gameSource/${folderName.value}/Build`;
        const loaderUrl = `${buildUrl}/${folderName.value}.loader.js`;

        const config = {
            dataUrl: `${buildUrl}/${folderName.value}.data.unityweb`,
            frameworkUrl: `${buildUrl}/${folderName.value}.framework.js.unityweb`,
            codeUrl: `${buildUrl}/${folderName.value}.wasm.unityweb`,
            streamingAssetsUrl: "StreamingAssets",
            companyName: "Lunexia",
            productName: folderName.value,
            productVersion: "0.1.0",
            devicePixelRatio: window.devicePixelRatio || 1,
        };

        scriptTag = document.createElement("script");
        scriptTag.src = loaderUrl;
        scriptTag.async = true;

        scriptTag.onload = () => {
            window.createUnityInstance(unityCanvas.value, config, (p) => {
                progress.value = 100 * p;
            })
                .then((instance) => {
                    unityInstance = instance;
                    isLoading.value = false;
                })
                .catch((err) => {
                    console.error("Unity Loading Error:", err);
                });
        };

        document.body.appendChild(scriptTag);
    };

    onMounted(() => {
        loadUnityGame();
    });

    onBeforeUnmount(() => {
        if (unityInstance) {
            unityInstance.Quit().then(() => {
                unityInstance = null;
            });
        }
        if (scriptTag) {
            scriptTag.remove();
        }
    });

    const toggleFullscreen = () => {
        if (unityInstance) {
            unityInstance.SetFullscreen(1);
        }
    };

    defineExpose({ toggleFullscreen });
</script>

<!-- CSS part -->
<style scoped>
    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        background: radial-gradient(circle at center, #111827 50%, #030712 100%);
        padding: 20px;
    }

    .unity-wrapper {
        position: relative;
        width: 100%;
        max-width: 1200px;
        aspect-ratio: 16 / 10;
        margin: 0 auto;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    #unity-canvas {
        width: 100% !important;
        height: 100% !important;
        display: block;
    }

    .unity-loading-overlay {
        position: absolute;
        inset: 0;
        background: #231f20;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .unity-loading-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .unity-logo {
        width: 154px;
        height: 130px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .progress-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .progress-empty {
        width: 200px;
        height: 18px;
        background-size: 100% 100%;
        position: relative;
    }

    .progress-full {
        height: 100%;
        background-size: cover;
        transition: width 0.3s ease-out;
    }

    .progress-text {
        color: #fff;
        font-family: sans-serif;
        font-size: 12px;
        opacity: 0.8;
    }

    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-leave-to {
        opacity: 0;
    }

    @media (max-width: 1024px) {
        .unity-wrapper {
            max-width: 95%;
            aspect-ratio: 16 / 9;
        }
    }

    @media (max-width: 768px) {
        .page {
            padding: 10px;
            min-height: 60vh;
        }

        .unity-wrapper {
            width: 100%;
            max-width: 100%;
            border-radius: 4px;
            aspect-ratio: 4 / 3;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .unity-logo {
            width: 100px;
            height: 85px;
        }

        .progress-empty {
            width: 150px;
        }
    }

    @media (max-width: 480px) {
        .unity-wrapper {
            aspect-ratio: 1 / 1;
        }

        h1 {
            font-size: 1.5rem;
            text-align: center;
        }
    }

    @media (max-height: 500px) and (orientation: landscape) {
        .page {
            padding: 0;
        }

        .unity-wrapper {
            aspect-ratio: 16 / 9;
            height: 100vh;
            width: auto;
            border-radius: 0;
        }
    }
</style>
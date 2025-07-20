<template>
  <div id="unity-container" ref="container">
    <canvas id="unity-canvas" ref="canvas"></canvas>
    <div id="unity-loading-bar" ref="loadingBar">
      <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full" ref="progressBarFull"></div>
      </div>
    </div>
    <div id="unity-warning" ref="warningBanner"></div>
    <button id="unity-fullscreen-button" ref="fullscreenButton">Fullscreen</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const container = ref(null)
const canvas = ref(null)
const loadingBar = ref(null)
const progressBarFull = ref(null)
const fullscreenButton = ref(null)
const warningBanner = ref(null)

onMounted(() => {
  function unityShowBanner(msg, type) {
    const div = document.createElement('div')
    div.innerHTML = msg
    if (type === 'error') {
      div.style = 'background: red; padding: 10px;'
    } else if (type === 'warning') {
      div.style = 'background: yellow; padding: 10px;'
      setTimeout(() => {
        warningBanner.value.removeChild(div)
        updateBannerVisibility()
      }, 5000)
    }
    warningBanner.value.appendChild(div)
    updateBannerVisibility()

    function updateBannerVisibility() {
      warningBanner.value.style.display = warningBanner.value.children.length ? 'block' : 'none'
    }
  }

  const buildUrl = '/Build'
  const loaderUrl = buildUrl + '/Builds.loader.js'
  const config = {
    dataUrl: buildUrl + '/Builds.data.br',
    frameworkUrl: buildUrl + '/Builds.framework.js.br',
    codeUrl: buildUrl + '/Builds.wasm.br',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'DefaultCompany',
    productName: 'portifolio-game',
    productVersion: '1.0',
    showBanner: unityShowBanner,
  }

  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile
    const meta = document.createElement('meta')
    meta.name = 'viewport'
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes'
    document.head.appendChild(meta)

    container.value.className = 'unity-mobile'
    canvas.value.className = 'unity-mobile'
  } else {
    // Desktop
    canvas.value.style.width = '960px'
    canvas.value.style.height = '600px'
  }

  loadingBar.value.style.display = 'block'

  const script = document.createElement('script')
  script.src = loaderUrl
  script.onload = () => {
    createUnityInstance(canvas.value, config, (progress) => {
      progressBarFull.value.style.width = 100 * progress + '%'
    }).then((unityInstance) => {
      loadingBar.value.style.display = 'none'
      fullscreenButton.value.onclick = () => {
        unityInstance.SetFullscreen(1)
      }
    }).catch((message) => {
      alert(message)
    })
  }
  document.body.appendChild(script)
})
</script>

<style scoped>
#unity-container {
  position: relative;
}
#unity-loading-bar {
  position: absolute;
  bottom: 10px;
  width: 100%;
}
#unity-progress-bar-empty {
  background: #ccc;
  height: 20px;
}
#unity-progress-bar-full {
  background: #4caf50;
  width: 0%;
  height: 100%;
}
</style>

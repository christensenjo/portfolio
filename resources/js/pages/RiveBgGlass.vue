<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas'

const canvas = ref<HTMLCanvasElement | null>(null)
const rive = ref<Rive | null>(null)
const loadError = ref<string | null>(null)

const onResize = () => {
  if (!canvas.value || !rive.value) return
  
  const canvasContainer = document.getElementById('canvasContainer')
  if (!canvasContainer) return

  const canvasRect = canvasContainer.getBoundingClientRect()
  canvas.value.width = canvasRect.width
  canvas.value.height = canvasRect.height

  // Update layout if rive instance exists
  if (rive.value) {
    rive.value.layout = new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    })
    // Ensure proper drawing surface size after resize
    rive.value.resizeDrawingSurfaceToCanvas()
  }
}

onMounted(async () => {
  window.addEventListener('resize', onResize)
  
  try {
    console.log('Starting Rive initialization...')
    
    // Get canvas element
    canvas.value = document.getElementById('riveCanvas1') as HTMLCanvasElement
    if (!canvas.value) throw new Error('Canvas element not found')
    console.log('Canvas element found')

    // Set initial size
    onResize()
    console.log('Canvas sized:', { 
      width: canvas.value.width, 
      height: canvas.value.height 
    })

    // Initialize Rive
    rive.value = new Rive({
      canvas: canvas.value,
      src: '/storage/translucent_window.riv',
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center,
      }),
      autoplay: true,
      animations: ['Default'], // Specify the correct animation name
      onLoad: () => {
        console.log('Rive animation loaded successfully')
        if (rive.value) {
          rive.value.resizeDrawingSurfaceToCanvas()
        }
      },
      onLoadError: (err: any) => {
        console.error('Rive loading error:', err)
        loadError.value = err.toString()
      }
    })

  } catch (error) {
    console.error('Failed to load Rive animation:', error)
    loadError.value = error instanceof Error ? error.message : 'Unknown error'
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (rive.value) {
    rive.value.cleanup()
  }
})
</script>

<template>
  <div class="isolate min-h-screen">
    <div id="canvasContainer" class="z-0 w-full h-screen">
      <canvas 
        id="riveCanvas1" 
        class="mx-auto"
        style="width: 1000px; height: 1000px; max-width: 100%; max-height: 100vh;"
      ></canvas>
    </div>
    <div class="rive-content">
      <div class="z-10 absolute inset-0 w-fit h-fit">
        <h1>Rive</h1>
        <p v-if="loadError" class="text-red-500">{{ loadError }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#canvasContainer {
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  display: block;
  margin: 0 auto;
}
</style>

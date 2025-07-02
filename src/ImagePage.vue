<template>
  <div class="image-page">
    <h1>三张图片展示</h1>
    
    <!-- 图片列表 -->
    <div class="image-grid">
      <img 
        :src="image1Url" 
        alt="1" 
        class="image-item"
        @click="openLightbox(image1Url, '1')" 
      />
      <img 
        :src="image2Url" 
        alt="2" 
        class="image-item"
        @click="openLightbox(image2Url, '2')" 
      />
      <img 
        :src="image3Url" 
        alt="3" 
        class="image-item"
        @click="openLightbox(image3Url, '3')" 
      />
    </div>
    
    <!-- 图片灯箱（放大视图） -->
    <div 
      v-if="lightboxVisible" 
      class="lightbox" 
      @click="closeLightbox"
      style="z-index: 9999;"
    >
      <div class="lightbox-content">
        <button class="close-btn" @click.stop="closeLightbox">×</button>
        <img 
          :src="currentImageSrc" 
          :alt="currentImageAlt" 
          class="lightbox-image" 
          @load="handleImageLoad"
          @error="handleImageError"
        />
        <div v-if="isLoading" class="loading-indicator">加载中...</div>
        <div v-if="loadError" class="error-message">
          <p>图片加载失败</p>
          <p>当前路径: {{ currentImageSrc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 正确导入图片资源（使用@/assets别名）
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

// 灯箱状态
const lightboxVisible = ref(false);
const currentImageSrc = ref('');
const currentImageAlt = ref('');
const isLoading = ref(false);
const loadError = ref(false);

// 绑定图片URL
const image1Url = ref(image1);
const image2Url = ref(image2);
const image3Url = ref(image3);

// 打开灯箱
const openLightbox = (src: string, alt: string) => {
  console.log('打开灯箱:', src);
  loadError.value = false;
  isLoading.value = true;
  currentImageSrc.value = src;
  currentImageAlt.value = alt;
  lightboxVisible.value = true;
  // 防止背景滚动
  document.body.style.overflow = 'hidden';
};

// 关闭灯箱
const closeLightbox = () => {
  console.log('关闭灯箱');
  lightboxVisible.value = false;
  // 恢复背景滚动
  document.body.style.overflow = '';
};

// 处理图片加载成功
const handleImageLoad = () => {
  console.log('大图加载成功:', currentImageSrc.value);
  isLoading.value = false;
};

// 处理图片加载失败
const handleImageError = () => {
  console.error('大图加载失败:', currentImageSrc.value);
  isLoading.value = false;
  loadError.value = true;
};

// 页面加载后检查
onMounted(() => {
  console.log('图片页面已加载');
  console.log('图片路径:', image1Url.value, image2Url.value, image3Url.value);
});
</script>

<style scoped>
.image-page {
  text-align: center;
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.image-item {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
  border: 2px solid transparent;
}

.image-item:hover {
  transform: scale(1.05);
  border-color: #42b983;
}

/* 灯箱样式 */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  transition: transform 0.3s;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.loading-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
}
</style>    
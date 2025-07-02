<template>
  <div class="resume-container">
    <div class="avatar-section">
      <img src="@/assets/666.jpg" alt="个人头像" class="avatar">
    </div>

    <div class="info-section">
      <h2>Build</h2>
      <p>天才物理学者，拥有聪明的头脑与身体能力</p>
      <p>口头禅为“那么，开始实验吧！”，预测绝对性胜利时会说“胜利的法则已经决定！”</p>
      <a href="https://github.com/Kiryu-saikyou/vue3-typescript-todolist" target="_blank" class="github-button">
        <i class="fab fa-github"></i> 访问我的 GitHub
      </a>
    </div>

    <div class="achievements-section">
      <h3>主要成就</h3>
      <ul>
        <li>创造假面骑士系统</li>
        <li>粉碎 Evolto 的野心</li>
        <li>解开潘多拉魔盒的秘密</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// 个人简介页面逻辑
</script>

<style scoped>
.resume-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.avatar-section {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.info-section {
  text-align: center;
  margin-bottom: 20px;
}

.github-button {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.github-button i {
  margin-right: 5px;
}

.achievements-section {
  margin-bottom: 20px;
}

.achievements-section h3 {
  margin-bottom: 10px;
}

.achievements-section ul {
  list-style-type: disc;
  padding-left: 20px;
}

.test-screenshot {
  margin-top: 20px;
}

.test-screenshot img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
<template>
  <div class="resume-container">
    <!-- 头像部分 -->
    <div class="avatar-section">
      <img src="./assets/666.jpg" alt="个人头像" class="avatar">
    </div>

    <!-- 简介部分 -->
    <div class="info-section">
      <h2>Build</h2>
      <p>天才物理学者，拥有聪明的头脑与身体能力</p>
      <p>口头禅为“那么，开始实验吧！”，预测绝对性胜利时会说“胜利的法则已经决定！”</p>
      <!-- GitHub 按钮 -->
      <a href="https://github.com/Kiryu-saikyou/vue3-typescript-todolist" target="_blank" class="github-button">
        <i class="fab fa-github"></i> 访问我的 GitHub
      </a>
    </div>

    <!-- 成就部分 -->
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
// 这里可以添加更多简历页的交互逻辑
</script>
<style scoped>
.resume-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffffff, #f0f4f8);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.avatar-section {
  text-align: center;
  margin-bottom: 1.2rem;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.info-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.info-section h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.info-section p {
  font-size: 1rem;
  color: #666;
}

.achievements-section {
  margin-top: 1.5rem;
}

.achievements-section h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #444;
}

.achievements-section ul {
  list-style: none;
  padding-left: 0;
}

.achievements-section li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  color: #555;
}

.achievements-section li::before {
  content: '✨';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
}

/* 响应式设计 */
@media (max-width: 600px) {
  .resume-container {
    margin: 1rem;
    padding: 1rem;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }

  .info-section h2 {
    font-size: 1.5rem;
  }
}
.github-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.github-button:hover {
  background-color: #555;
}

.github-button i {
  margin-right: 8px;
}
</style>
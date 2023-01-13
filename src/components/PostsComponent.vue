<template>
  <div v-for="post in posts" class="post" :key="post.title">
    <div class="post__header">
      <div class="post__number">{{ post.id }}</div>
      <h2 class="post__title">
        {{ uppercase(post.title) }}
      </h2>
    </div>
    <p class="post__body">{{ post.body }}</p>
    <div class="post__comments">
      <div class="post__number_comments">
        Comments: {{ post.countComments }}
      </div>
      <div class="post__bar-chart">
        <BarChart :data="post.emailsLength" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../components/BarChart.vue";

export default {
  components: {
    BarChart,
  },
  data() {
    return {};
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  mounted() {},

  methods: {
    hadleclickBuy(id) {
      this.curentComments = id;
    },
  },
  computed: {
    uppercase() {
      return (v) => {
        return v.toUpperCase().trim("");
      };
    },
  },
};
</script>
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 16px 0;
}
.post__header {
  display: flex;
  gap: 20px;
}
.post__number {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 30px;
  font-weight: 500;
  font-size: 20px;
  border: 1.5px solid  var(--vt-c-blue);
  border-radius: 10%;
}
.post__title {
  color:  var(--vt-c-blue);
  font-weight: 700;
  font-size: 24px;
  text-align: start;
}
.post__body {
  font-weight: 500;
  font-size: 16px;
  text-align: start;
}

.post__comments {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.post__number_comments {
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1.5px solid  var(--vt-c-blue);
}

.post__bar-chart {
  width: 200px;
  height: 100px;
}

.valuta__buy-btn {
  width: 90px;
  height: 40px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  background-color:  var(--vt-c-blue);
  border-radius: 10px;
  border: none;
}
</style>

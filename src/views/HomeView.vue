<template>
  <main class="pade">
    <div class="page-home home">
      <div class="home__header">
        <h1 class="home__title">List of posts</h1>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>

      <section class="home__post">
        <PostsComponent :posts="postWithComments" />
      </section>
      <section class="home__pagination">
        <div
          v-for="pageNumber in totalPage"
          :key="pageNumber"
          class="home__pagination-item"
          :class="{
            'home__pagination-cupent': page === pageNumber
          }"
          @click="changePage(pageNumber)"
        >
          {{ pageNumber }}
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import PostsComponent from "../components/PostsComponent.vue";
import MySelect from "../components/MySelect.vue";
import axios from "axios";

export default {
  components: {
    PostsComponent,
    MySelect,
  },
  data() {
    return {
      posts: [],
      comments: [],
      sortOptions: [
        { value: "title", name: "Title" },
        { value: "body", name: "Body" },
      ],
      selectedSort: "",
      page: 1,
      limit: 10,
      totalPage: 0,
    };
  },
  watch: {
    selectedSort(newValue) {
      console.log(newValue);
      this.postWithComments.sort((postA, postB) => {
        return postA[this.selectedSort]?.localeCompare(
          postB[this.selectedSort]
        );
      });
    },
  },
  
  methods: {
    changePage(numberPage) {
      this.page = numberPage;
      this.fetchPosts();
    },

    async fetchPosts() {
      try {
        const reponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          reponse.headers["x-total-count"] / this.limit
        );
        this.posts = reponse.data;
      } catch (e) {
        alert("data loading error");
      }
    },

    async fetchComments() {
      try {
        const reponse = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`
        );
        this.comments = reponse.data;
      } catch (e) {
        alert("data loading error");
      }
    },    
  },

  computed: {
    postWithComments() {
      const postsResult = this.posts;
      let arrayEmail = [];

      postsResult.forEach(post => {
        let curentComments = this.comments.filter(
          (comment) => comment.postId === post.id
        );
        
        curentComments.forEach(comment => {
          const count = comment.email.length;
          arrayEmail.push(count);
        })

        post.countComments = curentComments.length;
        post.emailsLength = arrayEmail;
        arrayEmail = [];
      })
      
      return postsResult;
    },    
  },

  mounted() {
    this.fetchPosts();
    this.fetchComments();    
  },
};
</script>

<style>
.page-home {
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-bottom: 40px;
}

.home__header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.home__title {
  font-weight: 700;
  font-size: 36px;
  color:  var(--vt-c-blue);
  text-transform: uppercase;
}

.home__post {
  display: flex;
  flex-direction: column;
  padding: 15px 15px 35px;
  border-bottom: 1px solid #e3e6eb;
}

.home__pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
}

.home__pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  font-size: 30px;
  font-weight: 700;
  font-size: 20px;
  color: var(--vt-c-blue);
  border: 2px solid  var(--vt-c-blue)#1238c0;
  border-radius: 20%;
  cursor: pointer;
}
.home__pagination-cupent {
  background:  var(--vt-c-blue);
  color:#fff;
  
}
</style>

<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCard" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: "Several Bootstrap components utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in B.",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "Bootstrap primarily ",
          blogHTML: "Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "There are also media ",
          blogHTML: "There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
      sampleBlogCard: [
        {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "August 15, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "August 15, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "August 15, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "August 15, 2021"},
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
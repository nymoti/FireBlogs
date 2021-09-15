<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: {
    BlogPost
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
      ]
    }
  }
};
</script>

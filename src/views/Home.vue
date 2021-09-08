<template>
  <div class="home">
    <BlogPost/>
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
        title: "Several Bootstrap components utilize",
        blogPost: "Several Bootstrap components utilize z-index, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that’s been designed to properly layer navigation, tooltips and popovers, modals, and more.",
        welcomeScreen: true,
        photo: "coding"
      },
      simpleBlogPost: [
        {
          title: "Bootstrap primarily ",
          blogHTML: "Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.",
          blogCoverPhoto: "Beautiful-stories"
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

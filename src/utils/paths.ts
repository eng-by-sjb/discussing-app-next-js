const paths = {
  home() {
    return `/`;
  },

  topicShow(topicSlug: string) {
    return `/topic/${topicSlug}`;
  },

  createPost(topicSlug: string) {
    return `/topic/${topicSlug}/posts/new`;
  },

  shownPost(topicSlug: string, postId: string) {
    return `/topic/${topicSlug}/post/${postId}`;
  },
};

export default paths;

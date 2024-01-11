const paths = {
  home() {
    return `/`;
  },

  topicShow(topicSlug: string) {
    return `/topic/${topicSlug}`;
  },

  CreatePost(topicSlug: string) {
    return `/topic/${topicSlug}/posts/new`;
  },

  ShownPost(topicSlug: string, postId: string) {
    return `/topic/${topicSlug}/post/${postId}`;
  },
};

export default paths;

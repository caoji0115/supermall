import BackTop from 'components/content/backtop/BackTop'

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowtop: false,
    };
  },
  methods:{
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
};

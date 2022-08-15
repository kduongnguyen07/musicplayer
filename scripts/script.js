new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Forget Me Now",
          url:"https://www.youtube.com/watch?v=NngRD9ZDDDU",
          artist: "Fishy & Trí Dũng",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482296/image/music-1_gpgnmg.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462918/mp3/music-1_eh650u.mp3"
        },
        {
          name: "Tình Đầu",
          url:"https://www.youtube.com/watch?v=IDksv0Z-dTk",
          artist: "Tăng Duy Tân",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482296/image/music-4_tbytj0.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462916/mp3/music-4_t70cwe.mp3"
        },
        {
          name: "3107 Album",
          url:"https://www.youtube.com/watch?v=GatNL0mmQGc",
          artist: "W/n ft titie, Nâu, Dương",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482296/image/music-5_bnkv8d.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462920/mp3/music-5_vqwrx1.mp3"
        },
        {
          name: "Kẻ Theo Đuổi Ánh Sáng",
          url:"https://www.youtube.com/watch?v=2g2QOisCvhs",
          artist: "Huy Vạc x Tiến Nguyễn ",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482297/image/music-7_h168s2.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462916/mp3/music-7_dp4svi.mp3"
        },
        {
          name: "Đường Tôi Chở Em Về",
          url:"https://www.youtube.com/watch?v=OuNo8Tkb3lI",
          artist: "buitruonglinh ",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482297/image/music-8_jefb1l.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462920/mp3/music-8_ehdt7r.mp3"
        },
        {
          name: "Dù Cho Mai Về Sau",
          url:"https://www.youtube.com/watch?v=SGlBQR-ftVI",
          artist: "buitruonglinh ",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482300/image/music-9_e2okwd.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462920/mp3/music-9_sggnkp.mp3"
        },
        {
          name: "Mơ",
          url:"https://www.youtube.com/watch?v=2YM4j-oP_qQ",
          artist: "Vũ Cát Tường ",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482300/image/music-10_ienu5u.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462920/mp3/music-10_frkoo5.mp3"
        },
        {
          name: "Bên Trên Tầng Lầu",
          url:"https://www.youtube.com/watch?v=LaxkmhiECfM",
          artist: "Tăng Duy Tân",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482300/image/music-11_t8yiyy.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462919/mp3/music-11_rg9o43.mp3"
        },
        {
          name: "Vẫn Nhớ By Jimmii Nguyễn Cover By Soobin ",
          url:"https://www.youtube.com/watch?v=HwVCeUNUIEE",
          artist: "Soobin Hoàng Sơn",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482300/image/music-12_ojqrfk.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462919/mp3/music-12_pdrxza.mp3"
        },
        {
          name: "Trú Mưa",
          url:"https://www.youtube.com/watch?v=25efj4hluVQ",
          artist: "HKT",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482301/image/music-13_px7l3t.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462923/mp3/music-13_vshih3.mp3"
        },
        {
          name: "Đôi Mắt",
          url:"https://www.youtube.com/watch?v=kRdqTNhHulw",
          artist: "Wanbi Tuấn Anh",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482301/image/music-14_xbojrm.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462923/mp3/music-14_efipup.mp3"
        },
        {
          name: "Thanh Xuân",
          url:"https://www.youtube.com/watch?v=GgQFO8dL5XQ",
          artist: "Da LAB",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482297/image/music-15_yz8gr7.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462923/mp3/music-15_bwh7u1.mp3"
        },
        {
          name: "Hãy Trao Cho Anh",
          url:"https://www.youtube.com/watch?v=knW7-x7Y7RE",
          artist: "Sơn Tùng M-TP ft Snoop Dogg",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482302/image/music-16_rstdaf.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462924/mp3/music-16_q6tnd0.mp3"
        },
        {
          name: "Lạc Trôi",
          url:"https://www.youtube.com/watch?v=Llw9Q6akRo4",
          artist: "Sơn Tùng M-TP",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482302/image/music-17_xejo39.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462925/mp3/music-17_xsdr55.mp3"
        },
        {
          name: "Chúng Ta Không Thuộc Về Nhau",
          url:"https://www.youtube.com/watch?v=qGRU3sRbaYw",
          artist: "Sơn Tùng M-TP",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482297/image/music-18_dzkuio.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462924/mp3/music-18_j8x58c.mp3"
        },
        {
          name: "Nơi Này Có Anh",
          artist: "Sơn Tùng M-TP",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482302/image/music-19_mglola.jpg",
          url:"https://www.youtube.com/watch?v=FN7ALfpGxiI",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462924/mp3/music-19_rtowjr.mp3",
        },
        {
          name: "Chạy Ngay Đi",
          artist: "Sơn Tùng M-TP",
          cover: "https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482302/image/music-20_bp0fbm.jpg",
          source: "https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462927/mp3/music-20_d3a6qs.mp3",
          url:"https://www.youtube.com/watch?v=32sYGCOYJUM",
        },
        {
          name:"Ghen",
          artist:"Khắc Hưng x Min x Erik",
          cover:"https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482323/image/music-21_lhgutk.jpg",
          source:"https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462927/mp3/music-21_wzkxch.mp3",
          url:"https://www.youtube.com/watch?v=Vk8_0QaJr3I",
        },
        {
          name:"Em Không Sai Chúng Ta Sai",
          artist:"Erik",
          cover:"https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482324/image/music-22_adth3b.jpg",
          source:"https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462928/mp3/music-22_tuuzdl.mp3",
          url:"https://www.youtube.com/watch?v=iwGuiSnr2Qc",
        },
        {
          name:"Trên Tình Bạn Dưới Tình Yêu",
          artist:"Min",
          url:"https://www.youtube.com/watch?v=0R8IbpKXavM",
          cover:"https://res.cloudinary.com/khanhdn-tk/image/upload/v1660482326/image/music-23_jhu7f7.jpg",
          source:"https://res.cloudinary.com/khanhdn-tk/video/upload/v1660462927/mp3/music-23_jq9pgw.mp3"
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

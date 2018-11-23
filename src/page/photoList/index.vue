<template>
    <div class="photoList-component">
		<div id="slider" class="mui-slider zIndex" >
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a @click="showData(0)" class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html" >
							全部
						</a>
						<a @click="showData(item.id)" class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html" v-for="item in title" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
			<div class="list">
				<ul>
					<router-link tag="li" :to='"/home/pootoList/"+item.id' v-for="item in imgList" :key="item.id">
						<img v-lazy="item.img_url">
						<div class="describe">
							<h4>{{item.title}}</h4>
							<p>{{item.zhaiyao}}</p>
						</div>
					</router-link>
				</ul>
				
			</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: [],
      imgList: []
    };
  },
  created() {
    this.getTitleData();
	// this.getAllData();
	this.showData(0)
  },
  mounted() {
    window.mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getTitleData() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status == "0") {
          this.title = result.body.message;
        } else {
          alert("信息获取失败");
        }
      });
    },
    showData(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status == 0) {
          this.imgList = result.body.message;
        } else {
          alert("信息获取失败");
        }
      });
    }
  }
}
</script>
<style lang="less">
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
//   background-color: red;
}
.photoList-component {
	.list {
		ul{
			padding:0;
			li {
			width: 100%	;
			// height: 100px;
			background-color: #ccc;
			list-style: none;
			margin-top: 5px;
			position: relative;
			img {
				width: 100%;
				// height: 100%;
				display: block;
				background: blue;
			}
			.describe {
				background-color: rgba(0, 0, 0, 0.5);
				width: 100%;
				// transform: translateY(-100%);
				position: absolute;
				bottom: 0;
				left: 0;
				h4 {
					font-size: 14px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 18px;
					
				}
				p {
					margin:0;
					max-height: 60px;
				}
			}
		}
		}
	}
}
</style>

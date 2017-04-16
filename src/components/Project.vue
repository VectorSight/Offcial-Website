<style lang="scss" scoped>
  .project {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;

    > h2 {
      font-size: 16px;
      color: #8A8A8A;
      font-weight: lighter;
      margin-bottom: 5px;
    }

    #projects {
      margin: 0 0 20px 0;
      display: flex;
      flex-direction: row;
      padding: 20px 0;
    }

    #components {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 100%;
      padding: 20px 0;
    }
  }
</style>
<style lang="scss">
  .project-item {
    margin-right: 20px;
    width: 186px;
    height: 78px;
    border-radius: 5px;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 78px;
    text-align: center;

    h3 {
      font-weight: normal;
      margin: 0;
    }
  }

  .project-component {
    margin-right: 40px;
    width: 270px;
    border: 1px solid #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    .language {
      height: 3px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }

    h3 {
      font-size: 18px;
      color: #717171;
      font-weight: normal;

      margin: 12px 0;
      width: 100%;
      text-align: center;
    }

    .private {
      border: 1px solid #F1F1F1;
      border-radius: 2px;
      font-size: 12px;
      color: #A8A7A7;
      width: 50px;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }

    .repo {
      a {
        font-size: 12px;
        color: #A8A7A7;

        &:hover {
          color: #848383;
        }
      }
    }

    .divider {
      height: 1px;
      background-color: #F3F3F3;
      width: 100%;
      margin-top: 15px;
    }

    .desc {
      padding: 0 12px;
      p {
        font-size: 12px;
        color: #9B9B9B;
      }
    }
  }
</style>
<template>
  <div class="project" v-title="'VectorSight | 项目与组件'">
    <h2>项目</h2>
    <div id="projects">
      <project-item beginColor="#1ABB9E" endColor="#3498DB">
        Airlink
      </project-item>
    </div>
    <h2>组件</h2>
    <div id="components">
      <project-component name="deoxys-java" private lang="java">
        <p>DeoxysTunnel is a transparent TCP over UDP forwarder & encrypted SOCKS5 proxy with a customized reliable-UDP protocol that performs way better than TCP on networks with high packet loss / high latency.</p>
      </project-component>
      <project-component name="creeper" repo="wspl/creeper" lang="go">
        <p>Creeper is a next-generation crawler which fetches web page by creeper script. As a cross-platform embedded crawler, you can use it for your news app, subscribe program, etc.</p>
      </project-component>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
      'project-item': Vue.component('project-item', {
        props: ['name', 'beginColor', 'endColor'],
        template: `
          <div class="project-item" v-bind:style="{ background: 'linear-gradient(46deg, ' + beginColor + ' 0%, ' + endColor + ' 100%)' }">
            <h3><slot></slot></h3>
          </div>
        `
      }),
      'project-component': Vue.component('project-component', {
        data () {
          return {
            langColors: {
              'java': '#b07219',
              'go': '#375eab'
            }
          }
        },
        props: ['name', 'private', 'repo', 'lang'],
        template: `
          <div class="project-component">
            <div class="language" :style="{ backgroundColor: langColors[lang] }"></div>
            <h3>{{name}}</h3>
            <div v-if="private != undefined" class="private">Private</div>
            <div v-if="repo" class="repo"><a target="_blank" :href="'https://github.com/' + repo">{{repo}}</a></div>
            <div class="divider"></div>
            <div class="desc">
              <slot>No Description</slot>
            </div>
          </div>
        `
      })
    }
  }
</script>

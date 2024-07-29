<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="py-10"
          :elevation="0"
        >
          <v-card-item>
            <v-img
              src="/logo.png"
              width="10vh"
            />
            <h1 class="text-h2 title mb-15">
              Speakers
            </h1>
            <div align="left">
              <h2 class="text-h5 title mb-2">
                Keynote Speakers
              </h2>
              <v-row class="justify-space-between">
                <v-col
                  v-for="(speaker, index) in keyspeakers"
                  :key="index"
                  md="6"
                  sm="6"
                  xs="12"
                >
                  <v-card
                    class="speakers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="speaker.image"
                        max-height="10rem"
                        max-width="10rem"
                        cover
                      />
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="speaker.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">
                          {{ speaker.description }}
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-divider class="my-10" />
              <h2 class="text-h5 title mb-2">
                Speakers
              </h2>
              <v-row>
                <v-col
                  v-for="(speaker, index) in speakers"
                  :key="index"
                  md="4"
                  sm="4"
                  xs="12"
                >
                  <v-card
                    class="speakers"
                    align="center"
                    flat
                  >
                    <div class="py-2 px-2">
                      <v-img
                        :src="speaker.image"
                        max-height="10rem"
                        max-width="10rem"
                        cover
                      />
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn
                          class="mx-2"
                          icon="mdi-twitter"
                          flat
                        /></a>
                        <a :href="speaker.github"><v-btn
                          class="mx-2"
                          icon="mdi-github"
                          flat
                        /></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">
                          {{ speaker.description }}
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
        <FooterWave />
        <FooterBlock />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  setup() {
    const generateImgPath = (fileName) => {
      return new URL(`../../public/${fileName}`, import.meta.url).href
    }
    return {
      generateImgPath,
    }
  },
  data: () => ({
    keyspeakers: [
      {
        name: 'Yuichiro Kaneko',
        twitter: 'https://twitter.com/spikeolaf',
        github: 'https://github.com/yui-knk',
        description: 'The author of Lrama LALR parser generator. Ruby committer.',
        image: 'https://avatars.githubusercontent.com/u/5356517?v=4',
      },
      {
        name: 'Hitoshi HASUMI',
        twitter: 'https://twitter.com/hasumikin',
        github: 'https://github.com/hasumikin',
        description: 'Creator of PicoRuby & PRK Firmware. Maintainer of IRB. Winner of Fukuoka Ruby Award First Prize in 2020 & 2022, and a Ruby Prize 2021 final nominee.',
        image: 'https://avatars.githubusercontent.com/u/8454208?v=4',
      },
    ],
    speakers: [
      {
        name: 'Koichi ITO',
        twitter: 'https://twitter.com/koic',
        github: 'https://github.com/koic',
        description: 'OSS プログラマー。RuboCop のコミッター。株式会社永和システムマネジメント エンジニアリングマネージャー。最近は、RuboCop のバックエンドに関するパーサー技術を趣味にしています。',
        image: 'https://avatars.githubusercontent.com/u/13203?v=4',
      },
      {
        name: 'haruguchi',
        twitter: 'https://twitter.com/haruguchiyuma',
        github: 'https://github.com/haruguchi-yuma',
        description: '株式会社永和システムマネジメントで働くWebエンジニア。',
        image: 'https://avatars.githubusercontent.com/u/57053236?v=4',
      },
      {
        name: 'joker1007',
        twitter: 'https://twitter.com/joker1007',
        github: 'https://github.com/joker1007',
        description: 'Repro株式会社チーフアーキテクト パーフェクトRuby・パーフェクトRails著者チームの一人。いくつかのOSSの開発・メンテをやっている。fluent-plugin-bigquery, rukawa, crono_trigger, tree-sitter-rbsなど。',
        image: 'https://avatars.githubusercontent.com/u/116996?v=4',
      },
      {
        name: 'kinoppyd',
        twitter: 'https://twitter.com/GhostBrain',
        github: 'https://github.com/kinoppyd',
        description: 'SmartHR社で働くプログラマで、RubyKaigiの公式スケジュールアプリを開発し4年間メンテしています。',
        image: 'https://avatars.githubusercontent.com/u/2846039?v=4',
      },
      {
        name: 'makicamel',
        twitter: 'https://twitter.com/makicamel',
        github: 'https://github.com/makicamel',
        description: 'Rubyist',
        image: 'https://avatars.githubusercontent.com/u/30112374?v=4',
      },
      {
        name: 'willnet',
        twitter: 'https://twitter.com/netwillnet',
        github: 'https://github.com/willnet',
        description: '株式会社ウィルネット代表。複数の会社の技術顧問しています。ginza.rb主催。著書にパーフェクトRuby on Rails(共著)、Ruby on Rails6エンジニア養成読本(共著)、WEB+DB PRESS で Ruby 記事連載(Vol 93~95)',
        image: 'https://avatars.githubusercontent.com/u/82371?v=4',
      },
      {
        name: 'ぺん！',
        twitter: 'https://twitter.com/tompng',
        github: 'https://github.com/tompng',
        description: 'Maintainer of IRB and Reline. TRICK 2022 Gold Medalist. CTO at codeTakt Inc.',
        image: 'https://avatars.githubusercontent.com/u/1780201?v=4',
      },
      {
        name: '前田修吾',
        twitter: 'https://twitter.com/shugomaeda',
        github: 'https://github.com/shugo',
        description: 'Rubyコミッタとして、callccやRefinementsなどのマニア向けの機能を導入してきました。たまにハッシュの値省略記法やString#byteindexなどの便利な機能も提案しています。Textbringerというテキストエディタの作者でもあります。株式会社ネットワーク応用通信研究所代表取締役社長。一般財団法人Rubyアソシエーション事務局長。',
        image: 'https://avatars.githubusercontent.com/u/34552?v=4',
      },
    ],
  }),
}
</script>

<style>
* {
  box-sizing: border-box;
}

.title {
  font-family: 'Federo', sans-serif;
  font-weight: 1000;
}

.text-body-1 {
  line-height: 1.7;
}

.text-link {
  color: #000;
  text-decoration: none;
}

.text-link:hover {
  color: #419dbf;
  text-decoration: underline;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.1s ease-in-out;
}

.link:hover {
  border: #419dbf 0.5px solid;
  box-sizing:border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  transition: all 0.01s 0.01s ease-in-out;
}

.footer {
  color: #fff;
  background-color: #419dbf;
  padding-top: 50px;
  padding-bottom: 15px;
}

.footer a {
  color: #fff;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}
</style>

<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card max-width="70vw" min-width="70vw" class="py-10" :elevation="0">
          <v-card-item>
            <v-img src="/logo.png" width="10vh"/>
            <h1 class="text-h2 title mb-15">Sponsors</h1>
            <div align="left">
              <h2 class="text-h4 title mb-2">Premium Sponsors</h2>
              <v-card class="sponsors py-10 px-10 mb-8" :elevation="0" v-for="(content, index) in contents" :key="index">
                <v-row>
                  <v-col lg="3" md="12" sm="12" xs="12" class="justify-center" align="center">
                    <a :href="content.url" target="_blank">
                      <v-img class="link" :src="generateImgPath(content.image)" max-height="300px" max-width="300px" ></v-img>
                    </a>
                  </v-col>
                  <v-col>
                    <p><a class="text-link text-h5 mb-2" :href="content.url" target="_blank">{{ content.name }}</a></p>
                    <p><a class="text-link text-caption" :href="content.url" target="_blank">{{ content.url }}</a></p>
                    <p class="text-body-1 mt-5">{{ content.description }}</p>
                  </v-col>
                </v-row>
              </v-card>
              <h2 class="text-h4 title mb-2">Community Sponsors</h2>
              <v-card class="sponsors py-10 px-10 mb-8" :elevation="0" v-for="(community, index) in communities" :key="index">
                <v-row>
                  <v-col lg="3" md="12" sm="12" xs="12" class="justify-center" align="center">
                    <a :href="community.url" target="_blank">
                      <v-img class="link" :src="generateImgPath(community.image)" max-height="300px" max-width="300px" ></v-img>
                    </a>
                  </v-col>
                  <v-col>
                    <p><a class="text-link text-h5 mb-2" :href="community.url" target="_blank">{{ community.name }}</a></p>
                    <p><a class="text-link text-caption" :href="community.url" target="_blank">{{ community.url }}</a></p>
                    <p class="text-body-1 mt-5">{{ community.description }}</p>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-card-item>
        </v-card>
        <Wave />
        <div class="footer">
          Osaka RubyKaigi 04 ©2024 <br>
          Designed by <a href="https://twitter.com/ydah_">@ydah_</a>
        </div>
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
    contents: [
      {
        name: '株式会社アジャイルウェア',
        url: 'https://agileware.jp/',
        description: 'アジャイルウェアは『Feel Goodな明日をつくる』をミッションに、自慢できるワークスタイルで、はたらく人を応援するサービスを提供中です！ ＼Ruby・Railsエンジニアを積極採用中！副業でのJoinもOK／ ■隔週で週休3日（年間休日150日）■フルフレックス ■リモートワーク ■自社内開発100% ■客先常駐なし ■エディタ、ライブラリ、フレームワーク自由（技術的なことはエンジニアの裁量でおまかせ！）',
        image: 'sponsors/agileware.png',
      },
      {
        name: '株式会社永和システムマネジメント',
        url: 'https://agile.esm.co.jp',
        description: '永和システムマネジメントにはアジャイルな開発を20年続けて培った、実践知、価値観、そしてそれを届ける人がいます。私たちは情熱をもって Ruby を使ってアジャイルにお客さまに価値を届けます。 また、コミュニティ活動への参加も積極的に行っており、OSS へのコントリビューション、登壇、イベントスタッフ、スポンサーなど様々な形で関わっています。',
        image: 'sponsors/esm.png',
      },
      {
        name: '株式会社インゲージ',
        url: 'https://www.ingage.co.jp/',
        description: 'インゲージは、「ひとり一人に向き合うをカタチにする」をミッションに顧客対応クラウド『Re:lation（リレーション）』を開発・提供しています。2014年の創業以来「使って楽しい」「導入して良かった」を感じていただけるサービスの提供を第一に、日々開発を進めています。『Re:lation』は、リリース9年で導入社数は4,000社を超え、企業の業務効率化・可視化を実現し、人材教育にも貢献しています。',
        image: 'sponsors/ingage.png',
      },
      {
        name: '株式会社ナレッジラボ',
        url: 'https://knowledgelabo.com/',
        description: 'ナレッジラボは経営管理SaaS「Manageboard」をRuby on RailsやReact.jsを用いて自社開発している、大阪に本社を置く会社です。コンサルティングを祖業とし、SaaS×コンサルティングで横断的に経営DXを支援しています。',
        image: 'sponsors/knowledgelabo.png',
      },
      {
        name: '株式会社Ruby開発',
        url: 'https://www.ruby-dev.jp/',
        description: 'Ruby開発はRuby on Railsをコアとして、フロントの技術も積極的にとりいれたWebアプリケーション開発を得意としております。Rubyコミッタも2名在籍しており、Rubyコミュニティへの積極的な支援、Rubyエンジニアの育成にも積極的に取り組んでいます。',
        image: 'sponsors/rubydevelopment.png',
      },
      {
        name: '株式会社SmartHR',
        url: 'https://hello-world.smarthr.co.jp/',
        description: '「SmartHR」は、人事・労務の業務効率化と、データ活用によるタレントマネジメントや組織のパフォーマンス向上を実現するクラウド人事労務ソフトです。労働にまつわる社会課題をなくし、誰もがその人らしく働ける社会の実現を目指し、働くすべての人の生産性向上を後押しします。私たちは、歴史に残る模範的なソフトウェアをつくる仲間を探しています。フルリモート勤務可能！',
        image: 'sponsors/smarthr.png',
      },
    ],
    communities: [
      {
        name: '日本Rubyの会',
        url: 'https://ruby-no-kai.org/',
        description: ' Rubyの利用者の支援 Ruby(+Rubyのライブラリ)開発者の支援を目的とした一般社団法人です。現在は、ドキュメントの整備や、イベントへの参加協力等を中心に活動しています。',
        image: 'sponsors/rubynokai.png',
      },
      {
        name: 'Kyobashi.rb',
        url: 'https://kyobashirb.connpass.com/',
        description: 'Kyobashi.rb は京橋周辺の Rubyist が集まって Ruby や技術の話をするコミュニティです。京橋周辺としていますが、京橋に職場や居住地がない人も大歓迎です！月一程度で ShortTalk(10min) 大会や、懇親🍶🍻をしています。',
        image: 'sponsors/kyobashirb.png',
      },
      {
        name: 'Ruby関西',
        url: 'https://rubykansai.doorkeeper.jp/',
        description: 'Ruby関西はRuby関西勉強会や関西Ruby會議、Rails勉強会＠関西など、関西でのRubyに関するイベントの主体となるコミュニティです。',
        image: 'sponsors/rubykansai.png',
      }
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

.sponsors {
  background-color: #fbfbfb !important;
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

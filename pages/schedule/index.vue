<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="80vw"
          min-width="80vw"
          class="mt-12"
          :elevation="0"
        >
          <v-card-item>
            <v-img
              src="/logo.png"
              width="10vh"
            />
            <h1 class="text-h2 title mb-15">
              Schedule
            </h1>
            <v-table>
              <tbody>
                <tr
                  v-for="item in schedules"
                  :key="item.name"
                  class="text-body-2"
                >
                  <td
                    align="center"
                    class="py-3"
                  >
                    {{ item.start }}<br>
                    ~<br>
                    {{ item.end }}<br>
                  </td>
                  <td
                    v-if="item.isTalk"
                    align="left"
                    class="py-10"
                  >
                    <NuxtLink
                      :to="item.url"
                      class="text-link"
                    >
                      <v-row>
                        <v-col cols="3">
                          <v-img
                            :src="item.image"
                            max-height="5rem"
                            max-width="5rem"
                            min-width="5rem"
                            min-height="5rem"
                            cover
                          />
                        </v-col>
                        <v-col>
                          <p class="text-h6 text-left">
                            {{ item.title }}
                          </p>
                          <p class="text-subtitle text-left">
                            {{ item.name }}
                          </p>
                        </v-col>
                      </v-row>
                    </NuxtLink>
                  </td>

                  <td v-else class="py-5">
                    <v-row v-if="item.url">
                      <v-col cols="3">
                        <v-img
                          :src="item.image"
                          max-height="5rem"
                          max-width="5rem"
                          min-width="5rem"
                          min-height="5rem"
                          cover
                        />
                      </v-col>
                      <v-col>
                        <a :href="item.url" class="text-link" target="_blank">
                          <p class="text-h6">
                            Sponsor LT: {{ item.title }}
                          </p>
                          <p class="text-subtitle">
                            {{ item.company }} {{ item.name }}
                          </p>
                        </a>
                      </v-col>
                    </v-row>

                    <div v-else>
                      <p class="text-h6 text-center">
                        {{ item.title }}
                      </p>
                      <p class="text-subtitle text-center">
                        {{ item.name }}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
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
  data: () => ({
    schedules: [
      {
        start: '09:30',
        end: '10:30',
        name: '',
        url: '',
        title: 'Door Open',
        image: '',
        isTalk: false,
      },
      {
        start: '10:30',
        end: '10:40',
        name: '',
        url: '',
        title: 'Opening',
        image: '',
        isTalk: false,
      },
      {
        start: '10:40',
        end: '11:25',
        name: 'Yuichiro Kaneko',
        url: '/presentations/yui-knk',
        title: 'Keynote: 最高の構文木の設計 2024年版',
        image: 'https://avatars.githubusercontent.com/u/5356517?v=4',
        isTalk: true,
      },
      {
        start: '11:25',
        end: '11:40',
        name: 'makicamel',
        url: '/presentations/makicamel',
        title: 'dRuby 入門者による あなたの身近にある dRuby 入門',
        image: 'https://avatars.githubusercontent.com/u/30112374?v=4',
        isTalk: true,
      },
      {
        start: '11:40',
        end: '11:55',
        name: 'kinoppyd',
        url: '/presentations/kinoppyd',
        title: 'RubyKaigi公式スケジュールアプリ開発で得た、Hotwireの使い方',
        image: 'https://avatars.githubusercontent.com/u/2846039?v=4',
        isTalk: true,
      },
      {
        start: '11:55',
        end: '12:05',
        name: '',
        url: '',
        title: 'みんなで #rubyfriends 📸',
        image: '',
        isTalk: false,
      },
      {
        start: '12:05',
        end: '13:35',
        name: '',
        url: '',
        title: 'Lunch Break',
        image: '',
        isTalk: false,
      },
      {
        start: '13:35',
        end: '14:05',
        name: 'ぺん！',
        url: '/presentations/tompng',
        title: 'Re-line 〜 IRB・Reline 複数行編集の裏側',
        image: 'https://avatars.githubusercontent.com/u/1780201?v=4',
        isTalk: true,
      },
      {
        start: '14:05',
        end: '14:10',
        name: '川原 翔吾',
        company: 'フリー株式会社',
        url: 'https://speakerdeck.com/kawahara/detabesudakeziyanain-plus-1tosonodui-ce',
        title: 'データベースだけじゃないN+1とその対策',
        image: 'sponsors/freee.png',
        isTalk: false,
      },
      {
        start: '14:10',
        end: '14:15',
        name: 'junk0612',
        company: '株式会社永和システムマネジメント',
        url: 'https://speakerdeck.com/junk0612/coding-json-lr-parser',
        title: 'LR で JSON パーサーを作る',
        image: 'sponsors/esm.png',
        isTalk: false,
      },
      {
        start: '14:15',
        end: '14:45',
        name: 'joker1007',
        url: '/presentations/joker1007',
        title: 'Rustで作るTreeSitterパーサーのRubyバインディング',
        image: 'https://avatars.githubusercontent.com/u/116996?v=4',
        isTalk: true,
      },
      {
        start: '14:45',
        end: '15:00',
        name: 'haruguchi',
        url: '/presentations/haruguchi',
        title: '競技プログラミングでみる Ruby の豊かさ',
        image: 'https://avatars.githubusercontent.com/u/57053236?v=4',
        isTalk: true,
      },
      {
        start: '15:00',
        end: '15:20',
        name: '',
        url: '',
        title: 'Break',
        image: '',
        isTalk: false,
      },
      {
        start: '15:20',
        end: '15:50',
        name: 'Koichi ITO',
        url: '/presentations/koic',
        title: 'Minify Ruby Code',
        image: 'https://avatars.githubusercontent.com/u/13203?v=4',
        isTalk: true,
      },
      {
        start: '15:50',
        end: '15:55',
        name: 'okeysea',
        url: 'https://speakerdeck.com/kl_okeysea/osaka-rubykaigi-04-suponsalt-naretuzirabonogoshao-jie',
        company: '株式会社ナレッジラボ',
        title: '株式会社ナレッジラボのご紹介',
        image: 'sponsors/knowledgelabo.png',
        isTalk: false,
      },
      {
        start: '15:55',
        end: '16:00',
        name: 'ykyuki21',
        url: 'https://speakerdeck.com/yuki21/how-to-comfortably-develop-in-the-labor-domain',
        company: '株式会社SmartHR',
        title: '労務ドメインを快適に開発する方法 〜日本語コーディング編〜',
        image: 'sponsors/smarthr.png',
        isTalk: false,
      },
      {
        start: '16:00',
        end: '16:15',
        name: '前田修吾',
        url: '/presentations/shugomaeda',
        title: 'strscanなしで文字列をスキャンする',
        image: 'https://avatars.githubusercontent.com/u/34552?v=4',
        isTalk: true,
      },
      {
        start: '16:15',
        end: '16:45',
        name: 'willnet',
        url: '/presentations/willnet',
        title: 'どうしてこうなった？から理解するActive Recordの関連の裏側',
        image: 'https://avatars.githubusercontent.com/u/82371?v=4',
        isTalk: true,
      },
      {
        start: '16:45',
        end: '17:05',
        name: '',
        url: '',
        title: 'Break',
        image: '',
        isTalk: false,
      },
      {
        start: '17:05',
        end: '17:10',
        name: 'znz',
        url: 'https://speakerdeck.com/znz/devise-two-factorwo4-dot-xkara5-dot-xnishang-getahua',
        title: 'devise-two-factorを4.xから5.xに上げた話',
        company: '株式会社Ruby開発',
        image: 'sponsors/rubydevelopment.png',
        isTalk: false,
      },
      {
        start: '17:10',
        end: '17:15',
        name: '久保 慶輔',
        url: 'https://speakerdeck.com/kk8511/phpers-impression-after-3-months-of-using-ruby',
        title: 'PHPerが転職してRubyを3ヶ月使った感想',
        company: '株式会社インゲージ',
        image: 'sponsors/ingage.png',
        isTalk: false,
      },
      {
        start: '17:15',
        end: '18:00',
        name: 'Hitoshi HASUMI',
        url: '/presentations/hasumikin',
        title: 'Keynote: 令和の隙間産業——PicoRubyはどこから来て、どこへ行くのか',
        image: 'https://avatars.githubusercontent.com/u/8454208?v=4',
        isTalk: true,
      },
      {
        start: '18:00',
        end: '18:10',
        name: '',
        url: '',
        title: 'Closing',
        image: '',
        isTalk: false,
      },
      {
        start: '19:00',
        end: '21:00',
        name: '',
        url: '',
        title: 'After Party',
        image: '',
        isTalk: false,
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

tr:nth-child(odd) {
  background-color: #ECF5F8;
}

tr:nth-child(even) {
  background-color: #D9EBF2;
}

@media (max-width: 600px) {
.v-col {
    flex-basis: inherit !important;
  }
}
</style>

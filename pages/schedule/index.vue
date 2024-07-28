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
                    class="py-5"
                  >
                    <v-row>
                      <v-col cols="2">
                        <v-img
                          :src="item.image"
                          max-height="5rem"
                          max-width="5rem"
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
                  </td>
                  <td v-else>
                    <p class="text-h6 text-center">
                      {{ item.title }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-item>
        </v-card>
        <FooterWave />
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
        url: 'yui-knk',
        title: 'Keynote: T.B.D.',
        image: 'https://avatars.githubusercontent.com/u/5356517?v=4',
        isTalk: true,
      },
      {
        start: '11:25',
        end: '11:40',
        name: 'makicamel',
        url: 'makicamel',
        title: 'dRuby 入門者による あなたの身近にある dRuby 入門',
        image: 'https://avatars.githubusercontent.com/u/30112374?v=4',
        isTalk: true,
      },
      {
        start: '11:40',
        end: '11:55',
        name: 'kinoppyd',
        url: 'kinoppyd',
        title: 'RubyKaigi公式スケジュールアプリ開発で得た、Hotwireの使い方',
        image: 'https://avatars.githubusercontent.com/u/2846039?v=4',
        isTalk: true,
      },
      {
        start: '11:55',
        end: '12:05',
        name: '',
        url: '',
        title: '#rubyfriends with all Rubyists 📸',
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
        url: 'tompng',
        title: 'Re-line 〜 IRB・Reline 複数行編集の裏側',
        image: 'https://avatars.githubusercontent.com/u/1780201?v=4',
        isTalk: true,
      },
      {
        start: '14:05',
        end: '14:10',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '14:10',
        end: '14:15',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '14:15',
        end: '14:20',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '14:20',
        end: '14:50',
        name: 'joker1007',
        url: 'joker1007',
        title: 'Rustで作るTreeSitterパーサーのRubyバインディング',
        image: 'https://avatars.githubusercontent.com/u/116996?v=4',
        isTalk: true,
      },
      {
        start: '14:50',
        end: '15:05',
        name: 'haruguchi',
        url: 'haruguchi',
        title: '競技プログラミングでみる Ruby の豊かさ',
        image: 'https://avatars.githubusercontent.com/u/57053236?v=4',
        isTalk: true,
      },
      {
        start: '15:05',
        end: '15:25',
        name: '',
        url: '',
        title: 'Break',
        image: '',
        isTalk: false,
      },
      {
        start: '15:25',
        end: '15:55',
        name: 'Koichi ITO',
        url: 'koic',
        title: 'Minify Ruby Code',
        image: 'https://avatars.githubusercontent.com/u/13203?v=4',
        isTalk: true,
      },
      {
        start: '15:55',
        end: '16:00',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '16:00',
        end: '16:05',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '16:05',
        end: '16:20',
        name: '前田修吾',
        url: 'shugomaeda',
        title: 'strscanなしで文字列をスキャンする',
        image: 'https://avatars.githubusercontent.com/u/34552?v=4',
        isTalk: true,
      },
      {
        start: '16:20',
        end: '16:50',
        name: 'willnet',
        url: 'willnet',
        title: 'どうしてこうなった？から理解するActive Recordの関連の裏側',
        image: 'https://avatars.githubusercontent.com/u/82371?v=4',
        isTalk: true,
      },
      {
        start: '16:50',
        end: '17:10',
        name: '',
        url: '',
        title: 'Break',
        image: '',
        isTalk: false,
      },
      {
        start: '17:10',
        end: '17:15',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '17:15',
        end: '17:20',
        name: '',
        url: '',
        title: 'Sponsor LT',
        image: '',
        isTalk: false,
      },
      {
        start: '17:20',
        end: '18:05',
        name: 'Hitoshi HASUMI',
        url: 'hasumikin',
        title: 'Keynote: T.B.D.',
        image: 'https://avatars.githubusercontent.com/u/8454208?v=4',
        isTalk: true,
      },
      {
        start: '18:05',
        end: '18:15',
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

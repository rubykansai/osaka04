<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center">
        <v-card max-width="70vw" min-width="70vw" class="py-10" :elevation="0">
          <v-card-item>
            <v-img src="/logo.png" width="10vh"/>
            <h1 class="text-h2 title mb-15">Speakers</h1>
            <div align="left">
              <h2 class="text-h5 title mb-2">Keynote Speakers</h2>
              <v-row class="justify-space-between">
                <v-col md="6" sm="6" xs="12" v-for="(speaker, index) in keyspeakers" :key="index">
                  <v-card class="speakers" align="center" flat>
                    <div class="py-2 px-2">
                      <v-img :src="speaker.image" max-height="10rem" max-width="10rem" cover></v-img>
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn class="mx-2" icon="mdi-twitter" flat></v-btn></a>
                        <a :href="speaker.github"><v-btn class="mx-2" icon="mdi-github" flat></v-btn></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">{{ speaker.description }}</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-divider class="my-10"></v-divider>
              <h2 class="text-h5 title mb-2">Speakers</h2>
              <v-row>
                <v-col md="4" sm="4" xs="12" v-for="(speaker, index) in speakers" :key="index">
                  <v-card class="speakers" align="center" flat>
                    <div class="py-2 px-2">
                      <v-img :src="speaker.image" max-height="10rem" max-width="10rem" cover></v-img>
                      <v-card-title>{{ speaker.name }}</v-card-title>
                      <div class="d-flex justify-center">
                        <a :href="speaker.twitter"><v-btn class="mx-2" icon="mdi-twitter" flat></v-btn></a>
                        <a :href="speaker.github"><v-btn class="mx-2" icon="mdi-github" flat></v-btn></a>
                      </div>
                      <div align="left">
                        <p class="text-body-2 mt-5">{{ speaker.description }}</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
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
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
      },
      {
        name: '審査中',
        twitter: 'https://twitter.com/#',
        github: 'https://github.com/#',
        description: '現在審査中です',
        image: 'https://github.com/user-attachments/assets/65c36705-d158-4084-ad8e-f16ae502c00c',
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

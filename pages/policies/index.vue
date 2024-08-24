<template>
  <v-app class="fill-height">
    <AppHeader />
    <v-row>
      <v-col align="center" class="pb-0 mt-12">
        <v-card
          max-width="70vw"
          min-width="70vw"
          class="mt-12"
          :elevation="0"
        >
          <v-card-item>
            <v-img
              src="/logo.png"
              width="10vh"
            />
            <h1 class="text-h2 title mb-15">
              Policies
            </h1>
            <div align="left">
              <h2 class="text-h5 title mb-2">
                アンチハラスメントポリシー
              </h2>
              <p class="text-body-1 mb-10">
                大阪Ruby会議は、誰もがハラスメントを受けずに参加できるカンファレンスを目指しています。いかなる形であれハラスメントは許容できません。<br>
                このルールを破る人は誰であろうと、オーガナイザーの裁量で警告を与えたり、カンファレンスやカンファレンス後の懇親の場から退場とすることもありえます。
              </p>
              <h2 class="text-h5 title mb-2">
                目的
              </h2>
              <p class="text-body-1 mb-10">
                当ポリシーは、大阪Ruby会議の参加者の全ての方に最大限に楽しんでいただくため、また、安心して参加していただくために設けられています。<br>
                当ポリシーに参加者の皆様の行動を制限する意図はありません。
              </p>
              <h2 class="text-h5 title mb-2">
                適用範囲
              </h2>
              <p class="text-body-1 mb-10">
                当ポリシーは、大阪Ruby会議の全てに適用されます。これには、カンファレンスの場、カンファレンス後の懇親の場でのコミュニケーションや振る舞い、プレゼンテーションの内容、ブログやソーシャルメディアでの発言が含まれます。<br>
                また、当ポリシーは参加者、スポンサー企業の皆様、スピーカー、スタッフ、その他の関係者全てに適用されます。
              </p>
              <h2 class="text-h5 title mb-2">
                禁止されるハラスメント
              </h2>
              <p class="text-body-1 mb-2">
                ハラスメントには以下のようなものを含み、また、これに限りません。ハラスメント行為をやめるように要請された参加者は直ちに従ってください。
              </p>
              <ul class="text-body-1 mb-10">
                <li>- ジェンダー、性自認やジェンダー表現、性的指向、障碍、容貌、体型、人種、民族、年齢、宗教あるいは無宗教についての攻撃的なコメントをすること</li>
                <li>- 意図的な威嚇行為</li>
                <li>- 公共のスペースで性的な画像を掲示すること</li>
                <li>- 脅迫、ストーキング、つきまとい、または、それらを計画すること</li>
                <li>- いやがらせ目的の撮影や録音</li>
                <li>- 発表や他のイベントを継続的に妨害すること</li>
                <li>- 不適切な身体的接触</li>
                <li>- その他、性的な言葉や画像を含むコミュニケーション</li>
                <li>- ジェンダーを強く意識させるコンテキストで、特定の個人をほめたたえる行為</li>
                <li>- 以上のような行為を推奨したり、擁護したりすること</li>
              </ul>
              <h2 class="text-h5 title mb-2">
                ハラスメントを受けたら、判断に迷ったら
              </h2>
              <p class="text-body-1 mb-10">
                ハラスメントを受けたと感じたり、他の参加者がハラスメントを受けているのを目撃した場合は、すぐに主催者またはスタッフにお知らせください。主催者は、すべての報告を機密に取り扱い、適切な対応を行います。
              </p>
              <h2 class="text-h5 title mb-2">
                問い合わせ先
              </h2>
              <p class="text-body-1 mb-2">
                当ポリシーについてのご質問などがある場合は、下記までご連絡ください。
              </p>
              <ul class="text-body-1 mb-10">
                <li>- <a href="mailto:osaka04@rubykaigi.org">osaka04@rubykaigi.org</a></li>
              </ul>
              <h2 class="text-h5 title mb-2">
                参考文献
              </h2>
              <ul class="text-body-1 mb-10">
                <li>- <a href="https://rubykaigi.org/2024/policies/">RubyKaigiアンチハラスメントポリシー</a></li>
                <li>- <a href="https://kaigionrails.org/2024/policies/">Kaigi on Railsアンチハラスメントポリシー</a></li>
              </ul>
              <h2 class="text-h5 title mb-2">
                ライセンス
              </h2>
              <p class="text-body-1 mb-2">
                当ポリシーは <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.ja"
                  target="_blank"
                >CC BY 4.0</a> のライセンス下で提供されます。
              </p>
              <p class="text-body-1 mb-2">
                This work is licensed under <a
                  href="https://creativecommons.org/licenses/by/4.0/deed.en"
                  target="_blank"
                >CC BY 4.0</a> .
              </p>
              <v-img
                src="/img-cc.png"
                max-width="120px"
              />
            </div>
          </v-card-item>
        </v-card>
        <FooterWave />
        <FooterBlock />
      </v-col>
    </v-row>
  </v-app>
</template>

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

.footer {
  color: #fff;
  background-color: #419dbf;
  padding-top: 50px;
  padding-bottom: 15px;
}

.footer a {
  color: #fff;
}
</style>

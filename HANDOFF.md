# VISION Personal Gym 公式サイト 引き継ぎ書

最終更新: 2026-07-13

岡山県苫田郡鏡野町の完全マンツーマン・パーソナルジム「VISION Personal Gym」の
公式サイト（1ページ完結LP）。正式な受注制作物。
※店名は 2026-07 に「VISION」で正式決定（旧仮名: STUDIO YU。リポジトリ名・URLは旧名のまま）。

---

## 1. 基本情報・URL

| 項目 | 内容 |
|------|------|
| 本番URL | https://portfolio-studio-yu-pied.vercel.app |
| GitHub | https://github.com/shimacraft8/portfolio-studio-yu |
| ローカル | `/Users/hiroshikento/Documents/portfolio-studio-yu`（SHIMA CRAFT の隣・別リポジトリ） |
| GitHubアカウント | shimacraft8 |
| Vercel scope | **shimacraft8-6355s-projects**（他案件 shima-craft / haishin-calendar と同じ集約アカウント） |

※2026-06-11 に Vercel を旧アカウント kizuna-guide-service-s-projects から
shimacraft8-6355s-projects へ移行。`portfolio-studio-yu.vercel.app`（無印）は
旧アカウントが保持しているため、新アカウントの正規URLは `-pied` 付き。
※新アカウントでは GitHub 連携済み（main へ push すると自動デプロイされる）。
※独自ドメインは取得後に接続予定。現状は vercel.app のまま。

---

## 2. 技術スタック

- Next.js 14（App Router）+ TypeScript
- Tailwind CSS 3 + Framer Motion 11
- next/font/google: Outfit（見出し英字）/ Noto Sans JP（本文・和文）
- ホスティング: Vercel（CLI手動デプロイ）

---

## 3. ディレクトリ構成

```
portfolio-studio-yu/
├── app/
│   ├── layout.tsx        # Metadata/OGP・フォント・StructuredData/Analytics読込
│   ├── page.tsx          # 全セクションを組み立てるメインページ
│   ├── globals.css       # 配色・流体タイポ・reduced-motion対応
│   ├── sitemap.ts        # 自動生成
│   └── robots.ts         # 自動生成
├── src/
│   ├── data/site.ts      # ★全文言の一元管理（差し替えはここ）
│   └── components/
│       ├── Header.tsx          # グラスモーフィズム・スクロールで文字色切替
│       ├── MobileCTA.tsx       # スマホ下部固定CTA（電話/Instagram）
│       ├── Reveal.tsx          # whileInView fadeInUp ラッパー
│       ├── Stats.tsx           # 実績カウントアップ
│       ├── VoiceCarousel.tsx   # お客様の声 5秒自動カルーセル
│       ├── Faq.tsx             # FAQアコーディオン
│       ├── StructuredData.tsx  # 構造化データ（HealthClub）
│       └── Analytics.tsx       # GA4（環境変数未設定なら読み込まない）
├── app/icon.png           # favicon（ロゴから生成）
└── public/images/
    ├── gym-interior.jpg   # ヒーロー背景（ジム内装・モノクロ）
    ├── logo.jpg           # ロゴ原本（黒・白背景1280px）
    ├── logo-black.png     # 透過・黒ロゴ（ヘッダー/フッター用）
    ├── logo-white.png     # 透過・白ロゴ（ヒーロー/ヘッダー最上部用）
    ├── trainer-pose.jpg   # トレーナー紹介（大会・全身ポーズ）
    └── trainer-smile.jpg  # トレーナー紹介サブ写真（2枚重ねの小さい方）
```

---

## 4. ページ構成

Hero → Concept（特徴3つ）→ Stats（実績カウントアップ）→ Trainer（トレーナー紹介）
→ Menu（4メニュー）→ Price（キャンペーンバナー＋回数券/月額/セミパーソナルの3グループ）→ Voice（お客様の声）
→ Access/FAQ → Contact → Footer

---

## 5. 配色・デザイン（ライトグレー・モノトーン／第3版）

戸田さん指定（2026-07 LINE）「ライトグレー・LYFTっぽい色合い」＋参考サイト
https://pts-stella.jp に合わせ、モノトーンへ全面リデザイン済み。
配色は `tailwind.config.ts` の colors で一元管理。

| トークン | 値 | 用途 |
|---------|-----|------|
| bg | #f4f5f6 | 背景（ライトグレー） |
| accent | #17181a | アクセント＝ほぼ黒（CTA・強調） |
| accent-deep | #000000 | アクセント濃色 |
| text | #17181a | 文字（ほぼ黒） |
| card | #ffffff | カード背景（白） |
| card2 | #eceef0 | セクション/カード背景（濃グレー） |
| line | #e0e3e6 | 罫線 |

- ヒーロー: モノクロのジム写真＋黒グラデーション、中央に白ロゴ＋白見出し、
  白CTA、入会金無料キャンペーンのピル表示
- ヘッダー: ヒーロー上=白ロゴ+白文字/白CTA、スクロール後=黒ロゴ+黒文字/黒CTA に自動切替
- clamp()流体タイポ、カード浮き上がり、グラスモーフィズムヘッダー
- prefers-reduced-motion対応、フォーカス可視化
- 変遷: 第1版ダークネイビー → 第2版暖色 → 第3版モノトーン（クライアント指定） → 第3.1版デザイン密度強化（現行）
- 第3.1版の要素: セクション見出し背景の大型ゴーストEN文字（SectionHead）、Stats黒帯バンド、
  Contact黒セクション、トレーナー写真2枚重ね（trainer-smile活用）、ヒーローSCROLLインジケータ、
  料金はSTELLA式（入会金0円＋体験のデュオカード → 各グループに「こんな方に」チェック＋黒ヘッダーカード、
  1回あたりを大きく表示）。参考: pts-stella.jp

---

## 6. 主要コンテンツ（※仮の項目に注意）

- 店名: **VISION**（フル表記 VISION Personal Gym）— 2026-07 正式決定
- ロゴ: `public/images/` に配置（logo.jpg=原本 / logo-black.png・logo-white.png=透過版、
  元ファイルは `~/Documents/戸田くん/ジムロゴ.jpg`）。favicon は `app/icon.png`
- キャッチ: 鍛える、整える、続けられる。
- トレーナー: 戸田 有哉（TODA YUYA）/ パーソナルトレーナー・ピラティスインストラクター
  - 資格タグ: パーソナルトレーナー / ピラティスインストラクター(FRP) / メンズフィジーク出場
  - ※「ナチュラル（無投薬）」表記・「Natural Athlete」タグは削除済み
- 実績（※仮）: 指導歴10年+ / 指導実績100名+ / 満足度4.9（画面に「※実績数値は仮です」注記）
- メニュー: ボディメイク/筋力アップ・ダイエット/減量・姿勢改善/ピラティス・痛み/不調ケア
- キャンペーン（2026-07 戸田さん指定）: 入会金11,000円→無料 / カウンセリング無料 /
  カウンセリング時の体験20分1,000円（ヒーローのピル＋Price先頭の黒バナーに表示）
- 料金（税込・2026-07 戸田さん指定の正式料金）:
  - 回数券: 4回25,000 / 8回48,000 / 16回90,000 / 24回132,000
  - 月額（毎月自動引落）: 月4回22,000 / 月8回40,000
  - セミパーソナル: 4回18,000 / 8回35,000（※8回の「1回あたり4,350円」は原文ママ。
    35,000÷8=4,375のため戸田さんに要確認）
  - 表示形式: 各グループに対象者チェックリスト（コピーは制作側で作成した汎用文言・要すれば調整）
- お客様の声: 仮テキスト3件（「※掲載は仮テキストです」注記）
- アクセス: 岡山県苫田郡鏡野町・完全予約制。地図は撤去し「予約時に個別案内」の文言（※後でiframe追加可）
  ※「2025年夏プレオープン予定」の行は情報が古いため削除済み（正式オープン日は要確認）
- 問い合わせ: フォームなし。Instagram DM(@yu_fitness_jp) + 電話(080-2889-8819)に集約
- メール: yu.fit.jp@gmail.com ※仮

---

## 7. 環境変数（Vercel / .env.example）

| 変数 | 用途 | 現状 |
|------|------|------|
| NEXT_PUBLIC_SITE_URL | 本番URL（OGP/sitemap/構造化データ） | production登録済み（https://portfolio-studio-yu-pied.vercel.app） |
| NEXT_PUBLIC_GA_ID | GA4測定ID | 未設定（設定すると自動で計測開始） |

---

## 8. 開発・デプロイ手順

```bash
# ローカル開発（3000はSHIMA CRAFTが使用中のため別ポート）
npm install
npm run dev -- -p 3210      # http://localhost:3210

# ビルド確認
npm run build

# デプロイ（本番）
# 方法A（推奨）: GitHub連携済みなので push すれば自動デプロイ
git add -A && git commit -m "..." && git push origin main
# 方法B: CLIで手動デプロイ
vercel --prod --yes --scope shimacraft8-6355s-projects
```

---

## 9. よくある差し替え作業

- 文言・料金・声・FAQ・実績の変更 → `src/data/site.ts` のみ編集
- 配色の変更 → `tailwind.config.ts` の colors
- 写真の差し替え → `public/images/` に同名で上書き
- 地図を入れる → page.tsx の Access セクションに Google Map の iframe を追加
- 独自ドメイン接続 → Vercelダッシュボードから（店名はVISIONで確定済み）

---

## 10. 未対応・申し送り事項

- Vercel は shimacraft8-6355s-projects アカウントに移行済み・**GitHub連携済み**
  （main push で自動デプロイ）。旧 kizuna アカウント側の旧デプロイ（無印URL）は
  不要であれば後日削除してよい。
- 独自ドメインは未接続（現状 `-pied` 付き vercel.app のまま）。取得後にVercelで接続。
- 正式オープン日・セミパーソナル8回の単価表記（4,350 vs 4,375）は戸田さんに要確認。
- アクセスの地図は現状なし（住所確定後に iframe 差し替え予定）。

---

## 11. コミット履歴

- `02fb03e` feat: STUDIO YU パーソナルジム公式サイト（Next.js 14 LP）初版
- `f52b23d` feat: 暖色系テーマへ全面リデザイン・カーソル/地図/無投薬表記を削除

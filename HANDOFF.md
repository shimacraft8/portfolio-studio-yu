# STUDIO YU 公式サイト 引き継ぎ書

最終更新: 2026-06-11

岡山県苫田郡鏡野町の完全マンツーマン・パーソナルジム「STUDIO YU（仮名）」の
公式サイト（1ページ完結LP）。正式な受注制作物。

---

## 1. 基本情報・URL

| 項目 | 内容 |
|------|------|
| 本番URL | https://portfolio-studio-yu.vercel.app |
| GitHub | https://github.com/shimacraft8/portfolio-studio-yu |
| ローカル | `/Users/hiroshikento/Documents/portfolio-studio-yu`（SHIMA CRAFT の隣・別リポジトリ） |
| GitHubアカウント | shimacraft8 |
| Vercel scope | kizuna-guide-service-s-projects（ログイン名: kizunaguideservice-1112） |

※店名・独自ドメインは確定後に接続予定。今回は vercel.app のままでOK。

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
└── public/images/
    ├── gym-interior.jpg   # ヒーロー背景（ジム内装・モノクロ）
    ├── trainer-pose.jpg   # トレーナー紹介（大会・全身ポーズ）
    └── trainer-smile.jpg  # 予備（大会・笑顔）※現状未使用
```

---

## 4. ページ構成

Hero → Concept（特徴3つ）→ Stats（実績カウントアップ）→ Trainer（トレーナー紹介）
→ Menu（4メニュー）→ Price（料金3プラン）→ Voice（お客様の声）
→ Access/FAQ → Contact → Footer

---

## 5. 配色・デザイン（暖色系・第2版）

黒基調から「安心感・温かみ」のある暖色系へ全面リデザイン済み。
配色は `tailwind.config.ts` の colors で一元管理。

| トークン | 値 | 用途 |
|---------|-----|------|
| bg | #faf4ea | 背景（温かいクリーム） |
| accent | #c47a4a | アクセント（テラコッタ／琥珀） |
| accent-deep | #a85f33 | アクセント濃色（文字用） |
| text | #33271d | 文字（温かい焦げ茶。純黒は不使用） |
| card | #fffaf2 | カード背景 |
| card2 | #f3e9d8 | セクション/カード背景（濃） |
| line | #e3d5bf | 罫線 |

- ヒーロー: ジム写真に温かいセピア調グラデーション（`#2a1a10`系）を重ね、淡色見出し
- ヘッダー: ヒーロー上は淡色文字、スクロール後はクリーム背景＋焦げ茶文字に自動切替
- clamp()流体タイポ、Bentoカード浮き上がり、グラスモーフィズムヘッダー
- prefers-reduced-motion対応、フォーカス可視化
- ※PCカスタムカーソル（追従ドット）は第2版で削除済み

---

## 6. 主要コンテンツ（※仮の項目に注意）

- 店名: STUDIO YU ※仮名
- キャッチ: 鍛える、整える、続けられる。
- トレーナー: 戸田 有哉（TODA YUYA）/ パーソナルトレーナー・ピラティスインストラクター
  - 資格タグ: パーソナルトレーナー / ピラティスインストラクター(FRP) / メンズフィジーク出場
  - ※「ナチュラル（無投薬）」表記・「Natural Athlete」タグは削除済み
- 実績（※仮）: 指導歴10年+ / 指導実績100名+ / 満足度4.9（画面に「※実績数値は仮です」注記）
- メニュー: ボディメイク/筋力アップ・ダイエット/減量・姿勢改善/ピラティス・痛み/不調ケア
- 料金（税込）: 都度7,000円 / 4回26,000円（人気）/ 8回48,000円
- お客様の声: 仮テキスト3件（「※掲載は仮テキストです」注記）
- アクセス: 岡山県苫田郡鏡野町・完全予約制。地図は撤去し「予約時に個別案内」の文言（※後でiframe追加可）
- 問い合わせ: フォームなし。Instagram DM(@yu_fitness_jp) + 電話(080-2889-8819)に集約
- メール: yu.fit.jp@gmail.com ※仮

---

## 7. 環境変数（Vercel / .env.example）

| 変数 | 用途 | 現状 |
|------|------|------|
| NEXT_PUBLIC_SITE_URL | 本番URL（OGP/sitemap/構造化データ） | production登録済み |
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
git add -A && git commit -m "..." && git push origin main
vercel --prod --yes --scope kizuna-guide-service-s-projects
```

---

## 9. よくある差し替え作業

- 文言・料金・声・FAQ・実績の変更 → `src/data/site.ts` のみ編集
- 配色の変更 → `tailwind.config.ts` の colors
- 写真の差し替え → `public/images/` に同名で上書き
- 地図を入れる → page.tsx の Access セクションに Google Map の iframe を追加
- 店名確定・独自ドメイン → site.ts の name 変更 + Vercelでドメイン接続

---

## 10. 未対応・申し送り事項

- **Vercel と GitHub の自動連携が未接続**（「GitHubにLogin Connectionの追加が必要」エラー）。
  現状は `vercel --prod` のCLI手動デプロイ運用。push連動したい場合は
  Vercelダッシュボード → Project Settings → Git から手動で連携許可が必要。
- 独自ドメインは店名決定後に接続予定（現状 vercel.app のまま）。
- アクセスの地図は現状なし（住所確定後に iframe 差し替え予定）。
- trainer-smile.jpg は配置済みだが未使用（必要なら Trainer セクション等で活用可）。

---

## 11. コミット履歴

- `02fb03e` feat: STUDIO YU パーソナルジム公式サイト（Next.js 14 LP）初版
- `f52b23d` feat: 暖色系テーマへ全面リデザイン・カーソル/地図/無投薬表記を削除

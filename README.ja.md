# TODOリスト（Next.jsで構築した）

Next.js を用いて構築したモダンな TODO リスト Web アプリケーションです。TypeScript、React、Tailwind CSS を活用した、モダンな Web 開発手法を実践しています。

## 概要

これは、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) を使用して作成された、[Next.js](https://nextjs.org) と [React](https://react.dev/) を用いた個人用の練習プロジェクトです。

## はじめに

### 必要な環境

- Node.js 18以上
- [Bun](https://bun.sh)（推奨）またはnpm/yarn/pnpm

### インストール

1. リポジトリをクローンします：
```bash
git clone https://github.com/thomascwo/nextjs-todo-list.git
cd nextjs-todo-list
```

2. 依存関係をインストールします：
```bash
# 推奨
bun install

# または
npm install
yarn install
pnpm install
```

### 開発サーバーの起動

開発サーバーを起動します：

```bash
# 推奨
bun dev

# または
npm run dev
yarn dev
pnpm dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開いてアプリケーションを表示します。

## 実装された機能

- 📱 **レスポンシブデザイン** - すべてのデバイスでシームレスな体験
- 📝 **タスク管理** - タスクの効率的な作成、編集、削除
- 💾 **状態管理** - 永続的な状態ストレージの処理
- 🌍 **多言語対応** - ページをリロードせずに言語を即座に切り替え
- 🎨 **モダンUI** - Tailwind CSSによるクリーンでレスポンシブなUI
- ⚡ **滑らかなアニメーション** - 流動的なトランジションとインタラクティブなモーション

## 技術スタック

- **フレームワーク：** [Next.js](https://nextjs.org) 16 with App Router
- **言語：** [TypeScript](https://www.typescriptlang.org)
- **スタイリング：** [Tailwind CSS](https://tailwindcss.com)
- **UIコンポーネント：** [HeroUI](https://heroui.com)
- **アニメーション：** [Motion](https://motion.dev)
- **多言語対応：** [i18next](https://www.i18next.com) & [react-i18next](https://react.i18next.com)
- **状態管理：** [Zustand](https://github.com/pmndrs/zustand)
- **アイコン：** [@gravity-ui/icons](https://gravity-ui.com)
- **ユーティリティ：** clsx, nanoid, react-device-detect

## プロジェクト構造

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # ホームページ
│   ├── globals.css       # グローバルスタイル
├── components/           # UIコンポーネント
├── store/                # Zustandストア
├── types/                # 型定義
├── i18n/                 # i18n設定
│   └── locales/
│       ├── en.json       # 英語翻訳
│       └── jp.json       # 日本語翻訳
└── lib/                  # ユーティリティとデータ
```

## 作成者

[Thomas Cheung](https://github.com/thomascwo)によって作成

## ライセンス

このプロジェクトは非公開であり、公共利用向けのライセンスは付与されていません。

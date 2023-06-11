## 概要

以下の動画を参考に TODO アプリを作成する

[React + Laravel SPA 開発講座](https://www.youtube.com/watch?v=hPjcbKtpTjY&list=PL3B2bjwrmhfQkcBEww0gN_kcRAHntAgxG)

学んだこと等は以下の Qiita 記事にまとめる

[dev-camp LaravelとReactでTODOアプリを作成する](https://qiita.com/KinashiRintaro/items/fc50dbcc2c214e59f8fd)

## 開発用コマンド

```
// git clone時
composer install
npm install
cp .env.example .env
php artisan key:generate
// DBはsqliteを使用しています。
touch database/database.sqlite 

// サーバー立ち上げ
php artisan serv
npm run dev

// テストの実行
./vendor/bin/phpunit tests

```

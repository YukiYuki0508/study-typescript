#!/usr/bin/env bash

echo '全てのファイル（public）をzipにまとめますか？ / All files? [y/n]'
read all

# ファイル一式の場合
if [ $all = 'y' ]; then
  git archive --format=zip --prefix=public/ HEAD:public -o ~/Desktop/public.$(date +"%y%m%d%H%M").zip
# 差分ファイルの場合
elif [ $all = 'n' ]; then
  echo '差分元のコミットIDを入力してください。 / Enter commit ID'
  read commitID
  git archive --format=zip --prefix=public/ HEAD:public $(git diff --diff-filter=D --name-only HEAD:public ${commitID}) -o ~/Desktop/public.$(date +"%y%m%d%H%M").zip
# 不正な値が入力された場合
else
  echo '不正な値が入力されました。Invalid values.'
  exit 1
fi

echo 'デスクトップに圧縮したファイルを保存しました。 / Check your desktop'

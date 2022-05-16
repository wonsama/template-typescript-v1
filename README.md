# template-typescript-v1

타입스크립트 탬플릿

`degit https://github.com/wonsama/template-typescript-v1.git [저장할 폴더명]`

(기존에 폴더가 있는 경우)
`degit https://github.com/wonsama/template-typescript-v1.git --force [저장할 폴더명]`

위와 같이 저장소를 복제하여 사용

## 사전 설치, 설정

### nodejs

- https://nodejs.org/en/download/

### vscode plugin

- ZipFS

### yarn

- npm install -g yarn

## 설치

```sh
degit https://github.com/wonsama/template-typescript-v1.git myapp
cd myapp
yarn
```

## 실행

`yarn dev` : 실행
`yarn build` : 타입스크립트 컴파일
`yarn start` : 컴파일 된 스크립트 실행

## pm2 (필요 시)

> 소스 빌드 후 `yarn node ./bin/app.js`로 실행 하면 됨
> 하지만 node 로 실행 시 pnp 모드를 반영해 줘야 되서 빌드 된 소스 진입점에(예시 ./bin/app.js)
> `require("../.pnp.cjs").setup();` 구문을 추가하여 동작하도록 함

- npm install -g pm2

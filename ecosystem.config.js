module.exports = {
  apps: [
    {
      name: "myapp" /* PM2 앱 이름 */,
      script: "./bin/app.js" /* 실행 스크립트 */,
      log_date_format: "YYYY-MM-DD HH:mm:ss" /* 로그 형식 */,
    },
  ],
};

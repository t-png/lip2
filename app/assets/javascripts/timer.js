<!DOCTYPE html>
<html>
  <head>
  <script>
   {/* カウントダウンする秒数 */}
  var sec = 1200;
 
  // 開始日時を設定
  var dt = new Date();
  console.log("Start: ", dt);
  // 終了時刻を開始日時+カウントダウンする秒数に設定
  var endDt = new Date(dt.getTime() + sec * 1000);
  console.log("End : ", endDt);

  // 1秒おきにカウントダウン
  var cnt = sec;
  var id = setInterval(function(){
    cnt--;
    console.log(cnt);
    // 現在日時と終了日時を比較
    dt = new Date();
    if(dt.getTime() >= endDt.getTime()){
      clearInterval(id);
      console.log("Finish!");
    }
  }, 1000);
  </script>
  </head>
  <body></body>
</html>
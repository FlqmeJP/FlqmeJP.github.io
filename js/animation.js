$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  var h = $(window).height();//ブラウザの高さを取得
  $(".splashbg").css({
  "border-width":h,//ボーダーの太さにブラウザの高さを代入
  "animation-name":"backBoxAnime"//animation-nameを定義
  }); 
  });
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  });

  // 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  　　var elemPos = $(this).offset().top-50; //要素より、50px上の
  　　var scroll = $(window).scrollTop();
  　　var windowHeight = $(window).height();
  　　if (scroll >= elemPos - windowHeight){
  　　$(this).addClass('fadeUp');
  　　// 画面内に入ったらfadeInというクラス名を追記
  　　}else{
  　　　$(this).removeClass('fadeUp');
  　　// 画面外に出たらfadeInというクラス名を外す
  　　}
  　　});
  
  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
  　　var elemPos = $(this).offset().top-50; //要素より、50px上の
  　　var scroll = $(window).scrollTop();
  　　var windowHeight = $(window).height();
  　　if (scroll >= elemPos - windowHeight){
  　　$(this).addClass('fadeDown');
  　　// 画面内に入ったらfadeDownというクラス名を追記
  　　}else{
  　　　$(this).removeClass('fadeDown');
  　　// 画面外に出たらfadeDownというクラス名を外す
  　　}
  　　});
  
  
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込ま

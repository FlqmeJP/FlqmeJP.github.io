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

    //テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  

$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 600) {
    // Galaxy Fold折りたたまれた状態向けのスタイルを適用
  } else {
    // Galaxy Fold展開された状態向けのスタイルを適用
  }
});
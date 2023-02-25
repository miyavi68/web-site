$(document).ready(function () {
  $(window).on("scroll", function () {
    // スクロール量が200より大きかったらクラスの付与そうでないのならクラスの削除
    if ($(this).scrollTop() > 200) {
      $(".l-header").addClass("is-active");
    } else {
      $(".l-header").removeClass("is-active");
    }
  });

  $(".l-header__hambergar").click(function () {
    $(".l-header__hambergar").toggleClass("is-active");
    $(".l-header__nav--container").toggleClass("open");
  });
});

// アニメーション終了後サイトを表示
$(document).ready(function () {
  // svgのstyleをopacity: 0にしてからopacity: 1にした。duration: [変化する秒数]はデフォルトの400。
  // 初めは見えないが0.4秒後見えるようになる
  $("#intro").css({
    opacity: 0
  });
  $("#intro").animate({
    opacity: 1
  }, 400);
  // stroke はオブジェクトを囲む線の色を設定
  // stroke-dasharray:破線のピッチ
  // stroke-dashoffset:破線のスタート位置
  // svgの線のアニメーション。書き終わるまでの時間
  $(".c-intro>svg>g>path").css({
    "stroke-dasharray": "3036, 3038",
    "stroke-dashoffset": "2999"
  });
  $(".c-intro>svg>g>path").animate({
    "stroke-dasharray": "3036, 3038",
    "stroke-dashoffset": "0"
  }, 1500);
  // setTimeoutはある処理を一定時間後に実行するように命令することができるメソッド
  // 1.2秒後is-animeのクラスを付与しさらにcssの方でsvgの色を変えるアニメーションを設定した
  setTimeout(function () {
    $("#intro").addClass("is-anime");
  }, 1200);
  // 上の処理が終了し非表示にする。fadein(ゆっくり表示),fadeOut(ゆっくり非表示),それらを交互に表示するfadeToggle(切り替え)
  setTimeout(function () {
    $(".c-intro").fadeOut();
  }, 1700)
});

// スクロールしたらイベント発火
// https://dezanari.com/jquery-scroll-fadein/
$(document).ready(function () {
  $(window).scroll(function () {
    // オブジェクトに対して繰り返し処理を行う
    $(".p-main__logo").each(function () {
      /* 要素の位置を取得。画面左上からHTML要素までの距離 */
      const offsetTop = $(this).offset().top;
      /* スクロール位置を取得 */
      const scroll = $(window).scrollTop();
      /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      const windowHeight = $(window).height();
      // 条件式の左辺「スクロール位置」が右辺の値より大きければ、条件式が成立するので「true」となり、処理が実行される
      if (scroll > offsetTop - windowHeight) {
        $(this).addClass("fadeInUp");
      }
    });
  });
});
$(document).ready(function () {
  $(".p-contact__datailView--box").click(function () {
    $(".p-contact__datailView--box").toggleClass("is-active");

    // $(".p-contact__datailView--list").css({opacity:0,top:40});
    // $(".p-contact__datailView--list").animate({opacity:1,top:60});
    $(".p-contact__datailView--list").toggleClass("hidden");
    // $(".p-contact__datailView--list").slideToggle();
    // display:noneとblockを切り替える。そのままでは表示非表示が反対になる。display:noneを設定しておく。
  });
});

// $(document).ready(function () {
//   $(".p-contact__datailView--box").click(function () {
//     if (".p-contact__datailView--box" && ".p-contact__datailView--list") {
//       $(".p-contact__datailView--list").animate({
//         "top": "40px",
//         "opaciti": "0"
//       }, 300, () => {
//         $(".p-contact__datailView--list").addClass("hidden");
//       });
//     } else (".p-contact__datailView--box" && ".p-contact__datailView--list") {
//       $(".p-contact__datailView--list").removeClass("hidden").animate({
//         "top": "60px",
//         "opacity": "1"
//       }, 300, )
//     };
// });

$(document).ready(function () {
  $(".p-contact__datailView--box").on("click", function () {
    // $(".p-contact__datailView--list").css({opacity:0,top:40});
    // $(".p-contact__datailView--list").animate({opacity:0,top:40});
    // $(".p-contact__datailView--list").animate({opacity:1,top:60});
  });
});
$(document).ready(function () {
  $(".p-contact__datailView--box").off("click", function () {
    // $(".p-contact__datailView--list").css({opacity:0,top:40});
    // $(".p-contact__datailView--list").animate({opacity:1,top:60});
    // $(".p-contact__datailView--list").animate({opacity:0,top:40});
  });
});

// addClass toggleClass 両方記述したら動かなかった
// 書いてある内容が重複しているからか？
// addClass　クラスの付与
// removeClass　クラスの削除
// toggleClass　指定したクラス名のある場合は削除を行い、なければ追加する
// fadeIn　その場からゆっくりと表示させる。
// each文で使われているフェードインの記述は任意で茎な場所からフェードインできる
$('要素').css({
  'プロパティ': '値',
  'プロパティ': '値'
});
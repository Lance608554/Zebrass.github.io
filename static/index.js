/*
 * 页面ready方法
 */
$(document).ready(function() {
    categoryDisplay();
    generateContent();
    backToTop();
    setDocumentHeight();
    $("img").addClass("img-responsive");
    $('[data-toggle="tooltip"]').tooltip(); //激活tooltip
});

/*
 * 分类展示
 */
function categoryDisplay() {
    /*展示全部*/
    $('.post-body>div[post-cate!=All]').hide();
    /*展示分类*/
    $('.categories-item').click(function() {
        var cate = $(this).attr('cate');
        $('.post-body>div[post-cate!=' + cate + ']').hide(250);
        $('.post-body>div[post-cate=' + cate + ']').show(400);
    });
}

/*
 * 回到顶部
 */
function backToTop() {
    //滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    //点击回到顶部
    $("#top").click(function() {
        $("body,html").animate({
            scrollTop: "0"
        }, 500);
    });
}

/*
 * 文章摘要
 */
function generateContent() {
    //没有摘要则以整个页面显示
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $("#article_summary").hide().parent().removeClass('col-sm-3');
        $('#my_article').parent().removeClass('col-sm-9').addClass('col-sm-12');
    } else {
        $('.content').html('<ul>' + $('#markdown-toc').html() + '</ul>');
        $('#markdown-toc').hide();
    }
}

/*
 * 设置适当的页面的长度
 */
function setDocumentHeight(){
    var documentHeight = parseInt(document.body.clientHeight); //求取网页高度（包含了页面的不可见高度）
    var offsetTop = 1200-documentHeight;
    if(documentHeight < 1200) {
        $("footer").css("marginTop",offsetTop);
    }
}
/*
 * ҳ��ready����
 */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip(); //����tooltip
    categoryDisplay();
    generateContent();
    backToTop();
});

/*
 * ����չʾ
 */
function categoryDisplay() {
    /*չʾȫ��*/
    $('.post-body>div[post-cate!=All]').hide();
    /*չʾ����*/
    $('.categories-item').click(function() {
        var cate = $(this).attr('cate');
        $('.post-body>div[post-cate!=' + cate + ']').hide(250);
        $('.post-body>div[post-cate=' + cate + ']').show(400);
    });
}

/*
 * �ص�����
 */
function backToTop() {
    //��ҳ�����ʾ���ض���
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    //����ص�����
    $("#top").click(function() {
        $("body,html").animate({
            scrollTop: "0"
        }, 500);
    });
}

/*
 * ����ժҪ
 */
function generateContent() {
    //û��ժҪ��������ҳ����ʾ
    if (typeof $('#markdown-toc').html() === 'undefined') {
        $("#article_summary").hide().parent().removeClass('col-sm-3');
        $('#my_article').parent().removeClass('col-sm-9').addClass('col-sm-12');
    } else {
        $('.content').html('<ul>' + $('#markdown-toc').html() + '</ul>');
        $('#markdown-toc').hide();
    }
}

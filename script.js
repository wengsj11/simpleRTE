 $(document).ready(function(){
    var editor = $('#WYSIWYG');

    $('#bold-btn').click(function(){
        document.execCommand("Bold", false, null);
    })
    $('#italic-btn').click(function(){
        document.execCommand("Italic", false, null);
    })
    $('#underline-btn').click(function(){
        document.execCommand("Underline", false, null);
    })
    $('#sup-btn').click(function(){
        document.execCommand("Superscript", false, null);
    })
    $('#sub-btn').click(function(){
        document.execCommand("Subscript", false, null);
    })
    $('#strike-btn').click(function(){
        document.execCommand("StrikeThrough", false, null);
    })
    $('#order-btn').click(function(){
        document.execCommand("InsertOrderedList", false, Math.round(Math.random() * 1000));
    })
    $('#unorder-btn').click(function(){
        document.execCommand("InsertUnorderedList", false, Math.round(Math.random() * 1000));
    })
    $('#changefont').change(function(){
        document.execCommand("FontName",false, $(this).val());
    });
    $('#fontSize').change(function(){
        document.execCommand("FontSize", false, $(this).val());  
    });
    $('#forecolor-btn').click(function(){
        document.execCommand("ForeColor", false, $("#color").val());  
    });
    $('#backcolor-btn').click(function(){
        document.execCommand("BackColor", false, $('#color').val());  
    });




    editor.bind('blur keyup paste copy cut mouseup', function () {
        var htmlnew = $(this).text(); //获取内容
        var str = htmlnew.replace(/\s+/g, ""); //去除空格
        $('#count').text(str.length); //字数
    })
    //触发拾色器click事件
})

